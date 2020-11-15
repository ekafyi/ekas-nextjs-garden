/** @jsx jsx */
import { jsx } from "theme-ui";
import { useForm } from "react-hook-form";
import { useColorMode } from "theme-ui";
import Link from "next/link";

// Use this to list manually curated tags from taxonomies.yml.
// Replace with allTags from pages/notes/index getStaticProps to list tags from the posts.
import { tags as configTags } from "taxonomies.yml";

const FIELD_TAGS = "tags";

// const RESET_SX = { variant: "buttons.pill", backgroundColor: "muted" };

const ALL_LINK_SX = {
  variant: "buttons.pill",
  backgroundColor: "transparent",
  borderColor: "transparent",
  fontWeight: "bold",
  textDecoration: "underline",
  px: 1,
  "&:hover": {
    color: "primary",
  },
};

const Input = ({ name, value, label, register, ...props }) => {
  const [colorMode] = useColorMode(); // workaround because theme-ui does not have boxShadowColor
  return (
    <>
      <label>
        <input
          className="sr-only"
          type="checkbox"
          name={name}
          value={value}
          ref={register}
          {...props}
        />
        <span
          sx={{
            variant: "buttons.pill",
            "input:checked + &": {
              color: "background",
              backgroundColor: "text",
              borderColor: "text",
            },
            "input:focus-visible:not(:checked) + &": {
              boxShadow: `0 0 0 2px ${
                colorMode === "default"
                  ? "rgba(40, 100, 265, .6)"
                  : "rgba(255, 240, 0, .6)"
              }`,
            },
          }}
        >
          {label}
        </span>
      </label>
    </>
  );
};

// = = =

export default function TaxonomyFilter({ onChangeTags }) {
  const {
    register,
    handleSubmit,
    // reset
  } = useForm();

  const handleClickTag = (data) => {
    onChangeTags(data[FIELD_TAGS]);
  };

  // const handleReset = () => { reset(); onChangeTags([]); };

  return (
    <form aria-label="Select topics">
      {/* <button type="button" onClick={handleReset} sx={RESET_SX}>reset</button> */}
      {configTags?.map((tag) => (
        <Input
          key={tag.name}
          value={tag.name}
          label={tag.friendlyName || tag.name}
          name={FIELD_TAGS}
          register={register}
          onInput={handleSubmit(handleClickTag)}
        />
      ))}
      <Link href="/notes/tags" passHref>
        <a sx={ALL_LINK_SX}>all tags &gt;</a>
      </Link>
    </form>
  );
}

/** @jsx jsx */
import { jsx } from "theme-ui";
import { useForm } from "react-hook-form";

// Use this to list manually curated tags from taxonomies.yml.
// Replace with allTags from pages/notes/index getStaticProps to list tags from the posts.
import { tags as configTags, techs as configTechs } from "../../taxonomies.yml";

const FIELD_TAGS = "tags";
const FIELD_TECHS = "techs";

const TAX_SX = {
  variant: "buttons.pill",
  "input:checked + &": {
    color: "background",
    backgroundColor: "text",
    borderColor: "text",
  },
  "input:focus-visible + &": {
    color: "background",
    backgroundColor: "primary",
  },
  "input:focus-visible + &::before": {
    content: '"[ ]"',
    mr: 1,
  },
  "input:focus-visible:checked + &::before": {
    content: '"[✓]"',
    mr: 1,
  },
};

const RESET_SX = {
  variant: "buttons.pill",
  backgroundColor: "muted",
};

const Input = ({ name, value, label, register, ...props }) => (
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
      <span sx={TAX_SX}>{label}</span>
    </label>
  </>
);

// = = =

export default function TaxonomyFilter({ onChangeTags, onChangeTechs }) {
  const { register, handleSubmit, reset } = useForm();

  const handleClickTag = (data) => {
    onChangeTags(data[FIELD_TAGS]);
  };

  const handleClickTech = (data) => {
    onChangeTechs(data[FIELD_TECHS]);
  };

  const handleReset = () => {
    reset();
    onChangeTags([]);
    onChangeTechs([]);
  };

  return (
    <form aria-label="Select topics">
      <button type="button" onClick={handleReset} sx={RESET_SX}>
        all
      </button>
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
      {configTechs?.map((tech) => (
        <Input
          key={tech.name}
          value={tech.name}
          label={tech.name}
          name={FIELD_TECHS}
          register={register}
          onInput={handleSubmit(handleClickTech)}
        />
      ))}
    </form>
  );
}

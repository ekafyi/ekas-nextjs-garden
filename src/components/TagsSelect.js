import React from "react";
import { useForm } from "react-hook-form";

// Use this to list manually curated tags from taxonomies.yml.
// Replace with allTags from pages/notes/index getStaticProps to list tags from the posts.
import { tags as configTags } from "../../taxonomies.yml";

const FIELD_NAME = "tags";
const BUTTON_CSS =
  "inline-block mr-1 mt-2 text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded";

const Input = ({ name, value, label, register, ...props }) => (
  <>
    <label className={BUTTON_CSS}>
      <span>{label}</span>
      <input
        type="checkbox"
        name={name}
        value={value}
        ref={register}
        {...props}
      />
    </label>
  </>
);

// = = =

export default function TagsSelect({ value, onChange }) {
  const { register, handleSubmit } = useForm();

  const handleCheck = (data) => {
    onChange(data[FIELD_NAME]);
  };

  return (
    <form>
      {configTags?.map((tag) => (
        <Input
          key={tag.name}
          name={FIELD_NAME}
          value={tag.name}
          label={tag.friendlyName || tag.name}
          register={register}
          onInput={handleSubmit(handleCheck)}
        />
      ))}
    </form>
  );
}

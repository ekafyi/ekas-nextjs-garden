import React from "react";
import { useForm } from "react-hook-form";

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
    console.log("😺 tagcheck!!", data[FIELD_NAME]);
    onChange(data[FIELD_NAME]);
  };

  return (
    <form>
      <Input
        onInput={handleSubmit(handleCheck)}
        name={FIELD_NAME}
        value="bookmarks"
        label="bookmarks"
        register={register}
      />
      <Input
        onInput={handleSubmit(handleCheck)}
        name={FIELD_NAME}
        value="TIPS"
        label="console-logs"
        register={register}
      />
      <Input
        onInput={handleSubmit(handleCheck)}
        name={FIELD_NAME}
        value="LEARNING_NOTES"
        label="learning-notes"
        register={register}
      />
    </form>
  );
}

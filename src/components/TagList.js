import React from "react";
// import { useCheckbox, useCheckboxGroup } from "@chakra-ui/core";

function TagButton(props) {
  // const { getCheckboxProps, getInputProps } = useCheckbox(props);

  // const input = getInputProps();
  // const checkbox = getCheckboxProps();

  return (
    <label>
      {props.value}
      {/* <input {...input} />
      <strong {...checkbox}>#{props.value}</strong> */}
    </label>
  );
}

// = = =

export default function TagList({ tags, value, onChange }) {
  console.log("😺 onChange ", onChange);
  console.log("🍕 value ", value);
  console.log("🌱 tags ", tags);

  // const { getCheckboxProps } = useCheckboxGroup({
  //   value,
  //   onChange,
  // });

  return (
    <div>
      {/* {tags.map((value) => {
        const tag = getCheckboxProps({ value });
        return <TagButton key={value} {...tag} />;
      })} */}
    </div>
  );
}

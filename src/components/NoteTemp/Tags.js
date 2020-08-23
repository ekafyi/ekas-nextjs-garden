/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function Tags() {
  return (
    <div sx={{ variant: "components.note.single.tagsList" }}>
      <a
        sx={{
          variant: "components.note.single.tag",
          background: "#d43088",
          color: "#fff",
        }}
        href="#"
      >
        graphql
      </a>
      {["learning notes", "some other tag"].map((tag) => (
        <a sx={{ variant: "components.note.single.tag" }} href="#">
          {tag}
        </a>
      ))}
    </div>
  );
}

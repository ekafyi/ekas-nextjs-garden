/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function Tags() {
  return (
    <div sx={{ variant: "components.note.tagsList" }}>
      <a
        sx={{
          variant: "buttons.pill",
          background: "#d43088",
          color: "#fff",
        }}
        href="#"
      >
        graphql
      </a>
      {["learning notes", "some other tag"].map((tag) => (
        <a sx={{ variant: "buttons.pill" }} href="#">
          {tag}
        </a>
      ))}
    </div>
  );
}

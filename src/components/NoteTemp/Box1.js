/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function BoxOne({ title, children, variant, bg }) {
  return (
    <Styled.div
      sx={{
        variant: variant || "",
        backgroundColor: bg || "muted",
        p: 4,
        mb: 6,
      }}
    >
      {title && <strong>{title}</strong>}
      {children || <p>some more thing</p>}
    </Styled.div>
  );
}

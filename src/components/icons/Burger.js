/** @jsx jsx */
import { jsx } from "theme-ui";

export default function Burger({ ...props }) {
  return (
    <button
      sx={{ variant: "components.nav.burger" }}
      aria-label="Open navigation"
      {...props}
    >
      <div />
      <div />
      <div />
    </button>
  );
}

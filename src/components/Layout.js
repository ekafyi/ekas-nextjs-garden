/** @jsx jsx */
import { jsx, Container } from "theme-ui"; // Container uses variant: "layout.container" by default

export default function Layout({ children, as, ...props }) {
  return (
    <Container as={as || "main"} {...props}>
      {children || ""}
    </Container>
  );
}

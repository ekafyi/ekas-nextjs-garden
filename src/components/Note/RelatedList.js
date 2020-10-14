/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const FALLBACK_TEXT = "recent notes";

export default function Related({ title = null, data, ...props }) {
  return (
    <nav
      sx={{ variant: "components.note.related" }}
      aria-label={title ? `other notes tagged ${title}` : FALLBACK_TEXT}
      {...props}
    >
      <header aria-hidden="true">
        <span className="h">
          {title ? (
            <>
              more in <strong>{title}</strong>
            </>
          ) : (
            <strong>{FALLBACK_TEXT}</strong>
          )}
        </span>
      </header>
      <ul className="b">
        {data.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug} passHref>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

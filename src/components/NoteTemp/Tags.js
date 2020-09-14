/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import {
  tags as tagsConfig,
  tech as techConfig,
} from "../../../taxonomies.yml";

const VARIANT = { variant: "buttons.pill" };

const getData = (name, source) => {
  const hasData = Object.keys(source).includes(name);
  return hasData ? source[name] : false;
};

const getTechSx = (name) => {
  return {
    ...VARIANT,
    background: getData(name, techConfig).background || undefined,
    color: getData(name, techConfig).color || undefined,
  };
};

// = = =

export default function Tags({ tags, tech }) {
  if (!tags && !tech) return false;

  return (
    <div sx={{ variant: "components.note.tagsList" }}>
      {tech ? (
        <>
          {tech.map((item) => (
            <Link
              key={item}
              href="/notes/tags/[tag]"
              as={`/notes/tags/${item}`}
              passHref
              prefetch={false}
            >
              <a sx={getTechSx(item)}>{item}</a>
            </Link>
          ))}
        </>
      ) : (
        false
      )}
      {tags ? (
        <>
          {tags.map((item) => {
            const tagLabel = getData(item, tagsConfig) ? getData(item, tagsConfig).label : item; // prettier-ignore
            return (
              <Link
                key={item}
                href="/notes/tags/[tag]"
                as={`/notes/tags/${tagLabel}`}
                passHref
                prefetch={false}
              >
                <a sx={VARIANT}>{tagLabel}</a>
              </Link>
            );
          })}
        </>
      ) : (
        false
      )}
    </div>
  );
}

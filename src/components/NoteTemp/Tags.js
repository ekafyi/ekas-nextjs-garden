/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import {
  getTaxonomyData_NEW,
  getTagFriendlyName,
} from "../../utils/note-utils";
import {
  tags as tagsConfig,
  techs as techsConfig,
} from "../../../taxonomies.yml";

const VARIANT = { variant: "buttons.pill" };

const getTechSx = (name) => {
  return {
    ...VARIANT,
    background: getTaxonomyData_NEW(name, techsConfig).background || undefined,
    color: getTaxonomyData_NEW(name, techsConfig).color || undefined,
  };
};

// = = =

export default function Tags({ tags, techs }) {
  if (!tags && !techs) return false;
  return (
    <div sx={{ variant: "components.note.tagsList" }}>
      {techs ? (
        <>
          {techs.map((item) => (
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
            const tagLabel = getTagFriendlyName(item, tagsConfig);
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

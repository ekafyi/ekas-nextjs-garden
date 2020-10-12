/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { getTagFriendlyName } from "src/utils/get-taxonomy";
import { tags as tagsConfig } from "taxonomies.yml";

// const getTechSx = (name) => {
//   return {
//     ...VARIANT, // { variant: "buttons.pill" }
//     background: getTaxonomyData_NEW(name, techsConfig).background || undefined,
//     color: getTaxonomyData_NEW(name, techsConfig).color || undefined,
//   };
// };

export default function Tags({ tags }) {
  if (!tags) return false;
  return (
    <div sx={{ variant: "components.note.tagsList" }}>
      {tags.map((item) => {
        const tagLabel = getTagFriendlyName(item, tagsConfig);
        return (
          <Link
            key={item}
            href="/notes/t/[tag]"
            as={`/notes/t/${tagLabel}`}
            passHref
            prefetch={false}
          >
            <a sx={{ variant: "buttons.pill" }}>{tagLabel}</a>
          </Link>
        );
      })}
    </div>
  );
}

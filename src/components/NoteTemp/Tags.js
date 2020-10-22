/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { getTagFriendlyName } from "src/utils/get-taxonomy";

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
        const tagLabel = getTagFriendlyName(item);
        return (
          <Link
            key={item}
            href="/notes/tags/[tag]"
            as={`/notes/tags/${tagLabel}`}
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

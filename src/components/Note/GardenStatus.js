/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { differenceInYears } from "date-fns";
import { getTaxonomyData } from "../../utils/note-utils";
import { statuses } from "../../../taxonomies.yml";

import { Q } from "components/icons";

export default function GardenStatus({
  status = statuses.default,
  date = null,
}) {
  const diff = differenceInYears(new Date(), new Date(date));

  const data = getTaxonomyData(diff >= 2 ? "GARDEN_OLD" : status, statuses);

  return data ? (
    <div sx={{ variant: "components.note.status" }}>
      <p>
        <span role="img" aria-label={status.iconLabel}>
          {data.icon}
        </span>
        <span>{data.desc}</span>
        <Link href={`/notes/${statuses.infoPath}#${data.slug}`} passHref>
          <a aria-label="learn more">
            <Q />
          </a>
        </Link>
      </p>
    </div>
  ) : null;
}

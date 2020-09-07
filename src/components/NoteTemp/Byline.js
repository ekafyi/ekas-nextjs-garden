/** @jsx jsx */
import { jsx } from "theme-ui";
import { parseISO, format } from "date-fns";
import { config } from "../../../site.config.yml";

export default function Byline({ publishDate, updateDate }) {
  return (
    <div sx={{ variant: "components.note.byline" }}>
      <div
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: "muted",
          mr: 2,
        }}
      />
      <strong sx={{ fontSize: 2, mr: 3 }}>Eka</strong>
      {publishDate && (
        <div sx={{ fontSize: 1, color: "mutedFg" }}>
          <time datetime={publishDate}>
            {format(parseISO(publishDate), config.dateFormatPost)}
          </time>
          {updateDate && (
            <em sx={{ ml: 1 }}>
              &middot;&nbsp;updated{" "}
              <time datetime={updateDate}>
                {format(parseISO(updateDate), config.dateFormatPost)}
              </time>
            </em>
          )}
        </div>
      )}
    </div>
  );
}

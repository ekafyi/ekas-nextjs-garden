/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const CONTENT = [
  {
    name: "STATUS_SEED",
    icon: "🌱",
    iconLabel: "seedling",
    desc:
      "This post is a seedling that may grow into something more fully-fledged",
    linkString: "seedling",
    linkHref: "starting-digital-garden#seedling",
  },
  {
    name: "STATUS_GROWING",
    icon: "🌿",
    iconLabel: "branch with leaves",
    desc: "This post is still growing and likely to be updated",
    linkString: "growing",
    linkHref: "starting-digital-garden#growing",
  },
  {
    name: "STATUS_FINAL",
    icon: "🌻",
    iconLabel: "sunflower",
    desc: "This post has fully bloomed and is unlikely to change",
    linkString: "bloomed",
    linkHref: "starting-digital-garden#bloomed",
  },
  {
    name: "STATUS_FINAL_OLD",
    icon: "🍂",
    iconLabel: "falling leaves",
    desc:
      "This post has fully bloomed and is unlikely to change. If it discusses a specific technology or library, there might have been changes since this post was published.",
    linkString: "bloomed",
    linkHref: "starting-digital-garden#bloomed",
  },
];

const StatusDesc = ({ data }) => {
  const { desc, linkString, linkHref } = data;
  if (!desc || !linkString || !linkHref) return false;
  if (!linkString || !linkHref) return desc;
  return (
    <>
      {desc.split(linkString)[0]}{" "}
      <Link href={linkHref} passHref prefetch={false}>
        <a>{linkString}</a>
      </Link>{" "}
      {desc.split(linkString)[1]}
    </>
  );
};

// = = =

export default function StatusOrWhatever() {
  const status = CONTENT[1];
  return (
    <div
      sx={{
        fontSize: 0,
        lineHeight: "paragraph",
        p: 2,
        borderRadius: 4,
        backgroundColor: "temp_postStatus",
        mb: 8,
        a: { variant: "links.inBodySecondary", borderBottomWidth: 1 },
        "span[role]": { pr: 2 },
      }}
    >
      <p>
        <span role="img" aria-label={status.iconLabel}>
          {status.icon}
        </span>
        <span>
          <StatusDesc data={status} />
        </span>
      </p>
    </div>
  );
}

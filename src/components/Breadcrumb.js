/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Link from "next/link";

const printLastSegment = (path) => {
  return path.split("/")[path.split("/").length - 1];
};

const getCrumbs = (arr) => {
  const result = [arr.join("/")];
  for (let i = -1; i > arr.length * -1; i--) {
    result.push(arr.slice(0, i).join("/"));
  }
  return result.reverse();
};

// = = =

export default function Breadcrumb({ path }) {
  if (!path.length) return false;

  const pathArr = path.split("/");
  pathArr.shift();
  const crumbs = getCrumbs(pathArr);
  const lastCrumb = crumbs.pop();

  return (
    <>
      {crumbs?.map((crumb) => (
        <Fragment key={crumb}>
          <span aria-hidden="true">/</span>
          <Link href={`/${crumb}`} passHref>
            <a>{printLastSegment(crumb)}</a>
          </Link>
        </Fragment>
      ))}
      {lastCrumb && (
        <Link href={lastCrumb} passHref>
          <a aria-current="page" className="sr-only">
            {printLastSegment(lastCrumb)}
          </a>
        </Link>
      )}
    </>
  );
}

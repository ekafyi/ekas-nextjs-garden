import React from "react";
import DefaultErrorPage from "next/error";

export default function ErrorPage({ statusCode }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={statusCode} />
    </>
  );
}

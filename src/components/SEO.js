import Head from "next/head";
import { config } from "../../site.config.yml";
import {
  getMetaTitle,
  getMetaDesc,
  getCanonical,
  getImg,
} from "../utils/get-meta";

export default function SEO({
  title = "",
  description = "",
  socialImg = null,
  path = "",
}) {
  return (
    <Head>
      {/* Title */}
      <title>{getMetaTitle(title, config.siteName)}</title>
      <meta
        property="og:title"
        content={getMetaTitle(title, config.siteName)}
      />
      <meta
        name="twitter:title"
        content={getMetaTitle(title, config.siteName)}
      />

      {/* Description */}
      <meta
        name="description"
        content={getMetaDesc(description, config.siteDescription)}
      />
      <meta
        property="og:description"
        content={getMetaDesc(description, config.siteDescription)}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={getCanonical(path, config.baseUrl)} />
      <meta property="og:url" content={getCanonical(path, config.baseUrl)} />

      {/* Favicon & social image */}
      <link rel="icon" href={config.favicon} />
      <meta
        property="og:image"
        content={getImg(socialImg, config.socialImgOg, config.baseUrl)}
      />
      <meta
        name="twitter:image"
        content={getImg(socialImg, config.socialImgTwitter, config.baseUrl)}
      />

      {/* Misc - OpenGraph */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Misc - Twitter */}
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:card" content={config.twitterCardType} />

      {/* Don't change these. */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

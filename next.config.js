// if i ever need to use env: https://github.com/vercel/next.js/discussions/12077#discussioncomment-6080

const options = {
  remarkPlugins: [require("remark-slug")],
};

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: "empty",
    };
    // parse yaml so we can use config.yml
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });
    return config;
  },
});

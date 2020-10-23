// Source: https://taylorbryant.dev/blog/move-files-to-the-root-of-a-nextjs-project
// const fs = require(`fs`).promises;
// Promise.all(
//   [`unsplash-corg-mlem.jpeg`].map((fileName) =>
//     fs
//       .copyFile(`./content/images/${fileName}`, `./public/${fileName}`)
//       .then(() => fileName)
//   )
// ).then((fileNames) =>
//   console.log(`The following files were copied: ${JSON.stringify(fileNames)}`)
// );

// Source: github.com/jprichardson/node-fs-extra#sync-vs-async-vs-asyncawait
const fs = require("fs-extra");

const source = "./content/images";
const dest = "./public/images";
fs.copy(source, dest)
  .then(() => console.log(`✨ Copy directory completed.`))
  .catch((err) => console.error(`Copy directory error`, err));

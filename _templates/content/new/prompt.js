// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "date",
    message: "Date",
    default: new Date().toISOString().slice(0, 10),
  },
  {
    type: "input",
    name: "title",
    message: "Title",
    default: "My New Post",
  },
  {
    type: "input",
    name: "message",
    message: "Content body",
    default: "Coming soon",
  },
  {
    type: "select",
    name: "noteType",
    message: "Note type",
    choices: ["n/a", "TAG_TIPS", "TAG_LEARN", "TAG_RESOURCES"], // See taxonomies.yml
  },
  {
    type: "list",
    name: "tags",
    message: "Content tags",
  },
];

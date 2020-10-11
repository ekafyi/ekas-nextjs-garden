export const getNoteDesc = (excerpt, tags = [], techs = []) => {
  let desc = "My digital garden note.";

  if (!excerpt) {
    if (techs.length) {
      // "My digital garden note on …"
      desc = `My digital garden note on ${techs.join(", ")}`;
      if (tags.length) {
        if (tags[0] === "TIPS") {
          // "Coding/development note on ..."
          desc = `Coding/development note on ${techs.join(", ")}`;
        } else if (tags[0] === "LEARNING_NOTES") {
          // "Learning note on ..."
          desc = `Learning note on ${techs.join(", ")}`;
        } else if (tags[0] === "RESOURCES") {
          // "Resources on ..."
          desc = `Resources on ${techs.join(", ")}`;
        }
      }
    } else if (tags.length) {
      // "My digital garden note tagged …"
      desc = `My digital garden note tagged ${tags.join(", ")}`;
      if (tags.length > 1) {
        if (tags[0] === "TIPS") {
          desc = `Coding/development note tagged ${tags.join(", ")}`;
        } else if (tags[0] === "LEARNING_NOTES") {
          desc = `Learning note tagged ${tags.join(", ")}`;
        } else if (tags[0] === "RESOURCES") {
          desc = `Resources tagged ${tags.join(", ")}`;
        }
      }
    }

    return desc;
  }

  return excerpt;
};

// masih dipake gardenstatus && techs
export const getTaxonomyData = (name, source) => {
  const hasData = Object.keys(source).includes(name);
  return hasData ? source[name] : false;
};

export const getTagFriendlyName = (name, source = a) => {
  const arr = source.filter((item) => item.name === name);
  if (!arr.length) return name;
  return arr[0].friendlyName || arr[0].name;
};

import { tags as tagsConfig } from "../../taxonomies.yml";

export const getNoteDesc = (excerpt, tags = [], techs = []) => {
  let desc = "My digital garden note.";

  if (!excerpt) {
    if (techs.length) {
      // "My digital garden note on …"
      desc = `My digital garden note on ${techs.join(", ")}`;
      if (tags.length) {
        if (tags[0] === tagsConfig[0].name) {
          // "Coding/development note on ..."
          desc = `Coding/development note on ${techs.join(", ")}`;
        } else if (tags[0] === tagsConfig[1].name) {
          // "Learning note on ..."
          desc = `Learning note on ${techs.join(", ")}`;
        } else if (tags[0] === tagsConfig[2].name) {
          // "Resources on ..."
          desc = `Resources on ${techs.join(", ")}`;
        }
      }
    } else if (tags.length) {
      // "My digital garden note tagged …"
      desc = `My digital garden note tagged ${tags.join(", ")}`;
      if (tags.length > 1) {
        if (tags[0] === tagsConfig[0].name) {
          desc = `Coding/development note tagged ${tags.join(", ")}`;
        } else if (tags[0] === tagsConfig[1].name) {
          desc = `Learning note tagged ${tags.join(", ")}`;
        } else if (tags[0] === tagsConfig[2].name) {
          desc = `Resources tagged ${tags.join(", ")}`;
        }
      }
    }

    return desc;
  }

  return excerpt;
};

// masih dipake gardenstatus
export const getTaxonomyData = (name, source) => {
  const hasData = Object.keys(source).includes(name);
  return hasData ? source[name] : false;
};

export const getTaxonomyData_NEW = (name, source) => {
  const arr = source.filter((item) => item.name === name);
  if (!arr.length) return false;
  return arr[0];
};

export const getTagFriendlyName = (name, source) => {
  const arr = source.filter((item) => item.name === name);
  if (!arr.length) return name;
  return arr[0].friendlyName || arr[0].name;
};

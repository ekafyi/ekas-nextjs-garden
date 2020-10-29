import { tags as tagsConfig } from "../../taxonomies.yml";

/**
 * @param {string} tagName
 */
export const getTagPageDesc = (tagName) => {
  return `Digital garden entries tagged ${tagName}`;
};

/**
 * Helper function for getNotePageDesc.
 * @param {array} tags
 */
const getRestOfTags = (tags) => {
  const arr = tags.filter((item) => !item.includes("TAG_"));
  if (arr.length) return ` tagged ${arr.join(", ")}`;
  return "";
};

/**
 * @param {string} [excerpt]
 * @param {array} [tags]
 */
export const getNotePageDesc = (excerpt = null, tags = []) => {
  if (!excerpt) {
    if (!tags.length) return null;

    // Check if tags contain any of the "special tags".
    if (tags.join(", ").includes("TAG_")) {
      let desc;

      if (tags.includes(tagsConfig[0].name)) {
        desc = `Coding tips and snippets`;
      } else if (tags.includes(tagsConfig[1].name)) {
        desc = `Learning note`;
      } else if (tags.includes(tagsConfig[2].name)) {
        desc = `Resources and bookmarks`;
      }

      if (tags.length > 1) {
        desc += getRestOfTags(tags);
      }

      return desc;
    }
    //
    return `Note tagged ${tags.join(", ")}`;
  }
  return excerpt;
};

/**
 * @param {array} [tags]
 */
export const getOgImgDesc = () => {
  // return //
};

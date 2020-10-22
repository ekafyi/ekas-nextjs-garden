import { tags as tagsConfig } from "../../taxonomies.yml";

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

export const getTagFriendlyName = (name, source = tagsConfig) => {
  const arr = source.filter((item) => item.name === name);
  if (!arr.length) return name;
  return arr[0].friendlyName || arr[0].name;
};

export const getTagRealName = (name, source) => {
  const arr = source.filter((item) => item.friendlyName === name);
  if (!arr.length) return name;
  return arr[0].name;
};

export const getTagData = (name, source) => {
  const realName = getTagRealName(name, source);
  const arr = source.filter((item) => item.name === realName);
  if (!arr.length) return false;
  return arr[0];
};

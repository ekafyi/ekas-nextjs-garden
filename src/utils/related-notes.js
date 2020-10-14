// temporary quick implementation of "Related Notes"
// entirely stored in localStorage browser cache.

export const createCacheNotes = (allMdx) => {
  const recentMdx = allMdx.slice(0, 30); // Save 30 most recent notes to cache.
  return recentMdx.map((item) => {
    return {
      slug: item.slug,
      title: item.frontMatter.title,
      tags: item.frontMatter.tags || [],
    };
  });
};

export const getNotesByTags = (allNotes = [], tags = [], curPath) => {
  if (allNotes.length < 2 || tags.length < 2) return false;

  // super hacky: get same-tag posts based on _second tag_.
  // eg. if the tags are ['TAG_LEARN', 'gatsby', 'graphql'], return other posts tagged 'gatsby'.
  const tag = tags[1];
  const tagNotes = allNotes.filter((item) => {
    if (item.tags) return item.tags.includes(tag) && item.slug !== curPath;
    return false;
  });
  if (tagNotes.length) return { title: tags[1], data: tagNotes.slice(0, 3) };
  return false;
};

export const getTwitterUrl = (text, url, username = "ekafyi") => {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&via=${username}`; // prettier-ignore
};

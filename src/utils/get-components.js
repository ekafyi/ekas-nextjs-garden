import * as components from "components";

/**
 * Components to pass to markdown-to-jsx. CURRENTLY NOT USED.
 * 
 * Usage:

import Markdown from "markdown-to-jsx";

<Markdown options={{ overrides: mdToJsxComponents }}>
  {mdxBody}
</Markdown>
 */
export const mdToJsxComponents = {
  Mug: {
    component: components.Mug,
  },
};

// import Example from "../Example";
import { Mug } from "react-kawaii";

// = = =

import dynamic from "next/dynamic";

const CodeBlock = dynamic(() => import("./CodeBlock"));
const Example = dynamic(() => import("../Example"));

const components = {
  pre: ({ children }) => <>{children}</>,
  code: CodeBlock,
  Mug,
  Example,
};

export default components;

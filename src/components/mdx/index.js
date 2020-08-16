// Note: dynamic vs regular imports have nearly similar results. Just experiment with both if needed.
// import dynamic from "next/dynamic";
// const Example = dynamic(() => import("../Example"));

import { Mug } from "react-kawaii";
import Example from "../Example";

const components = {
  Mug,
  Example,
};

export default components;

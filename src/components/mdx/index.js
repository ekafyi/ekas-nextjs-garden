import dynamic from "next/dynamic";

import { Mug } from "react-kawaii";
const Example = dynamic(() => import("../Example"));

const components = {
  Mug,
  Example,
};

export default components;

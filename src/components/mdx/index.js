import getHeading from "./AnchorHeading";

// Note: dynamic vs regular imports have nearly similar results. Just experiment with both if needed.
// import dynamic from "next/dynamic";
// const Example = dynamic(() => import("../Example"));

import dynamic from "next/dynamic";
const Image = dynamic(() => import("../Image"));

import { Mug } from "react-kawaii";
import Example from "../Example";
// import Image from "./Image";

const components = {
  Mug,
  Example,
  h2: getHeading("h2"),
  h3: getHeading("h3"),
  h4: getHeading("h4"),
  h5: getHeading("h5"),
  img: Image,
};

export default components;

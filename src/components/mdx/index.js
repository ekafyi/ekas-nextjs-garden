import { Grid } from "theme-ui";
import getHeading from "./AnchorHeading";

// Note: dynamic vs regular imports have nearly similar results. Just experiment with both if needed.
// import dynamic from "next/dynamic";
// const Example = dynamic(() => import("../Example"));

import dynamic from "next/dynamic";
const CloudImage = dynamic(() => import("./CloudImage"));
const Image = dynamic(() => import("./Image"));
const ImageWithCaption = dynamic(() => import("./ImageWithCaption"));

import { Mug } from "react-kawaii";
// import Example from "../Example";
// import Image from "./Image";
// import ImageWithCaption from "./ImageWithCaption";

const components = {
  Mug,
  ImageWithCaption,
  CloudImage,

  // prettier-ignore
  Grid: ({ columns = [null, null, 2], gap = 4, mb = 4, children, ...props }) => {
    return (
      <Grid columns={columns} gap={gap} mb={mb} {...props}>
        {children || null}
      </Grid>
    );
  },
  //

  h2: getHeading("h2"),
  h3: getHeading("h3"),
  h4: getHeading("h4"),
  h5: getHeading("h5"),
  img: Image,
};

export default components;

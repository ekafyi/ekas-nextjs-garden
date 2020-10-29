export const getLineClamp = (num = 3) => {
  return {
    display: ["block", "-webkit-box"],
    overflow: [null, "hidden"],
    WebkitLineClamp: num,
    WebkitBoxOrient: "vertical",
  };
};

// Source: https://components.ai/repeating-radial-gradients/
/**
repeating-radial-gradient(
	circle at 56% 91%, // offsetX offsetY (alt: 17% 20%, 0% 50%)
	hsl(210.86,100%,27.45%), // color1
	hsl(210.86,100%,27.45%) 8px, // color1 size
	hsl(218.97,87.97%,26.08%) 8px, // color2 size
	hsl(218.97,87.97%,26.08%) 32px // color2 (ratio * size)
)
 */
export const getRadialBg = ({
  offsetX = 0,
  offsetY = "50%",
  color1 = "hsl(216,92%,26%)", // fg
  color2 = "hsl(220,88%,22%)", // bg
  size = 8,
  ratio = 4,
}) => {
  return `repeating-radial-gradient(
	circle at ${offsetX} ${offsetY},
	${color1},
	${color1} ${size}px,
	${color2} ${size}px,
	${color2} ${size * ratio}px
)`;
};

// Source: svgbackgrounds.com + components.ai/color-scale
// example:
// color1 = 192139
// color2 = 19274c
// color3 = 172d5f
// color4 = 143273
// color5 = 113888
// color6 = 103d9c
export const getCirclesBg = ({
  // outermost (color1) to innermost (color6)
  color1 = "1b2848",
  color2 = "1a274c",
  color3 = "192e60",
  color4 = "163574",
  color5 = "0f3c89",
  color6 = "02439e",
}) => {
  return `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg fill-opacity='1'%3E%3Ccircle fill='%23${color1}' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23${color2}' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23${color3}' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23${color4}' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23${color5}' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23${color6}' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\")`;
};

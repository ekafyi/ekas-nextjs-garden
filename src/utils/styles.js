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

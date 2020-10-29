import React from "react";
export default function CircleText({
  size = 300,
  text = "insert text here",
  ...props
}) {
  const getCirclePath = (half, twoFifth, fourFifth) => {
    // prettier-ignore
    return `M ${half}, ${half} m ${twoFifth * -1}, 0 a ${twoFifth},${twoFifth} 0 0,1 ${fourFifth},0 a ${twoFifth},${twoFifth} 0 0,1 ${fourFifth * -1},0`;
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <path
          id="circlePath"
          d={getCirclePath(size / 2, (size / 5) * 2, (size / 5) * 4)}
        />
      </defs>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill="transparent" />
      <g>
        <use xlinkHref="#circlePath" fill="none"></use>
        <text fill="currentColor">
          <textPath xlinkHref="#circlePath">{text}</textPath>
        </text>
      </g>
    </svg>
  );
}

/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

const ColorModeSelect = ({ darkElement, lightElement, ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  const darkSx = { variant: "buttons.colorModeDark" };
  return (
    <button
      sx={colorMode === "default" ? undefined : darkSx}
      aria-label={`${colorMode === "default" ? `dark` : `light`} mode`}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      {...props}
    >
      {colorMode === "default" ? (
        <>{darkElement || "dark"}</>
      ) : (
        <>{lightElement || "light"}</>
      )}
    </button>
  );
};

export default ColorModeSelect;

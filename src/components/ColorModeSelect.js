/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

const ColorModeSelect = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      sx={{ variant: "buttons.colorMode" }}
      aria-label={`${colorMode === "default" ? `dark` : `light`} mode`}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      {...props}
    >
      {colorMode === "default" ? (
        <>&#9790;&nbsp; dark</>
      ) : (
        <>&#9788;&#xFE0E;&nbsp; light</>
      )}
    </button>
  );
};

export default ColorModeSelect;

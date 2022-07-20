const dark = {
  50: "#e5e6e8",
  100: "#bec1c5",
  200: "#92979f",
  300: "#666d78",
  400: "#464e5b",
  500: "#252f3e",
  600: "#212a38",
  700: "#1b2330",
  800: "#161d28",
  900: "#0d121b",
  A100: "#5d8eff",
  A200: "#2a6aff",
  A400: "#004af6",
  A700: "#0042dd",
};

const lightText = {
  primary: "rgb(17,24,39)",
  secondary: "rgb(107,114,128)",
  disabled: "rgb(149,156,169)",
};
const darkText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(229,231,235)",
  disabled: "rgb(156,163,175)",
};

export const themeConfig = {
  default: {
    palette: {
      type: "light",
      text: lightText,
      primary: dark,
      secondary: {
        light: "#e4fafd",
        main: "#22d3ee",
        dark: "#0cb7e2",
      },
      background: {
        paper: "#FFFFFF",
        default: "#f6f7f9",
      },
      error: "red",
    },
  },
  darkDefault: {
    palette: {
      type: "dark",
      text: darkText,
      primary: dark,
      secondary: {
        light: "#e4fafd",
        main: "#22d3ee",
        dark: "#0cb7e2",
      },
      background: {
        paper: "#1E2125",
        default: "#121212",
      },
      error: "red",
    },
  },
};

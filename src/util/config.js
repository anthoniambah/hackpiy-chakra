import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "0px",
  sm: "480px",
  md: "768px",
  lg: "1125px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, breakpoints });

export default theme;

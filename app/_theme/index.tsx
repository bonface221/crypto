import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "brand.white",
        fontSize: "16px",
        fontweight: "400",
        fontStyle: "normal",
        lineHeight: "24px",
      },
    },
  },

  colors: {
    brand: {
      black: "#1B1B1B",
      purple: "#B982FF",
      white: "#ffff",
      gradient: "linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)",
      green: "#0DBB7C",
      red: "#FF8282",
      gray: "#898CA9",
      cardBg: "#1A1B23",
    },
  },
});

import { Dimensions, StatusBar } from "react-native";

export const bottombarHeight =
  Dimensions.get("screen").height == Dimensions.get("window").height
    ? Dimensions.get("screen").height -
      Dimensions.get("window").height +
      StatusBar.currentHeight
    : StatusBar.currentHeight;

export const Colors = {
  //UI Neutrals
  ui_grey_05: "#F2F2F2",
  ui_grey_10: "#E4E4E3",
  ui_grey_20: "#CBCACA",
  ui_grey_50: "#888888",
  ui_grey_70: "#4D4C4C",
  ui_grey_80: "#333333",
  ui_grey_90: "#161616",

  // background
  ui_light_selected_bg: "#E7F5FF",
};
export const Fonts = {
  regular: "Montserrat-Regular", // Font File Name Must Match To Use Custom Font
  light: "Montserrat-Light",
  medium: "Montserrat-Medium",
  bold: "Montserrat-Regular",
};

export const Images = {};

export const Icons = {};

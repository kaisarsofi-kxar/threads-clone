import { Slot } from "expo-router";

import { DarkTheme, ThemeProvider } from "@react-navigation/native";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    card: "#101010",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <Slot />
    </ThemeProvider>
  );
}

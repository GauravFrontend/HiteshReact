import React, { createContext } from "react";

export const userTheme = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const UserThemeProvider = userTheme.Provider;

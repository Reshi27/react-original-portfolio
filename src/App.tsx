// import './App.css'
import { Fragment } from "react";
import { AppRouter } from "./components/router/AppRouter";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              // override dark colors to change them for all components
              dark: [
                "#F8F9FA",
                "#F1F3F5",
                "#E9ECEF",
                "#DEE2E6",
                "#CED4DA",
                "#ADB5BD",
                "#868E96",
                "#1A1B1E",
                "#141517",
                "#101113",
              ],
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <AppRouter></AppRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </Fragment>
  );
}

export default App;

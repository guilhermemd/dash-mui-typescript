import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";
import { Box } from "@mui/system";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

type Props = { children?: React.ReactNode };

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const toggleTheme = useCallback(() => {
    setThemeName((prevState) => (prevState === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") {
      return LightTheme;
    }

    return DarkTheme;
  }, [themeName]);

  const contextValue = {
    themeName,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Box
          width="100wv"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

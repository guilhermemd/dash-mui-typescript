import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";
import CssBaseline from "@mui/material/CssBaseline";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

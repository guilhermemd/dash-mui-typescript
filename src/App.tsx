import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
// reset css default
import CssBaseline from '@mui/material/CssBaseline';
import { SideBar } from './shared/components/index';

export const App = () => {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <BrowserRouter>
                <SideBar>
                    <AppRoutes />
                </SideBar>
            </BrowserRouter>
        </AppThemeProvider>
    );
};

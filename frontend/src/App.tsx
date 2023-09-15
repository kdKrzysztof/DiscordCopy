import { ThemeProvider } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CssBaseline, IconButton, Tooltip } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from 'pages';

import { ThemeModeContext } from 'context';

import { useThemeColor } from 'hooks';

import './App.css';

function App() {
  const { theme, themeColor } = useThemeColor();
  return (
    <ThemeModeContext.Provider value={themeColor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Tooltip title="Change theme">
          <IconButton
            onClick={themeColor.toggleColorMode}
            color="inherit"
            sx={{ position: 'absolute', top: '1%', right: '1%' }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<></>}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;

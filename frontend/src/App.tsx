import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from 'pages';

import { ChangeThemeButton } from 'components';

import { ThemeModeContext } from 'context';

import { useThemeColor } from 'hooks';

import './App.css';
import Register from './pages/register/Register';

function App() {
  const { theme, themeColor } = useThemeColor();
  return (
    <ThemeModeContext.Provider value={themeColor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ChangeThemeButton theme={theme} themeColor={themeColor} />
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<></>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<></>}>
                <Register />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;

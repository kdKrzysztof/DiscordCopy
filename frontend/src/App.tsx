import { CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from 'pages';

import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
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
    </>
  );
}

export default App;

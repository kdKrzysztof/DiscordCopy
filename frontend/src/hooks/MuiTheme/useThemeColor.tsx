import type { PaletteMode } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

import usePageTheme from './usePageTheme';

const useThemeColor = () => {
  const [themeColorState, setThemeColorState] = useState<PaletteMode>(
    (localStorage.getItem('themeColor') as PaletteMode) ?? 'light'
  );

  useEffect(() => {
    localStorage.setItem('themeColor', themeColorState);
  }, [themeColorState]);

  const themeColor = useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeColorState((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = usePageTheme(themeColorState);

  return { themeColor, theme };
};

export default useThemeColor;

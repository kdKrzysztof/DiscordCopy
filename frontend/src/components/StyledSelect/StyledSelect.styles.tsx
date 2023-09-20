import { Select, styled } from '@mui/material';

import type { CustomPaletteOptions } from 'interfaces';

export const SelectBody = styled(Select)(({ theme }) => ({
  ['.MuiSelect-outlined']: {
    backgroundColor: (theme.palette as CustomPaletteOptions)?.LoginInputBG,
    boxShadow: 'none'
  },
  ['.MuiOutlinedInput-notchedOutline']: { border: 0 }
}));

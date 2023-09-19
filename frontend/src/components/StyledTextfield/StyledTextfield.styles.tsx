import { Box, InputBase, styled } from '@mui/material';

import type { CustomPaletteOptions } from 'interfaces';

export const LoginTextField = styled(InputBase)(({ theme }) => ({
  padding: 4,
  borderRadius: 4,
  paddingLeft: 10,
  paddingRight: 10,
  background: (theme.palette as CustomPaletteOptions).LoginInputBG
}));

export const LoginTextFieldBody = styled(Box)({
  width: '100%',
  textAlign: 'left'
});

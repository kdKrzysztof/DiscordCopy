import { Box, InputBase, styled } from '@mui/material';

import { CustomPaletteOptions } from 'interfaces';

export const CustomTextField = styled(InputBase)({
  marginLeft: 3,
  marginRight: 3
});

export const CustomTextFieldBody = styled(Box)(({ theme }) => ({
  background: (theme.palette as CustomPaletteOptions).LoginInputBG,
  padding: 4,
  borderRadius: 4
}));

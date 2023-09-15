import { Box, styled } from '@mui/material';

export const LoginBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    margin: theme.spacing(1)
  }
}));

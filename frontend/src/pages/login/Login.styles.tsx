import { Box, Paper, styled } from '@mui/material';

export const LoginBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    marginBottom: theme.spacing(2)
  }
}));

export const LoginTitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  ['& > :not(style)']: {
    margin: '2px'
  }
});

export const LoginContainer = styled(Paper)({
  width: 480,
  padding: 20
});

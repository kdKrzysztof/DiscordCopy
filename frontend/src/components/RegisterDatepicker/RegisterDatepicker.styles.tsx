import { Box, styled } from '@mui/material';

export const DatepickerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  width: '100%',
  ['& > :not(style)']: {
    width: '100%'
  },
  ['& > :first-of-type']: {
    marginRight: theme.spacing(1)
  },
  ['& > :last-of-type']: {
    marginLeft: theme.spacing(1)
  },
  ['& > :not(:first-of-type):not(:last-of-type)']: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export const RegisterDatepickerContainer = styled(Box)({
  width: '100%',
  textAlign: 'left'
});

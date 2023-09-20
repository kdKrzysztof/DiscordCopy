import { InputLabel, Typography } from '@mui/material';

import { StyledSelect } from 'components';

import { DatepickerContainer, RegisterDatepickerContainer } from './RegisterDatepicker.styles';

interface IRegisterDatepicker {
  placeholder?: string | undefined;
  error?: string | undefined;
}

const RegisterDatepicker = ({ error, placeholder }: IRegisterDatepicker) => {
  return (
    <RegisterDatepickerContainer>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder?.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <DatepickerContainer>
        <StyledSelect placeholder="test" />
        <StyledSelect />
        <StyledSelect />
      </DatepickerContainer>
    </RegisterDatepickerContainer>
  );
};

export default RegisterDatepicker;

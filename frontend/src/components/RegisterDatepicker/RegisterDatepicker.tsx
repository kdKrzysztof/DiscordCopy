import { InputLabel, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { StyledSelect } from 'components';

import GetNumberArray from 'src/utils/GetNumberArray';

import { DatepickerContainer, RegisterDatepickerContainer } from './RegisterDatepicker.styles';

interface IRegisterDatepicker {
  placeholder?: string | undefined;
  error?: string | undefined;
}

const RegisterDatepicker = ({ error, placeholder }: IRegisterDatepicker) => {
  const daysArr = GetNumberArray(31);
  const monthsArr = GetNumberArray(12);
  const yearsArr = GetNumberArray(dayjs().year() - 3, 1900).reverse();

  return (
    <RegisterDatepickerContainer>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder?.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <DatepickerContainer>
        <StyledSelect placeholder="day" stack={daysArr} />
        <StyledSelect placeholder="month" stack={monthsArr} />
        <StyledSelect placeholder="year" stack={yearsArr} />
      </DatepickerContainer>
    </RegisterDatepickerContainer>
  );
};

export default RegisterDatepicker;

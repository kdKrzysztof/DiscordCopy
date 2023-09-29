import { InputLabel, Typography } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import { StyledSelect } from 'components';

import { getNumberArray } from 'utils';

import type { RegisterForm } from 'interfaces/Forms/FormsTypes';

import { DatepickerContainer, RegisterDatepickerContainer } from './RegisterDatepicker.styles';

interface IRegisterDatepicker {
  placeholder?: string | undefined;
  error?: string | undefined;
  register: UseFormRegister<RegisterForm>;
}

const daysArr = getNumberArray(31);
const monthsArr = getNumberArray(12);
const yearsArr = getNumberArray(new Date().getFullYear() - 3, 1900).reverse();

const RegisterDatepicker = ({ error, placeholder, register }: IRegisterDatepicker) => {
  return (
    <RegisterDatepickerContainer>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder?.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <DatepickerContainer>
        <StyledSelect
          placeholder="day"
          stack={daysArr}
          register={register}
          formFieldName="date.day"
        />
        <StyledSelect
          placeholder="month"
          stack={monthsArr}
          register={register}
          formFieldName="date.month"
        />
        <StyledSelect
          placeholder="year"
          stack={yearsArr}
          register={register}
          formFieldName="date.year"
        />
      </DatepickerContainer>
    </RegisterDatepickerContainer>
  );
};

export default RegisterDatepicker;

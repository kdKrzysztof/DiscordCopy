import { InputLabel, Typography } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { StyledTextFieldContainer, TextFieldBody } from './StyledTextfield.styles';

interface ILoginProps<TForm extends FieldValues> {
  inputTitle?: string;
  register: UseFormRegister<TForm>;
  formPropName: Path<TForm>;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  fullWidth?: boolean;
  error?: string | undefined;
}

const StyledTextfield = <TForm extends FieldValues>({
  inputTitle,
  register,
  formPropName,
  required,
  fullWidth,
  type,
  error
}: ILoginProps<TForm>) => {
  return (
    <StyledTextFieldContainer>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {inputTitle?.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <TextFieldBody
        type={type}
        required={required}
        {...register(formPropName)}
        fullWidth={fullWidth}
      />
    </StyledTextFieldContainer>
  );
};

export default StyledTextfield;

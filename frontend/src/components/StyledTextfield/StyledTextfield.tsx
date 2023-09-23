import { InputLabel, Typography } from '@mui/material';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { StyledTextFieldContainer, TextFieldBody } from './StyledTextfield.styles';

interface ILoginProps<TForm extends FieldValues> {
  inputTitle?: string;
  register: UseFormRegister<TForm>;
  formPropName: Path<TForm>;
  required?: boolean;
  error?: string | undefined;
}

const StyledTextfield = <TForm extends FieldValues>({
  inputTitle,
  register,
  formPropName,
  required,
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
      <TextFieldBody fullWidth required={required} {...register(formPropName)} />
    </StyledTextFieldContainer>
  );
};

export default StyledTextfield;

import { InputLabel, Typography } from '@mui/material';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { StyledTextFieldContainer, TextFieldBody } from './StyledTextfield.styles';

interface ILoginProps<TForm extends FieldValues> {
  placeholder?: string;
  register: UseFormRegister<TForm>;
  name: Path<TForm>;
  required?: boolean;
  error?: string | undefined;
}

const StyledTextfield = <TForm extends FieldValues>({
  placeholder,
  register,
  name,
  required,
  error
}: ILoginProps<TForm>) => {
  return (
    <StyledTextFieldContainer>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder?.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <TextFieldBody fullWidth required={required} {...register(name)} />
    </StyledTextFieldContainer>
  );
};

export default StyledTextfield;

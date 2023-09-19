import { InputLabel, Typography } from '@mui/material';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { LoginTextField, LoginTextFieldBody } from './StyledTextfield.styles';

interface ILoginProps<TForm extends FieldValues> {
  placeholder: string;
  register: UseFormRegister<TForm>;
  name: Path<TForm>;
  required: boolean;
  error: string | undefined;
}

const StyledTextfield = <TForm extends FieldValues>({
  placeholder,
  register,
  name,
  required,
  error
}: ILoginProps<TForm>) => {
  return (
    <LoginTextFieldBody>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <LoginTextField fullWidth required={required} {...register(name)} />
    </LoginTextFieldBody>
  );
};

export default StyledTextfield;

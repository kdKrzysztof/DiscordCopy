import { InputLabel, Typography } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import type { LoginForm } from 'pages/login/Login.types';

import { LoginTextField, LoginTextFieldBody } from './LoginInput.styles';

enum LoginSubmitFields {
  Email = 'email',
  Password = 'password'
}

interface ILoginProps {
  placeholder: string;
  register: UseFormRegister<LoginForm>;
  name: string;
  required: boolean;
  error: string | undefined;
}

const LoginInput = ({ placeholder, register, name, required, error }: ILoginProps) => {
  return (
    <LoginTextFieldBody>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold" color={error ? 'error' : 'default'}>
          {placeholder.toUpperCase()}
          {error ? ' - ' + error : null}
        </Typography>
      </InputLabel>
      <LoginTextField fullWidth required={required} {...register(name as LoginSubmitFields)} />
    </LoginTextFieldBody>
  );
};

export default LoginInput;

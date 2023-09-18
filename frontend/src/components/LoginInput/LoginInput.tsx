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
}

const LoginInput = ({ placeholder, register, name, required }: ILoginProps) => {
  return (
    <LoginTextFieldBody>
      <InputLabel>
        <Typography variant="caption" fontWeight="bold">
          {placeholder.toUpperCase()}
        </Typography>
      </InputLabel>
      <LoginTextField fullWidth required={required} {...register(name as LoginSubmitFields)} />
    </LoginTextFieldBody>
  );
};

export default LoginInput;

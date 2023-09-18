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
    <>
      <LoginTextFieldBody>
        <LoginTextField
          placeholder={placeholder}
          fullWidth
          required={required}
          {...register(name as LoginSubmitFields)}
        />
      </LoginTextFieldBody>
    </>
  );
};

export default LoginInput;

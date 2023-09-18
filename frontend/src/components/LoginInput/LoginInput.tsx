import type { UseFormRegister } from 'react-hook-form';

import type { LoginSubmit } from 'pages/login/Login.types';

import { LoginTextField, LoginTextFieldBody } from './LoginInput.styles';

enum LoginSubmitFields {
  Username = 'username',
  Password = 'password'
}

interface ILoginProps {
  placeholder: string;
  register: UseFormRegister<LoginSubmit>;
  name: string;
  required: boolean;
}

const LoginInput = ({ placeholder, register, name, required }: ILoginProps) => {
  return (
    <LoginTextFieldBody>
      <LoginTextField
        placeholder={placeholder}
        fullWidth
        {...register(name as LoginSubmitFields, { required: required })}
      />
    </LoginTextFieldBody>
  );
};

export default LoginInput;

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { registerValidator } from 'src/utils/validators';

import { RegisterForm } from './Register.types';

const useRegisterUtils = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerValidator),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit, t };
};

export default useRegisterUtils;

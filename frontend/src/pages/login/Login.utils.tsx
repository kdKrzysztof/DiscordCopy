import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { loginValidator } from 'src/utils/validators';

import { LoginForm } from './Login.types';

const useLoginUtils = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, t, errors };
};

export default useLoginUtils;

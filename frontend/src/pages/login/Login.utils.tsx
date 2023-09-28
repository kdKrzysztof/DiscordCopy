import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { loginValidator } from 'utils/validators';

import { LoginForm } from 'interfaces/Forms/FormsTypes';

import useLogin from './hooks/useLogin';

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

  const { data, login, isError, error, isSuccess } = useLogin();

  const onSubmit = (formData: LoginForm) => {
    login(formData);
  };

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [isSuccess]);

  return { register, handleSubmit, onSubmit, t, errors };
};

export default useLoginUtils;

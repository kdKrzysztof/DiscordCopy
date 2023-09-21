import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { registerValidator } from 'src/utils/validators';

import { getDate } from 'utils';

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
      password: '',
      date: {
        day: undefined,
        month: undefined,
        year: undefined
      }
    }
  });

  const onSubmit = (data: RegisterForm) => {
    let parsedDate = getDate(data.date.day, data.date.month, data.date.year);
  };

  return { register, handleSubmit, errors, onSubmit, t };
};

export default useRegisterUtils;

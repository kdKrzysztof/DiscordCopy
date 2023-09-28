import { useMutation } from '@tanstack/react-query';

import { LoginForm } from 'src/interfaces/Forms/FormsTypes';

import { Api } from 'utils/api';

const useLogin = () => {
  const { data, mutate: login, isError, error, isSuccess } = useMutation((data: LoginForm) => Api.login(data));
  return { data, login, isError, error, isSuccess };
};

export default useLogin;

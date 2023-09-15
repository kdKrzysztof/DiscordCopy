import { Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LoginInput } from 'components';

import { LoginBody } from './Login.styles';
import { LoginSubmit } from './Login.types';

const Login = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm<LoginSubmit>();
  const onSubmit = (data: LoginSubmit) => {
    console.log(data);
  };
  return (
    <Paper elevation={4}>
      <LoginBody>
        <Typography variant="h5">{t('LoginTitle')}</Typography>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <LoginInput />
        </form>
      </LoginBody>
    </Paper>
  );
};

export default Login;

import { Button, Link, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LoginInput } from 'components';

import { LoginBody, LoginContainer, LoginTitleContainer } from './Login.styles';
import { LoginSubmit } from './Login.types';

const Login = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm<LoginSubmit>();
  const onSubmit = (data: LoginSubmit) => {
    console.log(data);
  };
  return (
    <LoginContainer elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <LoginBody>
          <LoginTitleContainer>
            <Typography variant="h5" fontWeight="bold">
              {t('LoginTitle')}
            </Typography>
            <Typography variant="subtitle2">{t('LoginSubtitle')}</Typography>
          </LoginTitleContainer>
          <LoginInput placeholder="Username" register={register} name="username" required={true} />
          <LoginInput placeholder="Password" register={register} name="password" required={false} />
          <Button variant="contained" fullWidth type="submit">
            {t('LoginButton')}
          </Button>
          <Typography variant="subtitle2">
            {t('LoginNeedAccount')} <Link>{t('LoginClickHere')}</Link>
          </Typography>
        </LoginBody>
      </form>
    </LoginContainer>
  );
};

export default Login;

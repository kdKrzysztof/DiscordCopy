import { Button, Link, Typography } from '@mui/material';

import { LoginInput } from 'components';

import { LoginBody, LoginContainer, LoginTitleContainer } from './Login.styles';
import useLoginUtils from './Login.utils';

const Login = () => {
  const { t, handleSubmit, onSubmit, register, errors } = useLoginUtils();
  
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
          <LoginInput placeholder="Email" register={register} name="email" required={true} />
          <LoginInput placeholder="Password" register={register} name="password" required={true} />
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

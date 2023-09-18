import { Button, Link, Typography } from '@mui/material';

import { LoginInput } from 'components';

import {
  CreateAccountText,
  LoginBody,
  LoginContainer,
  LoginSubtitle,
  LoginTitleContainer
} from './Login.styles';
import useLoginUtils from './Login.utils';

const Login = () => {
  const { t, handleSubmit, onSubmit, register, emailErr, passwordErr } = useLoginUtils();

  return (
    <LoginContainer elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <LoginBody>
          <LoginTitleContainer>
            <Typography variant="h4" fontWeight="bold">
              {t('LoginTitle')}
            </Typography>
            <LoginSubtitle variant="subtitle2">{t('LoginSubtitle')}</LoginSubtitle>
          </LoginTitleContainer>
          <LoginInput
            placeholder="Email"
            register={register}
            name="email"
            required={true}
            error={emailErr}
          />
          <LoginInput
            placeholder="Password"
            register={register}
            name="password"
            required={true}
            error={passwordErr}
          />
          <Button variant="contained" fullWidth type="submit">
            {t('LoginButton')}
          </Button>
          <CreateAccountText variant="subtitle2">
            {t('LoginNeedAccount')} <Link>{t('LoginClickHere')}</Link>
          </CreateAccountText>
        </LoginBody>
      </form>
    </LoginContainer>
  );
};

export default Login;

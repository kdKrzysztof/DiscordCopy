import { Button, Link, Typography } from '@mui/material';

import { StyledTextfield } from 'components';

import {
  CreateAccountText,
  LoginBody,
  LoginContainer,
  LoginSubtitle,
  LoginTitleContainer
} from './Login.styles';
import useLoginUtils from './Login.utils';

const Login = () => {
  const { t, handleSubmit, onSubmit, register, errors } = useLoginUtils();

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
          <StyledTextfield
            placeholder="Email"
            register={register}
            name="email"
            required={true}
            error={errors?.email?.message}
          />
          <StyledTextfield
            placeholder="Password"
            register={register}
            name="password"
            required={true}
            error={errors?.password?.message}
          />
          <Button variant="contained" fullWidth type="submit">
            {t('LoginButton')}
          </Button>
          <CreateAccountText variant="subtitle2">
            {t('LoginNeedAccount')} <Link href="/register">{t('LoginClickHere')}</Link>
          </CreateAccountText>
        </LoginBody>
      </form>
    </LoginContainer>
  );
};

export default Login;

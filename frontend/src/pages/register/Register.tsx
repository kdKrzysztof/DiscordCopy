import { Button, Typography } from '@mui/material';

import { StyledTextfield } from 'src/components';

import { RegisterBody, RegisterContainer, RegisterTitleContainer } from './Register.styles';
import useRegisterUtils from './Register.utils';

const Register = () => {
  const { errors, handleSubmit, onSubmit, register, t } = useRegisterUtils();
  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <RegisterBody>
          <RegisterTitleContainer>
            <Typography variant="h5" fontWeight="bold">
              {t('RegisterTitle')}
            </Typography>
          </RegisterTitleContainer>
          <StyledTextfield
            placeholder="Email"
            register={register}
            name="email"
            error={errors?.email?.message}
            required={true}
          />
          <StyledTextfield
            placeholder="Username"
            register={register}
            name="username"
            error={errors?.username?.message}
            required={true}
          />
          <StyledTextfield
            placeholder="Password"
            register={register}
            name="password"
            error={errors?.password?.message}
            required={true}
          />
          <Button variant="contained" fullWidth type="submit">
            {t('RegisterButton')}
          </Button>
        </RegisterBody>
      </form>
    </RegisterContainer>
  );
};

export default Register;

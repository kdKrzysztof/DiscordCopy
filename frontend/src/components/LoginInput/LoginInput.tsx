import { Box } from '@mui/material';

import { LoginTextField, LoginTextFieldBody } from './LoginInput.styles';

const LoginInput = () => {
  return (
    <Box>
      <LoginTextFieldBody>
        <LoginTextField placeholder="Username" />
      </LoginTextFieldBody>
    </Box>
  );
};

export default LoginInput;

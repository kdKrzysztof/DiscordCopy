import { Box } from '@mui/material';

import { CustomTextField, CustomTextFieldBody } from './LoginInput.styles';

const LoginInput = () => {
  return (
    <Box>
      <CustomTextFieldBody>
        <CustomTextField placeholder="Username" />
      </CustomTextFieldBody>
    </Box>
  );
};

export default LoginInput;

import { useEffect, useState } from 'react';

import type { SetErrorsProps } from '../Login.types';

const useSetErrors = ({ errors }: SetErrorsProps) => {
  const [emailErr, setEmailErr] = useState<string>();
  const [passwordErr, setPasswordErr] = useState<string>();

  useEffect(() => {
    if (errors?.email) {
      setEmailErr(errors.email.message);
    }
    if (errors?.password) {
      setPasswordErr(errors.password.message);
    }
    if (Object.keys(errors).length === 0) {
      setEmailErr('');
      setPasswordErr('');
    }
  }, [errors]);

  return { emailErr, passwordErr };
};

export default useSetErrors;

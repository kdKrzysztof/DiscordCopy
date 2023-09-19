import { useEffect, useState } from 'react';

import type { SetErrorsProps } from '../Login.types';

interface IErrorsMessages {
  email: string | undefined;
  password: string | undefined;
}

const useSetErrors = ({ errors }: SetErrorsProps) => {
  const [errorMessages, setErrorMessages] = useState<IErrorsMessages>();

  useEffect(() => {
    if (errors) {
      setErrorMessages({
        email: errors?.email?.message,
        password: errors?.password?.message
      });
    }
  }, [errors]);

  return { errorMessages };
};

export default useSetErrors;

import { FieldErrors } from 'react-hook-form';
import * as z from 'zod';

import { loginValidator } from 'utils/validators';

export type LoginForm = z.infer<typeof loginValidator>;

export interface SetErrorsProps {
  errors: FieldErrors<LoginForm>;
}

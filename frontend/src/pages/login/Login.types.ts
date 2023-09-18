import { FieldErrors } from 'react-hook-form';
import * as z from 'zod';

import { loginValidator } from 'src/utils/validators';

export type LoginForm = z.infer<typeof loginValidator>;

export interface SetErrorsProps {
  errors: FieldErrors<LoginForm>;
}

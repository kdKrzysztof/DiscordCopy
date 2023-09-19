import type { FieldErrors } from 'react-hook-form';
import * as z from 'zod';

import { registerValidator } from 'utils/validators';

export type RegisterForm = z.infer<typeof registerValidator>;

export interface SetErrorsProps {
  errors: FieldErrors<RegisterForm>;
}

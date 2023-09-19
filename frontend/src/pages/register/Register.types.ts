import * as z from 'zod';

import { registerValidator } from 'utils/validators';

export type RegisterForm = z.infer<typeof registerValidator>;


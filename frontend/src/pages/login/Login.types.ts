import * as z from 'zod';

import { loginValidator } from 'src/utils/validators';

export type LoginForm = z.infer<typeof loginValidator>;

import * as z from 'zod';

import { hasSpecialCharacters } from '..';

const FormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The username must be 4 characters or more' })
    .max(20, { message: 'The username must be 20 characters or less' })
    .regex(/^[a-zA-Z0-9_]+$/, 'The username must contain only letters, numbers and underscore (_)'),
  email: z.string().email({
    message: 'Invalid email. Please enter a valid email address'
  }),
  password: z.string().refine((input) => {
    return hasSpecialCharacters(input);
  })
});

export default FormSchema;

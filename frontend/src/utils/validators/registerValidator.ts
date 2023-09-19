import { t } from 'i18next';
import * as z from 'zod';

import { hasSpecialCharacters } from '..';

const FormSchema = z.object({
  username: z
    .string()
    .min(3, { message: t('usernameMin') })
    .max(20, { message: t('usernameMax') })
    .regex(/^[a-zA-Z0-9_]+$/, { message: t('usernameRegex') }),
  email: z.string().email({
    message: t('email')
  }),
  password: z
    .string()
    .min(5, { message: t('passwordMin') })
    .refine(
      (input) => {
        return hasSpecialCharacters(input);
      },
      { message: t('passwordSpecialChars') }
    )
});

export default FormSchema;

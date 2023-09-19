import { t } from 'i18next';
import * as z from 'zod';

const FormSchema = z.object({
  email: z.string().email({ message: t('email') }),
  password: z.string().refine((value) => value.trim() !== '', {
    message: t('emptyInput')
  })
});

export default FormSchema;

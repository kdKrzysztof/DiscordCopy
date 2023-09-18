import * as z from 'zod';

const FormSchema = z.object({
  email: z.string().email({ message: 'Email or password is not valid' }),
  password: z.string().refine((value) => value.trim() !== '', {
    message: 'Input cannot be an empty string'
  })
});

export default FormSchema;

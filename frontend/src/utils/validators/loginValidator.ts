import * as z from 'zod';

const FormSchema = z.object({
  email: z.string().email({ message: 'Login or password is not valid' }),
  password: z.string()
});

export default FormSchema;

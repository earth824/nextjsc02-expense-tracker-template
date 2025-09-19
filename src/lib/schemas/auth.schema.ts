import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required').trim(),
  lastName: z.string().min(1, 'Last name is required').trim(),
  email: z.email('Invalid email address'),
  password: z
    .string()
    .regex(
      /^[a-zA-Z0-9]{6,}$/,
      'Password must have at least 6 characters and contains only letter and number'
    )
});

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required')
});

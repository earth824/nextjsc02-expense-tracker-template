import { signInSchema, signUpSchema } from '@/lib/schemas/auth.schema';
import z from 'zod';

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;

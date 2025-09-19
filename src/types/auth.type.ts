import { signUpSchema } from '@/lib/schemas/auth.schema';
import z from 'zod';

export type SignUpInput = z.infer<typeof signUpSchema>;

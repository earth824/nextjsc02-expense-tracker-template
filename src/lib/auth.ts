import { authConfig } from '@/config/auth.config';
import NextAuth from 'next-auth';

export const { signIn, signOut, handlers, auth } = NextAuth(authConfig);

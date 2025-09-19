import { findUserByEmail } from '@/lib/datas/user.data';
import { signInSchema } from '@/lib/schemas/auth.schema';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import * as bcrypt from 'bcrypt';

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { data, success } = signInSchema.safeParse(credentials);
        if (!success) return null;
        const user = await findUserByEmail(data.email);
        if (!user) return null;

        const isMatch = await bcrypt.compare(
          data.password,
          user.password ?? ''
        );
        if (!isMatch) return null;

        return user;
      }
    })
  ]
} satisfies NextAuthConfig;

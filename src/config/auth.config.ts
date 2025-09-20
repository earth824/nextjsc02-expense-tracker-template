import { findUserByEmail } from '@/lib/datas/user.data';
import { signInSchema } from '@/lib/schemas/auth.schema';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import * as bcrypt from 'bcryptjs';
import {
  GUEST_ONLY_ROUTES,
  PROTECTED_ROUTES,
  ROUTE
} from '@/config/route.config';
import { NextResponse } from 'next/server';

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        // const { data, success } = signInSchema.safeParse(credentials);
        // if (!success) return null;
        // const user = await findUserByEmail(data.email);
        // if (!user) return null;

        // const isMatch = await bcrypt.compare(
        //   data.password,
        //   user.password ?? ''
        // );
        // if (!isMatch) return null;

        // return user;
        return null;
      }
    })
  ],
  callbacks: {
    // authorized({ auth, request }) {
    //   const nextPathname = request.nextUrl.pathname;
    //   if (PROTECTED_ROUTES.some(route => route.test(nextPathname) && !auth))
    //     return false;
    //   if (GUEST_ONLY_ROUTES.some(route => route.test(nextPathname) && auth))
    //     return NextResponse.redirect(new URL(ROUTE.TRANSACTION, request.url));
    //   return true;
    // }
  }
} satisfies NextAuthConfig;

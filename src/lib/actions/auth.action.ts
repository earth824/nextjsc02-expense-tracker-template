'use server';

import { ROUTE } from '@/config/route.config';
import { createUser, findUserByEmail } from '@/lib/datas/user.data';
import { signUpSchema } from '@/lib/schemas/auth.schema';
import { validateSchema } from '@/lib/utils';
import { ActionResult } from '@/types/action-result.type';
import { redirect } from 'next/navigation';
import * as bcrypt from 'bcrypt';

export async function signUpWithCredentials(
  input: unknown
): Promise<ActionResult> {
  try {
    const result = validateSchema(signUpSchema, input);
    if (!result.success) return result;

    const { data } = result;

    const existUser = await findUserByEmail(data.email);
    if (existUser) return { success: false, message: 'Email already in use' };

    data.password = await bcrypt.hash(data.password, 10);
    await createUser(data);
  } catch (error) {
    return { success: false, message: 'Unexpected error occured' };
  }
  redirect(ROUTE.SIGNIN);
}

import prisma from '@/lib/prisma';
import { SignUpInput } from '@/types/auth.type';

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(data: SignUpInput) {
  return prisma.user.create({ data });
}

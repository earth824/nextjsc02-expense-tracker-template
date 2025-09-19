export const ROUTE = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  TRANSACTION: '/transaction',
  CREATE_TRANSACTION: '/transaction/create',
  DUPLICATE_TRANSACTION: (id: string) => `transaction/${id}/create`,
  EDIT_TRANSACTION: (id: string) => `transaction/${id}/edit`
} as const;

export const PROTECTED_ROUTES: RegExp[] = [/\/transaction\/?.*/] as const;
export const GUEST_ONLY_ROUTES: RegExp[] = [/\/signin/, /\/signup/] as const;

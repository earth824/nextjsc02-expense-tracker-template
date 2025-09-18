export const ROUTE = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  TRANSACTION: '/transaction',
  CREATE_TRANSACTION: '/transaction/create',
  DUPLICATE_TRANSACTION: (id: string) => `transaction/${id}/create`,
  EDIT_TRANSACTION: (id: string) => `transaction/${id}/edit`
} as const;

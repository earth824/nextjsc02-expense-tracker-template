export const PROTECTED_ROUTES: RegExp[] = [/\/transaction\/?.*/] as const;
export const GUEST_ONLY_ROUTES: RegExp[] = [/\/signin/, /\/signup/] as const;

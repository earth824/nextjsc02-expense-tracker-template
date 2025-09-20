import { ValidationResult } from '@/types/action-result.type';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateSchema<T extends z.ZodType>(
  schema: T,
  input: unknown
): ValidationResult<z.core.output<T>, string> {
  const { data, success, error } = schema.safeParse(input);
  if (!success)
    return {
      success: false,
      message: 'Validation failed',
      details: z.flattenError(error)
    };
  return { success: true, data };
}

import { z } from 'zod';

export type SuccessActionResult<T = any> = {
  success: true;
  data?: T;
  message?: string;
};

export type ErrorActionResult = {
  success: false;
  message: string;
  details?: any;
};

export type ActionResult<T = any> = SuccessActionResult<T> | ErrorActionResult;

type SuccessValidationResult<T> = {
  success: true;
  data: T;
};

type ErrorValidationResult<T, U> = {
  success: false;
  message: 'Validation failed';
  details: z.core.$ZodFlattenedError<T, U>;
};

export type ValidationResult<T, U> =
  | SuccessValidationResult<T>
  | ErrorValidationResult<T, U>;

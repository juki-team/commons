import { ERROR } from '../constants/services';
import { ErrorCode } from '../types';

export class JkError extends Error {
  code: ErrorCode;
  
  constructor(code: ErrorCode, custom?: { message?: string, stack?: string }) {
    const message = custom?.message || ERROR[code].message;
    super(message);
    this.message = message;
    this.code = code;
    if (custom?.stack) {
      this.stack = custom?.stack as string;
    }
  }
}

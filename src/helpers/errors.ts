import { ERROR } from '../constants/services';
import { ErrorCode } from '../types';

export class JkError extends Error {
  code: ErrorCode;
  data: any;
  
  constructor(code: ErrorCode, custom?: { message?: string, stack?: string, data?: any }) {
    const message = custom?.message || ERROR[code].message;
    super(message);
    this.message = message;
    this.code = code;
    if (custom?.stack) {
      this.stack = custom.stack;
    }
    if (custom?.data) {
      this.data = custom.data;
    }
  }
}

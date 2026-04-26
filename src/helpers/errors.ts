import { getErrorMessage } from '../constants/services.js';
import type { ErrorCode } from '../types/index.js';

export class JkError extends Error {
  code: ErrorCode;
  data: unknown;

  constructor(code: ErrorCode, custom?: { message?: string; stack?: string; data?: unknown }) {
    const message = custom?.message || getErrorMessage(code);
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

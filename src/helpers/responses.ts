import { getErrorMessage } from '../constants/index.js';
import { JkError } from '../prototypes/index.js';
import {
  type ContentResponse,
  type ContentsMeta,
  type ContentsResponse,
  ErrorCode,
  type ErrorResponse,
} from '../types/index.js';
import { consoleError, isStringJson } from './commons.js';

export function toJkError(err: unknown): JkError {
  const error = new Error();
  let code = (err as JkError)?.code;
  if (!Object.values(ErrorCode).includes(code)) {
    code = ErrorCode.INTERNAL_SERVER_ERROR;
  }
  return new JkError(code, {
    message: (err as Error)?.message || error.message,
    stack: (err as Error)?.stack || error.stack,
    data: (err as JkError)?.data || null,
  });
}

function makeErrorResponse(code: ErrorCode): ErrorResponse {
  const message = getErrorMessage(code);
  return { success: false, message, errors: [{ code, detail: '', message }] };
}

function parseSuccessJson<T>(responseJson: Record<string, unknown>): T | null {
  if (responseJson.success === true && typeof responseJson.message === 'string') {
    if (responseJson.content) {
      return { success: true, message: responseJson.message, content: responseJson.content } as T;
    }
    if (Array.isArray(responseJson.contents) && responseJson.meta) {
      return { success: true, message: responseJson.message, contents: responseJson.contents, meta: responseJson.meta } as T;
    }
  }
  return null;
}

export const cleanRequest = <T extends ContentResponse<unknown> | ContentsResponse<unknown>>(
  responseText: string,
): ErrorResponse | T => {
  if (!isStringJson(responseText)) {
    const response = makeErrorResponse(ErrorCode.SERVICE_NOT_FOUND);
    consoleError({ message: 'response is not string json, success false on cleaning request', responseText, response });
    return response;
  }
  const responseJson = JSON.parse(responseText) as Record<string, unknown>;
  if (typeof responseJson.success === 'boolean') {
    const success = parseSuccessJson<T>(responseJson);
    if (success) return success;
    if (responseJson.success === false && typeof responseJson.message === 'string' && Array.isArray(responseJson.errors)) {
      const response: ErrorResponse = { success: false, message: responseJson.message, errors: responseJson.errors };
      consoleError({ message: 'success false on cleaning request', responseText, response });
      return response;
    }
  }
  const response = makeErrorResponse(ErrorCode.ERROR_ON_RESPONSE);
  consoleError({ message: 'success false on cleaning request', responseText, response });
  return response;
};

export const getDefaultMeta = (contents: unknown[], sort?: ContentsMeta['sort']): ContentsMeta => {
  return { sort: sort ?? [], page: 1, size: contents.length, total: contents.length, filter: {} };
};

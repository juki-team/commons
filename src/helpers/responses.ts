import { ERROR } from '../constants';
import { JkError } from '../prototypes';
import { ContentResponse, ContentsMeta, ContentsResponse, ErrorCode, ErrorResponse } from '../types';
import { consoleError, isStringJson } from './commons';

export function toJkError(err: any): JkError {
  const error = new Error();
  let code = err?.code;
  if (!(code in ErrorCode)) {
    code = ErrorCode.ERR500;
  }
  return new JkError(code, {
    message: err?.message || error.message,
    stack: err?.stack || error.stack,
    data: err?.data || null,
  });
}

export function errorsResponse(message: string, ...errors: JkError[]): ErrorResponse {
  return {
    success: false,
    message: message,
    errors: errors.map(error => ({
      code: error.code,
      message: error.message,
      detail: error.stack || new Error().stack || '',
      data: error.data,
    })),
  };
}

export function contentResponse<T>(message: string, content: T): ContentResponse<T> {
  return {
    success: true,
    message,
    content,
  };
}

export function contentsResponse<T>(message: string, contents: T[], meta: ContentsMeta): ContentsResponse<T> {
  return {
    success: true,
    message,
    contents,
    meta,
  };
}

export const cleanRequest = <T extends ContentResponse<any> | ContentsResponse<any>>(responseText: string): (ErrorResponse | T) => {
  if (!isStringJson(responseText)) {
    // this occurs when the endpoint don't exits or server is down
    const response: ErrorResponse = {
      success: false,
      message: ERROR[ErrorCode.ERR9999].message,
      errors: [ { code: ErrorCode.ERR9999, detail: '', message: ERROR[ErrorCode.ERR9999].message } ],
    };
    consoleError({ message: 'response is not string json, success false on cleaning request', responseText, response });
    // jukiApiManager.reportError({ message: 'success false on cleaning request', responseText, response });
    return response;
  }
  const responseJson = JSON.parse(responseText);
  if (typeof responseJson.success === 'boolean') {
    if (responseJson.success === true && typeof responseJson.message === 'string' && responseJson.content) { // V1
      return {
        success: true,
        message: responseJson.message,
        content: responseJson.content,
      } as T;
    } else if (responseJson.success === true && typeof responseJson.message === 'string' && Array.isArray(responseJson.contents) && responseJson.meta) { // V1
      return {
        success: true,
        message: responseJson.message,
        contents: responseJson.contents,
        meta: responseJson.meta,
      } as T;
    } else if (responseJson.success === false && typeof responseJson.message === 'string' && Array.isArray(responseJson.errors)) { // V1
      const response: ErrorResponse = {
        success: false,
        message: responseJson.message,
        errors: responseJson.errors,
      };
      consoleError({ message: 'success false on cleaning request', responseText, response });
      // jukiApiManager.reportError({ message: 'success false on cleaning request', responseText, response });
      return response;
    }
  }
  const response: ErrorResponse = {
    success: false,
    message: ERROR[ErrorCode.ERR9998].message,
    errors: [ { code: ErrorCode.ERR9998, detail: '', message: ERROR[ErrorCode.ERR9998].message } ],
  };
  consoleError({ message: 'success false on cleaning request', responseText, response });
  // jukiApiManager.reportError({ message: 'success false on cleaning request', responseText, response });
  return response;
};

export const getDefaultMeta = (contents: any[], sort?: ContentsMeta['sort']): ContentsMeta => {
  return { sort: sort ?? [], page: 1, size: contents.length, totalElements: contents.length, filter: {} };
};

import { JkError } from '../prototypes';
import { ContentResponseType, ContentsMetaType, ContentsResponseType, ErrorCode, ErrorResponseType } from '../types';

export function toJkError(err: any): JkError {
  const error = new Error();
  let code = err?.code;
  if (!(code in ErrorCode)) {
    code = ErrorCode.ERR500;
  }
  return new JkError(code, { message: err?.message || error.message, stack: err?.stack || error.stack });
}

export function errorsResponse(message: string, ...errors: JkError[]): ErrorResponseType {
  return {
    success: false,
    message: message,
    errors: errors.map(error => ({
      code: error.code,
      message: error.message,
      detail: error.stack || new Error().stack || '',
    })),
  };
}

export function contentResponse<T>(message: string, content: T): ContentResponseType<T> {
  return {
    success: true,
    message,
    content,
  };
}

export function contentsResponse<T>(message: string, contents: T[], meta: ContentsMetaType): ContentsResponseType<T> {
  return {
    success: true,
    message,
    contents,
    meta,
  };
}

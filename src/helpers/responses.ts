import { JkError } from '../prototypes';
import { ContentResponseType, ContentsMetaType, ContentsResponseType, ErrorCode, ErrorResponseType } from '../types';

export const toJkError = (err: any): JkError => {
  const error = new Error();
  let code = err?.code;
  if (!(code in ErrorCode)) {
    code = ErrorCode.ERR500;
  }
  return new JkError(code, { message: err?.message || error.message, stack: err?.stack || error.stack });
};

export const errorsResponse = (message: string, ...errors: JkError[]): ErrorResponseType => ({
  success: false,
  message: message,
  errors: errors.map(error => ({
    code: error.code,
    message: error.message,
    detail: error.stack || new Error().stack || '',
  })),
});

export const contentResponse = <T>(message: string, content: T): ContentResponseType<T> => ({
  success: true,
  message,
  content,
});

export const contentsResponse = <T>(message: string, contents: T[], meta: ContentsMetaType): ContentsResponseType<T> => ({
  success: true,
  message,
  contents,
  meta,
});

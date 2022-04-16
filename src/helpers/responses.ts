import { JkError } from '../prototypes';
import { ContentResponseType, ContentsMetaType, ContentsResponseType, ErrorCode, ErrorResponseType } from '../types';

export const toJkError = (err: any): JkError => {
  if (err instanceof JkError) {
    return err;
  }
  return new JkError(err?.code || ErrorCode.ERR500, { message: err?.message || '', stack: err?.stack || '' });
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

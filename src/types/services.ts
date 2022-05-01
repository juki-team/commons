export enum ErrorCode {
  // General errors
  ERR400 = 'ERR400',
  ERR401 = 'ERR401',
  ERR403 = 'ERR403',
  ERR404 = 'ERR404',
  ERR405 = 'ERR405',
  ERR500 = 'ERR500',
  // UI general errors
  ERR9997 = 'ERR9997', // 'aborted request'
  ERR9998 = 'ERR9998', // 'error on response'
  ERR9999 = 'ERR9999', // 'service no found'
  // User errors // 'unable update nickname yet', 'User not active'
  ERR0000 = 'ERR0000',
  ERR0001 = 'ERR0001',
  ERR0002 = 'ERR0002',
  ERR0003 = 'ERR0003',
  ERR0004 = 'ERR0004',
  ERR0005 = 'ERR0005',
  ERR0006 = 'ERR0006',
  ERR0010 = 'ERR0010',
  ERR0011 = 'ERR0011',
  ERR0012 = 'ERR001',
  // Problem Errors ERR01XX',
  ERR0100 = 'ERR0100',
  ERR0101 = 'ERR0101',
  ERR0110 = 'ERR0110',
  ERR0111 = 'ERR0111',
  ERR0112 = ' ERR0112',
  ERR0113 = 'ERR0113',
  // Contest Errors ERR02XX',
  ERR0200 = 'ERR0200',
  // CRUD contest
  ERR0210 = 'ERR0210',
  ERR0211 = 'ERR0211',
  ERR0212 = 'ERR0212',
  ERR0213 = 'ERR0213',
  // permissions contest
  ERR0214 = 'ERR0214',
  ERR0215 = 'ERR0215',
  ERR0216 = 'ERR0216',
  ERR0217 = 'ERR0217',
  // CRUD scoreboard
  ERR0230 = 'ERR0230',
  ERR0231 = 'ERR0231',
  ERR0232 = 'ERR0232',
  ERR0233 = 'ERR0233',
  // permissions scoreboard
  ERR0234 = 'ERR0234',
  ERR0235 = 'ERR0235',
  ERR0236 = 'ERR0236',
  ERR0237 = 'ERR0237',
  // Submission Errors ERR03XXX',
  ERR0300 = 'ERR0300',
  ERR0301 = 'ERR0301',
  ERR0302 = 'ERR0302',
  ERR0303 = 'ERR0303',
  ERR0310 = 'ERR0310',
  ERR0311 = 'ERR0311',
  
  ERR0321 = 'ERR0321',
  
  ERR0331 = 'ERR0331',
  // Utils Errors ERR04XX
  ERR0400 = 'ERR0400', // 'internal server error on utils services'
  ERR0410 = 'ERR0410', // 'empty image'
  ERR0420 = 'ERR0420',
  ERR0421 = 'ERR0421',
  ERR0430 = 'ERR0430',
  ERR0440 = 'ERR0440',
  // Team Errors ERR06XX
  ERR0600 = 'ERR0600',
  ERR0601 = 'ERR0601',
  ERR0602 = 'ERR0602',
  ERR0603 = 'ERR0603',
  // Course Errors ERR07XXX',
}

export type ErrorType = {
  code: ErrorCode,
  detail: string,
}

export type ErrorResponseType = {
  success: false,
  message: string,
  errors: ErrorType[],
}

export type ContentResponseType<T> = {
  success: true,
  message: string,
  content: T,
}

export type ContentsMetaType = {
  page: number,
  size: number,
  totalElements: number,
  sort: { [key: string]: number }[],
}

export type ContentsResponseType<T> = {
  success: true,
  message: string,
  contents: T[],
  meta: ContentsMetaType,
}

export enum LogLevel {
  FATAL = 'FATAL',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  TRACE = 'TRACE',
}

export enum HTTPMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

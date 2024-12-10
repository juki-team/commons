export enum WebSocketBroadcastEvent {
  CODE_RUN_STATUS_NOTIFICATION = 'CODE_RUN_STATUS_NOTIFICATION',
  SUBMISSION_RUN_STATUS_NOTIFICATION = 'SUBMISSION_RUN_STATUS_NOTIFICATION',
  USER_NOTIFICATION = 'USER_NOTIFICATION',
}

export enum WebSocketActionEvent {
  PING = 'PING',
  
  SUBSCRIBE_CODE_RUN_STATUS = 'SUBSCRIBE_CODE_RUN_STATUS',
  UNSUBSCRIBE_CODE_RUN_STATUS = 'UNSUBSCRIBE_CODE_RUN_STATUS',
  
  SUBSCRIBE_SUBMISSION_RUN_STATUS = 'SUBSCRIBE_SUBMISSION_RUN_STATUS',
  UNSUBSCRIBE_SUBMISSION_RUN_STATUS = 'UNSUBSCRIBE_SUBMISSION_RUN_STATUS',
}

export enum WebSocketResponseEvent {
  PONG = 'PONG',
  CODE_RUN_STATUS_MESSAGE = 'CODE_RUN_STATUS_MESSAGE',
  SUBMISSION_RUN_STATUS_MESSAGE = 'SUBMISSION_RUN_STATUS_MESSAGE',
  USER_MESSAGE = 'USER_MESSAGE',
}

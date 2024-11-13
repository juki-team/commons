import { SocketSubscribeEventDTO, SocketUnsubscribeEventDTO } from '../dto';
import { SocketEvent } from '../types';

export const isSocketSubscribeEventDTO = (event: any): event is SocketSubscribeEventDTO => {
  return event.action === 'subscribe' && event.event in SocketEvent && typeof event.id === 'string' && typeof event.sessionId === 'string';
};

export const isSocketUnsubscribeEventDTO = (event: any): event is SocketUnsubscribeEventDTO => {
  return event.action === 'unsubscribe' && event.event in SocketEvent && typeof event.id === 'string' && typeof event.sessionId === 'string';
};

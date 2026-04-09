export enum CompanyLogoType {
  HORIZONTAL_WHITE = 'horizontal-white',
  HORIZONTAL_COLOR = 'horizontal-color',
  VERTICAL_WHITE = 'vertical-white',
  VERTICAL_COLOR = 'vertical-color',
}

export type ResourceInstance = {
  imageId: string;
  instanceType: string;
  userDataScript: string;
  minimum: number;
  maximum: number;
};

export type ResourceLogger = {
  info: {
    chatId: string;
    messageThreadId: string;
  };
  error: {
    chatId: string;
    messageThreadId: string;
  };
};

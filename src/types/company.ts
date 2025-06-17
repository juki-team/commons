export enum CompanyPlan {
  FREE = 'FREE', // shared runner and shared compiles
  STANDARD = 'STANDARD', // 1 dedicated runner, 1 dedicated compiler
  PREMIUM = 'PREMIUM', // 1 dedicated runner, 1 dedicated compiler + extra hours billed
  CUSTOM = 'CUSTOM', // X dedicated runner, X dedicated compiler + extra hours billed, X cpu, X ram
}

export enum CompanyLogoType {
  HORIZONTAL_WHITE = 'horizontal-white',
  HORIZONTAL_COLOR = 'horizontal-color',
  VERTICAL_WHITE = 'vertical-white',
  VERTICAL_COLOR = 'vertical-color',
}

export type ResourceInstanceType = {
  imageId: string,
  instanceType: string,
  userDataScript: string,
  minimum: number,
  maximum: number,
}

export type ResourceLoggerType = {
  info: {
    chatId: string,
    messageThreadId: string,
  },
  error: {
    chatId: string,
    messageThreadId: string,
  }
}

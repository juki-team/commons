export type TaskResponseDTOContainer = {
  runtimeId?: string,
}

export interface EcsTask {
  taskArn: string,
  taskDefinitionArn: string,
  group: string,
  version: number,
  cpu: string,
  memory: string,
  launchType: string,
  createdAt: Date,
  startedAt: Date,
  desiredStatus: string,
  lastStatus: string,
  containers?: TaskResponseDTOContainer[];
}

interface EcsTaskSystemSummaryListResponseDTO extends EcsTask {
  isLowRunnerCompanyKeys: string[],
  isHighRunnerCompanyKeys: string[],
  isRunnerListenerCompanyKeys: string[],
}

export interface EcsTaskDefinition {
  family: string,
  taskDefinitionArn: string,
  revision: number,
  cpu: string,
  memory: string,
  registeredAt: Date,
}

interface EcsTaskDefinitionSystemSummaryListResponseDTO extends EcsTaskDefinition {
  isLowRunnerCompanyKeys: string[],
  isHighRunnerCompanyKeys: string[],
  isRunnerListenerCompanyKeys: string[],
}

export type SqsPropertiesType = {
  QueueArn: string,
  ApproximateNumberOfMessages: string,
  ApproximateNumberOfMessagesNotVisible: string,
  ApproximateNumberOfMessagesDelayed: string,
  CreatedTimestamp: string,
  LastModifiedTimestamp: string,
  VisibilityTimeout: string,
  MaximumMessageSize: string,
  MessageRetentionPeriod: string,
  DelaySeconds: string,
  ReceiveMessageWaitTimeSeconds: string,
  SqsManagedSseEnabled: string,
  FifoQueue: string,
  DeduplicationScope: string,
  FifoThroughputLimit: string,
  ContentBasedDeduplication: string,
}

export interface SqsPropertiesResponseDTO {
  sqsJukiHighRunnerFifo: SqsPropertiesType,
  sqsJukiLowRunnerFifo: SqsPropertiesType,
}

export interface EmailDataResponseDTO {
  emailTemplate: string,
  contactEmails: string[],
  mainEmail: string,
}

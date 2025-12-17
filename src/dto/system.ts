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

export interface EcsTaskSystemSummaryListResponseDTO extends EcsTask {
  // isLowRunnerCompanyKeys: string[],
  isHighRunnerCompanyKeys: string[],
  // isRunnerListenerCompanyKeys: string[],
}

export interface EcsTaskDefinition {
  family: string,
  taskDefinitionArn: string,
  revision: number,
  cpu: string,
  memory: string,
  registeredAt: Date,
}

export interface EcsTaskDefinitionSystemSummaryListResponseDTO extends EcsTaskDefinition {
  // isLowRunnerCompanyKeys: string[],
  isHighRunnerCompanyKeys: string[],
  // isRunnerListenerCompanyKeys: string[],
}

export interface Ec2InstanceType {
  instanceId: string,
  state: 'pending' | 'running' | 'shutting-down' | 'stopped' | 'stopping' | 'terminated' | undefined,
  instanceType: string,
  privateIpAddress: string,
  publicIpAddress: string,
  tags: { key: string, value: string }[],
  launchTime: Date | undefined,
  instanceLifecycle: 'capacity-block' | 'scheduled' | 'spot' | 'interruptible-capacity-reservation' | undefined,
  imageId: string,
  vpcId: string,
  subnet: { id: string, name: string },
  securityGroups: { groupId: string, groupName: string }[],
  raw: any,
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

export type SsmSessionType = {
  sessionId: string,
  target: string,
  status: 'Connected' | 'Connecting' | 'Disconnected' | 'Failed' | 'Terminating' | 'Terminated' | undefined,
  startTimestamps: number,
  owner: string,
  maxSessionDuration: number,
  raw: any,
}

export type TaskResponseDtoContainer = {
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
  createdAt: number,
  startedAt: number,
  desiredStatus: string,
  lastStatus: string,
  containers?: TaskResponseDtoContainer[];
}

export interface EcsTaskDefinition {
  family: string,
  taskDefinitionArn: string,
  revision: number,
  cpu: string,
  memory: string,
  registeredAt: number,
}

export interface Ec2Instance {
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

export type SqsProperties = {
  QueueArn: string,
  ApproximateNumberOfMessages: string,
  ApproximateNumberOfMessagesNotVisible: string,
  ApproximateNumberOfMessagesDelayed: string,
  createdAt: number,
  updatedAt: number,
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

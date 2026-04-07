export type TaskResponseDTOContainer = {
  runtimeId?: string;
};

export interface EcsTask {
  taskArn: string;
  taskDefinitionArn: string;
  group: string;
  version: number;
  cpu: string;
  memory: string;
  launchType: string;
  createdAt: Date;
  startedAt: Date;
  desiredStatus: string;
  lastStatus: string;
  containers?: TaskResponseDTOContainer[];
}

export interface EcsTaskSystemSummaryListResponseDTO extends EcsTask {
  // isLowRunnerCompanyKeys: string[],
  isHighRunnerCompanyKeys: string[];
  // isRunnerListenerCompanyKeys: string[],
}

export interface EcsTaskDefinition {
  family: string;
  taskDefinitionArn: string;
  revision: number;
  cpu: string;
  memory: string;
  registeredAt: Date;
}

export interface EcsTaskDefinitionSystemSummaryListResponseDTO extends EcsTaskDefinition {
  // isLowRunnerCompanyKeys: string[],
  isHighRunnerCompanyKeys: string[];
  // isRunnerListenerCompanyKeys: string[],
}

export interface Ec2Instance {
  instanceId: string;
  state: 'pending' | 'running' | 'shutting-down' | 'stopped' | 'stopping' | 'terminated' | undefined;
  instanceType: string;
  privateIpAddress: string;
  publicIpAddress: string;
  tags: { key: string; value: string }[];
  launchTime: Date | undefined;
  instanceLifecycle: 'capacity-block' | 'scheduled' | 'spot' | 'interruptible-capacity-reservation' | undefined;
  imageId: string;
  vpcId: string;
  subnet: { id: string; name: string };
  securityGroups: { groupId: string; groupName: string }[];
  raw: unknown;
}

export type SqsProperties = {
  queueArn: string;
  approximateNumberOfMessages: string;
  approximateNumberOfMessagesNotVisible: string;
  approximateNumberOfMessagesDelayed: string;
  createdTimestamp: string;
  lastModifiedTimestamp: string;
  visibilityTimeout: string;
  maximumMessageSize: string;
  messageRetentionPeriod: string;
  delaySeconds: string;
  receiveMessageWaitTimeSeconds: string;
  sqsManagedSseEnabled: string;
  fifoQueue: string;
  deduplicationScope: string;
  fifoThroughputLimit: string;
  contentBasedDeduplication: string;
};

export interface SqsPropertiesResponseDTO {
  sqsJukiHighRunnerFifo: SqsProperties;
  sqsJukiLowRunnerFifo: SqsProperties;
}

export interface EmailDataResponseDTO {
  emailTemplate: string;
  contactEmails: string[];
  mainEmail: string;
}

export type SsmSession = {
  sessionId: string;
  target: string;
  status: 'Connected' | 'Connecting' | 'Disconnected' | 'Failed' | 'Terminating' | 'Terminated' | undefined;
  startTimestamps: number;
  owner: string;
  maxSessionDuration: number;
  raw: unknown;
};

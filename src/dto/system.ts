export interface TaskResponseDTO {
  taskArn: string,
  taskDefinitionArn: string,
  group: string,
  cpu: string,
  memory: string,
  launchType: string,
  createdAt: Date,
  startedAt: Date,
  desiredStatus: string,
  lastStatus: string,
}

export interface TaskDefinitionResponseDTO {
  family: string,
  taskDefinitionArn: string,
  revision: number,
  cpu: string,
  memory: string,
  registeredAt: Date,
}

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

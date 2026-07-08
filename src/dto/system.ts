import type { EcsTask, EcsTaskDefinition, SqsProperties } from '../types/index.js';

export interface EcsTaskSystemSummaryListResponseDto extends EcsTask {
  // isLowRunnerOrganizationKeys: string[],
  isHighRunnerOrganizationKeys: string[];
  // isRunnerListenerOrganizationKeys: string[],
}

export interface EcsTaskDefinitionSystemSummaryListResponseDto extends EcsTaskDefinition {
  // isLowRunnerOrganizationKeys: string[],
  isHighRunnerOrganizationKeys: string[];
  // isRunnerListenerOrganizationKeys: string[],
}

export interface SqsPropertiesResponseDto {
  sqsJukiHighRunnerFifo: SqsProperties;
  sqsJukiLowRunnerFifo: SqsProperties;
}

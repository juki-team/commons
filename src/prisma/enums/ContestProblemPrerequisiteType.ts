export const ContestProblemPrerequisiteType = {
  INDIVIDUALLY: 'INDIVIDUALLY',
  CONTEST: 'CONTEST',
} as const;

export type ContestProblemPrerequisiteType =
  (typeof ContestProblemPrerequisiteType)[keyof typeof ContestProblemPrerequisiteType];

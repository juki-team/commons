import { ProblemInput, ProblemMode, ProblemOutput, ProblemRole, ProblemStatus, ProblemType } from '../types';

export const PROBLEM_STATUS: { [key in ProblemStatus]: { value: ProblemStatus, label: string, description: string } } = {
  [ProblemStatus.ARCHIVED]: {
    value: ProblemStatus.ARCHIVED,
    label: 'archived',
    description: 'the problem will not appear for anyone, contact the administrator to see it again',
  },
  [ProblemStatus.PRIVATE]: {
    value: ProblemStatus.PRIVATE,
    label: 'private',
    description: 'the problem will appear in the problem list only for you and problem administrators and users will have access according to their roles',
  },
  [ProblemStatus.RESERVED]: {
    value: ProblemStatus.RESERVED,
    label: 'reserved',
    description: 'the problem will appear in the problem list only for problem editors and users will have access according to their roles',
  },
  [ProblemStatus.PUBLIC]: {
    value: ProblemStatus.PUBLIC,
    label: 'public',
    description: 'the problem will appear in the problem list and users will be able to solve it',
  },
};

export const PROBLEM_INPUT: { [key in ProblemInput]: { value: ProblemInput, label: string } } = {
  [ProblemInput.STANDARD]: { value: ProblemInput.STANDARD, label: 'standard' },
  [ProblemInput.INTERACTIVE]: { value: ProblemInput.INTERACTIVE, label: 'interactive' },
};

export const PROBLEM_OUTPUT: { [key in ProblemOutput]: { value: ProblemOutput, label: string } } = {
  [ProblemOutput.STANDARD]: { value: ProblemOutput.STANDARD, label: 'standard' },
  [ProblemOutput.DYNAMIC]: { value: ProblemOutput.DYNAMIC, label: 'dynamic' },
  [ProblemOutput.INTERACTIVE]: { value: ProblemOutput.INTERACTIVE, label: 'interactive' },
};

export const PROBLEM_MODES = [ProblemMode.TOTAL, ProblemMode.SUBTASK, ProblemMode.PARTIAL];

export const PROBLEM_MODE: { [key in ProblemMode]: { value: ProblemMode, label: string } } = {
  [ProblemMode.TOTAL]: { value: ProblemMode.TOTAL, label: 'total' },
  [ProblemMode.SUBTASK]: { value: ProblemMode.SUBTASK, label: 'subtask' },
  [ProblemMode.PARTIAL]: { value: ProblemMode.PARTIAL, label: 'partial' },
};

export const PROBLEM_TYPE: { [key in ProblemType]: { value: ProblemType, label: string } } = {
  [ProblemType.STANDARD]: { value: ProblemType.STANDARD, label: 'standard' },
  [ProblemType.INTERACTIVE]: { value: ProblemType.INTERACTIVE, label: 'interactive' },
  [ProblemType.DYNAMIC]: { value: ProblemType.DYNAMIC, label: 'dynamic' },
};

export const PROBLEM_ROLE: { [key in ProblemRole]: { value: ProblemRole, label: string, level: number } } = {
  [ProblemRole.RESTRICTED]: { value: ProblemRole.RESTRICTED, label: 'restricted', level: 7 },
  [ProblemRole.GUEST]: { value: ProblemRole.GUEST, label: 'guest', level: 6 },
  [ProblemRole.REGULAR]: { value: ProblemRole.REGULAR, label: 'regular', level: 5 },
  [ProblemRole.CREATOR]: { value: ProblemRole.CREATOR, label: 'creator', level: 4 },
  [ProblemRole.MANAGER]: { value: ProblemRole.MANAGER, label: 'manager', level: 3 },
  [ProblemRole.MASTER]: { value: ProblemRole.MASTER, label: 'master', level: 2 },
  [ProblemRole.ADMIN]: { value: ProblemRole.ADMIN, label: 'admin', level: 1 },
  [ProblemRole.SUPER_ADMIN]: { value: ProblemRole.SUPER_ADMIN, label: 'super admin', level: 0 },
};

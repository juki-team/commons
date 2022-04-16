import { ProblemInput, ProblemMode, ProblemOutput, ProblemStatus, ProblemType } from '../types';

export const PROBLEM_STATUS: { [key in ProblemStatus]: { value: ProblemStatus, label: string } } = {
  [ProblemStatus.ARCHIVED]: { value: ProblemStatus.ARCHIVED, label: 'archived' },
  [ProblemStatus.PRIVATE]: { value: ProblemStatus.PRIVATE, label: 'private' },
  [ProblemStatus.RESERVED]: { value: ProblemStatus.RESERVED, label: 'reserved' },
  [ProblemStatus.PUBLIC]: { value: ProblemStatus.PUBLIC, label: 'public' },
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

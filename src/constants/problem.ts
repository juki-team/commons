import { ProblemInput, ProblemMode, ProblemOutput, ProblemStatus, ProblemType } from '../types';

export const PROBLEM_STATUS: { [key in ProblemStatus]: { value: ProblemStatus, print: string } } = {
  [ProblemStatus.ARCHIVED]: { value: ProblemStatus.ARCHIVED, print: 'archived' },
  [ProblemStatus.PRIVATE]: { value: ProblemStatus.PRIVATE, print: 'private' },
  [ProblemStatus.RESERVED]: { value: ProblemStatus.RESERVED, print: 'reserved' },
  [ProblemStatus.PUBLIC]: { value: ProblemStatus.PUBLIC, print: 'public' },
};

export const PROBLEM_INPUT: { [key in ProblemInput]: { value: ProblemInput, print: string } } = {
  [ProblemInput.STANDARD]: { value: ProblemInput.STANDARD, print: 'standard' },
  [ProblemInput.INTERACTIVE]: { value: ProblemInput.INTERACTIVE, print: 'interactive' },
};

export const PROBLEM_OUTPUT: { [key in ProblemOutput]: { value: ProblemOutput, print: string } } = {
  [ProblemOutput.STANDARD]: { value: ProblemOutput.STANDARD, print: 'standard' },
  [ProblemOutput.DYNAMIC]: { value: ProblemOutput.DYNAMIC, print: 'dynamic' },
  [ProblemOutput.INTERACTIVE]: { value: ProblemOutput.INTERACTIVE, print: 'interactive' },
};

export const PROBLEM_MODES = [ProblemMode.TOTAL, ProblemMode.SUBTASK, ProblemMode.PARTIAL];

export const PROBLEM_MODE: { [key in ProblemMode]: { value: ProblemMode, print: string } } = {
  [ProblemMode.TOTAL]: { value: ProblemMode.TOTAL, print: 'total' },
  [ProblemMode.SUBTASK]: { value: ProblemMode.SUBTASK, print: 'subtask' },
  [ProblemMode.PARTIAL]: { value: ProblemMode.PARTIAL, print: 'partial' },
};

export const PROBLEM_TYPE: { [key in ProblemType]: { value: ProblemType, print: string } } = {
  [ProblemType.STANDARD]: { value: ProblemType.STANDARD, print: 'standard' },
  [ProblemType.INTERACTIVE]: { value: ProblemType.INTERACTIVE, print: 'interactive' },
  [ProblemType.DYNAMIC]: { value: ProblemType.DYNAMIC, print: 'dynamic' },
};

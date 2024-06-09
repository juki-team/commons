import { ProblemInput, ProblemScoringMode, ProblemOutput, ProblemRole, ProblemStatus, ProblemType } from '../types';

export const PROBLEM_STATUS: {
  [key in ProblemStatus]: {
    value: ProblemStatus,
    label: string,
    description: string
  }
} = {
  [ProblemStatus.ARCHIVED]: {
    value: ProblemStatus.ARCHIVED,
    label: 'archived',
    description: 'the problem will not appear for anyone, contact the administrator to see it again.',
  },
  [ProblemStatus.PRIVATE]: {
    value: ProblemStatus.PRIVATE,
    label: 'private',
    description: 'the problem will appear in the problem list only for you and problem administrators and users will have access according to their roles.',
  },
  [ProblemStatus.RESERVED]: {
    value: ProblemStatus.RESERVED,
    label: 'reserved',
    description: 'the problem will appear in the problem list only for problem editors and users will have access according to their roles.',
  },
  [ProblemStatus.PUBLIC]: {
    value: ProblemStatus.PUBLIC,
    label: 'public',
    description: 'the problem will appear in the problem list and users will be able to solve it.',
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

export const PROBLEM_MODES = [ ProblemScoringMode.TOTAL, ProblemScoringMode.SUBTASK, ProblemScoringMode.PARTIAL ];

export const PROBLEM_MODE: { [key in ProblemScoringMode]: { value: ProblemScoringMode, label: string, description: string } } = {
  [ProblemScoringMode.TOTAL]: {
    value: ProblemScoringMode.TOTAL,
    label: 'total',
    description: 'if all test cases are Accepted the result is Accepted '
      + 'otherwise it will be Runtime Error, Time Limited Exceeded, Memory Limited Exceeded, Wrong Answer or Presentation Error in that order.',
  },
  [ProblemScoringMode.SUBTASK]: {
    value: ProblemScoringMode.SUBTASK,
    label: 'subtask',
    description: 'the test cases are grouped and each group of test cases is assigned a score, '
      + 'if all test cases in a group are Accepted then the score assigned to that group of test cases is added to total score, '
      + 'if total score is equal to the sum of the assigned scores of all groups of test cases then the result is Accepted, '
      + 'otherwise if the total score is greater than zero the result is Partial Accepted with the total accumulated score, '
      + 'otherwise it will be Runtime Error, Time Limited Exceeded, Memory Limited Exceeded, Wrong Answer or Presentation Error in that order.',
  },
  [ProblemScoringMode.PARTIAL]: {
    value: ProblemScoringMode.PARTIAL,
    label: 'partial',
    description: 'the test cases are grouped and each group is associated with X points, '
      + 'and each test case in a group scores X points ',
  },
};

export const PROBLEM_TYPES = [ ProblemType.STANDARD, ProblemType.DYNAMIC, ProblemType.INTERACTIVE ];

export const PROBLEM_TYPE: { [key in ProblemType]: { value: ProblemType, label: string, description: string } } = {
  [ProblemType.STANDARD]: {
    value: ProblemType.STANDARD,
    label: 'standard',
    description: 'The contestant submit a single source code in one of the allowed programming languages. '
      + 'The source code is either standalone or to be compiled. '
      + 'The resulting user\'s executable does I/O standard input and output. '
      + 'The output produced by the contestant\'s program is then compared to the correct output using a simple diff algorithm.',
  },
  [ProblemType.INTERACTIVE]: {
    value: ProblemType.INTERACTIVE, label: 'interactive', description: 'developing..',
  },
  [ProblemType.DYNAMIC]: {
    value: ProblemType.DYNAMIC,
    label: 'dynamic',
    description: 'The contestant submit a single source code in one of the allowed programming languages. '
      + 'The user\'s source code is either standalone or to be compiled. '
      + 'The resulting user\'s executable does I/O standard input and output. '
      + 'The output produced by the contestant\'s program is saved. '
      + 'The problem editor save a single source code in C++ 17. '
      + 'The editor\'s source code can read judge input filepath argv[1], judge output filepath argv[2], user\'s output filepath argv[3], user\'s error filepath argv[4], user\'s log filepath argv[5], user\'s source filepath argv[6] and submission information filepath argv[7] (companyId, submitId, runId, userId, contestId, problemId, language, userNickname, timestamp). '
      + 'The resulting editor\'s executable should be "AC" or a number between 1 and 100 for partial accepted',
  },
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

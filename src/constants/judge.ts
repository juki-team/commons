import { Judge, ProblemMode, ProblemType, ProblemVerdict, ProgrammingLanguage, SubmissionRunStatus } from '../types';

export const JUDGE: { [key in Judge]: { value: Judge, print: string, logo: string, url: string } } = {
  [Judge.JUKI_JUDGE]: {
    value: Judge.JUKI_JUDGE,
    print: 'Juki Judge',
    logo: 'https://i.ibb.co/gvC4twc/juki.png',
    url: 'https://jukijudge.com',
  },
  [Judge.CODEFORCES]: {
    value: Judge.CODEFORCES,
    print: 'Codeforces',
    logo: 'https://vjudge.net/static/images/remote_oj/CodeForces_favicon.png',
    url: 'https://codeforces.com',
    
  },
  [Judge.UVA_ONLINE_JUDGE]: {
    value: Judge.UVA_ONLINE_JUDGE,
    print: 'Uva Online Judge',
    logo: 'https://vjudge.net/static/images/remote_oj/UVA_favicon.ico',
    url: 'https://onlinejudge.org',
  },
  [Judge.AT_CODER]: {
    value: Judge.AT_CODER,
    print: 'AtCoder',
    logo: 'https://bira37.github.io/a93aa273c58de43a48942a1f6b14418d.svg',
    url: 'https://atcoder.jp',
  },
  [Judge.CODECHEF]: {
    value: Judge.CODECHEF,
    print: 'Codechef',
    logo: 'https://bira37.github.io/7559bdeef5edfc8d20cd19a499105d71.svg',
    url: 'https://www.codechef.com',
  },
};

export const RUNNER_ACCEPTED_PROBLEM_MODES: ProblemMode[] = [
  ProblemMode.TOTAL,
  ProblemMode.SUBTASK,
];

export const RUNNER_ACCEPTED_PROBLEM_TYPES: ProblemType[] = [
  ProblemType.STANDARD,
  ProblemType.DYNAMIC,
];

export const RUNNER_ACCEPTED_PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  ProgrammingLanguage.C,
  ProgrammingLanguage.CPP,
  ProgrammingLanguage.CPP11,
  ProgrammingLanguage.CPP14,
  ProgrammingLanguage.CPP17,
  ProgrammingLanguage.JAVA,
  ProgrammingLanguage.JAVASCRIPT,
  ProgrammingLanguage.PYTHON,
  ProgrammingLanguage.PYTHON3,
];

export const ACCEPTED_PROGRAMMING_LANGUAGES = [
  ProgrammingLanguage.C,
  ProgrammingLanguage.CPP11,
  ProgrammingLanguage.CPP14,
  ProgrammingLanguage.CPP17,
  ProgrammingLanguage.JAVA,
  ProgrammingLanguage.JAVASCRIPT,
  ProgrammingLanguage.PYTHON,
  ProgrammingLanguage.PYTHON3,
];

export const PROBLEM_VERDICT: { [key in ProblemVerdict]: { value: ProblemVerdict, print: string, color: string } } = {
  [ProblemVerdict.NONE]: { value: ProblemVerdict.NONE, print: 'none', color: '#555555' },
  [ProblemVerdict.PENDING]: { value: ProblemVerdict.PENDING, print: 'pending', color: '#79B6FD' },
  [ProblemVerdict.HIDDEN]: { value: ProblemVerdict.HIDDEN, print: 'hidden', color: '#555555' },
  [ProblemVerdict.AC]: { value: ProblemVerdict.AC, print: 'accepted', color: '#43D787' },
  [ProblemVerdict.PE]: { value: ProblemVerdict.PE, print: 'presentation error', color: '#4EFA9D' },
  [ProblemVerdict.PA]: { value: ProblemVerdict.PA, print: 'partial accepted', color: '#4EFA9D' },
  [ProblemVerdict.CE]: { value: ProblemVerdict.CE, print: 'compilation error', color: '#FE9F9F' },
  [ProblemVerdict.RE]: { value: ProblemVerdict.RE, print: 'runtime error', color: '#FE9F9F' },
  [ProblemVerdict.TLE]: { value: ProblemVerdict.TLE, print: 'time limit exceed', color: '#FE9F9F' },
  [ProblemVerdict.MLE]: { value: ProblemVerdict.MLE, print: 'memory limit exceed', color: '#FE9F9F' },
  [ProblemVerdict.WA]: { value: ProblemVerdict.WA, print: 'wrong answer', color: '#FE9F9F' },
};

export const PROBLEM_VERDICTS = [
  ProblemVerdict.NONE,
  ProblemVerdict.PENDING,
  ProblemVerdict.AC,
  ProblemVerdict.PE,
  ProblemVerdict.PA,
  ProblemVerdict.CE,
  ProblemVerdict.RE,
  ProblemVerdict.TLE,
  ProblemVerdict.MLE,
  ProblemVerdict.WA,
];

export const SUBMISSION_RUN_STATUS: { [key in SubmissionRunStatus]: { value: SubmissionRunStatus, print: string } } = {
  [SubmissionRunStatus.NONE]: { value: SubmissionRunStatus.NONE, print: 'none' }, // status
  [SubmissionRunStatus.RECEIVED]: { value: SubmissionRunStatus.RECEIVED, print: 'received' }, // state
  [SubmissionRunStatus.COMPILING]: { value: SubmissionRunStatus.COMPILING, print: 'compiling' }, // state
  [SubmissionRunStatus.COMPILED]: { value: SubmissionRunStatus.COMPILED, print: 'compiled' },  // status
  [SubmissionRunStatus.COMPILATION_ERROR]: { value: SubmissionRunStatus.COMPILATION_ERROR, print: 'compilation error' },  // status
  [SubmissionRunStatus.RUNNING_TEST_CASE]: { value: SubmissionRunStatus.RUNNING_TEST_CASE, print: 'running test case' }, // state
  [SubmissionRunStatus.RUNNING_TEST_CASES]: { value: SubmissionRunStatus.RUNNING_TEST_CASES, print: 'running test cases' }, // state
  [SubmissionRunStatus.RUNNING_SAMPLE_TEST_CASES]: { value: SubmissionRunStatus.RUNNING_SAMPLE_TEST_CASES, print: 'running sample test cases' }, // state
  [SubmissionRunStatus.EXECUTED_TEST_CASE]: { value: SubmissionRunStatus.EXECUTED_TEST_CASE, print: 'executed test case' }, // status
  [SubmissionRunStatus.FAILED_TEST_CASE]: { value: SubmissionRunStatus.FAILED_TEST_CASE, print: 'failed test case' }, // status
  [SubmissionRunStatus.JUDGING_TEST_CASE]: { value: SubmissionRunStatus.JUDGING_TEST_CASE, print: 'judging test case' }, // state
  [SubmissionRunStatus.GRADING]: { value: SubmissionRunStatus.GRADING, print: 'grading' }, // status
  [SubmissionRunStatus.FAILED]: { value: SubmissionRunStatus.FAILED, print: 'failed' },  // status
  [SubmissionRunStatus.COMPLETED]: { value: SubmissionRunStatus.COMPLETED, print: 'completed' },  // status
};

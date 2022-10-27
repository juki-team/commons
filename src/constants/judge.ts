import { Judge, ProblemMode, ProblemType, ProblemVerdict, ProgrammingLanguage, SubmissionRunStatus } from '../types';

export const JUDGE: { [key in Judge]: { value: Judge, label: string, logo: string, url: string } } = {
  [Judge.JUKI_JUDGE]: {
    value: Judge.JUKI_JUDGE,
    label: 'Juki Judge',
    logo: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
    url: 'https://jukijudge.com',
  },
  [Judge.CODEFORCES]: {
    value: Judge.CODEFORCES,
    label: 'Codeforces',
    logo: 'https://images.juki.pub/c/codeforces-logo-horizontal-color.svg',
    url: 'https://codeforces.com',
    
  },
  [Judge.UVA_ONLINE_JUDGE]: {
    value: Judge.UVA_ONLINE_JUDGE,
    label: 'Uva Online Judge',
    logo: 'https://images.juki.pub/c/uva-online-judge-logo-color.png',
    url: 'https://onlinejudge.org',
  },
  [Judge.AT_CODER]: {
    value: Judge.AT_CODER,
    label: 'AtCoder',
    logo: 'https://images.juki.pub/c/at-coder-logo-color.png',
    url: 'https://atcoder.jp',
  },
  [Judge.CODECHEF]: {
    value: Judge.CODECHEF,
    label: 'Codechef',
    logo: 'https://images.juki.pub/c/codechef-logo-color.svg',
    url: 'https://www.codechef.com',
  },
  [Judge.TOPCODER]: {
    value: Judge.TOPCODER,
    label: 'Topcoder',
    logo: 'https://images.juki.pub/c/topcoder-logo-color.png',
    url: 'https://www.topcoder.com',
  },
};

export const RUNNER_ACCEPTED_PROBLEM_MODES: ProblemMode[] = [
  ProblemMode.TOTAL,
  ProblemMode.SUBTASK,
  ProblemMode.PARTIAL,
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

export const PROBLEM_VERDICT: { [key in ProblemVerdict]: { value: ProblemVerdict, label: string, color: string } } = {
  [ProblemVerdict.NONE]: { value: ProblemVerdict.NONE, label: 'none', color: '#555555' },
  [ProblemVerdict.PENDING]: { value: ProblemVerdict.PENDING, label: 'pending', color: '#79B6FD' },
  [ProblemVerdict.HIDDEN]: { value: ProblemVerdict.HIDDEN, label: 'hidden', color: '#555555' },
  [ProblemVerdict.AC]: { value: ProblemVerdict.AC, label: 'accepted', color: '#43D787' },
  [ProblemVerdict.PE]: { value: ProblemVerdict.PE, label: 'presentation error', color: '#4EFA9D' },
  [ProblemVerdict.PA]: { value: ProblemVerdict.PA, label: 'partial accepted', color: '#4EFA9D' },
  [ProblemVerdict.CE]: { value: ProblemVerdict.CE, label: 'compilation error', color: '#FE9F9F' },
  [ProblemVerdict.RE]: { value: ProblemVerdict.RE, label: 'runtime error', color: '#FE9F9F' },
  [ProblemVerdict.TLE]: { value: ProblemVerdict.TLE, label: 'time limit exceed', color: '#FE9F9F' },
  [ProblemVerdict.MLE]: { value: ProblemVerdict.MLE, label: 'memory limit exceed', color: '#FE9F9F' },
  [ProblemVerdict.WA]: { value: ProblemVerdict.WA, label: 'wrong answer', color: '#FE9F9F' },
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

export const SUBMISSION_RUN_STATUS: { [key in SubmissionRunStatus]: { value: SubmissionRunStatus, label: string } } = {
  [SubmissionRunStatus.NONE]: { value: SubmissionRunStatus.NONE, label: 'none' }, // status
  [SubmissionRunStatus.RECEIVED]: { value: SubmissionRunStatus.RECEIVED, label: 'received' }, // state
  [SubmissionRunStatus.COMPILING]: { value: SubmissionRunStatus.COMPILING, label: 'compiling' }, // state
  [SubmissionRunStatus.COMPILED]: { value: SubmissionRunStatus.COMPILED, label: 'compiled' },  // status
  [SubmissionRunStatus.COMPILATION_ERROR]: { value: SubmissionRunStatus.COMPILATION_ERROR, label: 'compilation error' },  // status
  [SubmissionRunStatus.FETCHING_TEST_CASES]: { value: SubmissionRunStatus.FETCHING_TEST_CASES, label: 'fetching test cases' }, // state
  [SubmissionRunStatus.RUNNING_TEST_CASE]: { value: SubmissionRunStatus.RUNNING_TEST_CASE, label: 'running test case' }, // state
  [SubmissionRunStatus.RUNNING_TEST_CASES]: { value: SubmissionRunStatus.RUNNING_TEST_CASES, label: 'running test cases' }, // state
  [SubmissionRunStatus.RUNNING_SAMPLE_TEST_CASES]: {
    value: SubmissionRunStatus.RUNNING_SAMPLE_TEST_CASES,
    label: 'running sample test cases',
  }, // state
  [SubmissionRunStatus.EXECUTED_TEST_CASE]: { value: SubmissionRunStatus.EXECUTED_TEST_CASE, label: 'executed test case' }, // status
  [SubmissionRunStatus.FAILED_TEST_CASE]: { value: SubmissionRunStatus.FAILED_TEST_CASE, label: 'failed test case' }, // status
  [SubmissionRunStatus.JUDGING_TEST_CASE]: { value: SubmissionRunStatus.JUDGING_TEST_CASE, label: 'judging test case' }, // state
  [SubmissionRunStatus.GRADING]: { value: SubmissionRunStatus.GRADING, label: 'grading' }, // status
  [SubmissionRunStatus.FAILED]: { value: SubmissionRunStatus.FAILED, label: 'failed' },  // status
  [SubmissionRunStatus.COMPLETED]: { value: SubmissionRunStatus.COMPLETED, label: 'completed' },  // status
};

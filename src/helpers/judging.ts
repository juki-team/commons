import { CodeEditorTestCaseType, DataLogType, ProblemVerdict, SubmissionTestCaseType } from '../types';

export const getDataOfTestCase = (testCase: SubmissionTestCaseType, timeLimit: number, memoryLimit: number) => {
  
  const dataLogs = testCase?.log?.split('\n');
  const timeUsed = +dataLogs?.[0];
  const timeLimitExceeded = timeUsed > timeLimit;
  const memoryUsed = +dataLogs?.[1];
  const memoryLimitExceeded = memoryUsed > memoryLimit;
  const exitCode = dataLogs?.[2];
  const runtimeError = exitCode !== '0';
  
  return {
    timeUsed,
    timeLimitExceeded: timeLimitExceeded,
    memoryUsed,
    memoryLimitExceeded: memoryLimitExceeded,
    exitCode,
    runtimeError,
    failed: !!testCase?.log && (timeLimitExceeded || memoryLimitExceeded || runtimeError),
  };
};

export const getVerdictFromTestCase = (testCaseValue: CodeEditorTestCaseType, timeLimit: number, memoryLimit: number): {
  verdict: ProblemVerdict,
  timeUsed: number,
  memoryUsed: number,
  exitCode: string,
} => {
  const {
    timeLimitExceeded,
    memoryLimitExceeded,
    runtimeError,
    timeUsed,
    memoryUsed,
    exitCode,
  } = getDataOfTestCase(testCaseValue, timeLimit, memoryLimit);
  
  return {
    verdict: timeLimitExceeded
      ? ProblemVerdict.TLE
      : memoryLimitExceeded
        ? ProblemVerdict.MLE
        : runtimeError
          ? ProblemVerdict.RE
          : testCaseValue.out === testCaseValue.testOut
            ? ProblemVerdict.AC
            : testCaseValue.withPE && testCaseValue.out.split(' ').join('').split('\n').join('') === testCaseValue.testOut.split(' ').join('').split('\n').join('')
              ? ProblemVerdict.PE
              : ProblemVerdict.WA,
    timeUsed,
    memoryUsed,
    exitCode,
  };
}

type TestCaseVerdict = DataLogType & { verdict: ProblemVerdict };

export const mergeVerdicts = (first: TestCaseVerdict, second: TestCaseVerdict) => {
  
  let verdict = first.verdict;
  if (second.verdict === ProblemVerdict.RE) {
    verdict = ProblemVerdict.RE;
  } else if (second.verdict === ProblemVerdict.TLE && verdict != ProblemVerdict.RE) {
    verdict = ProblemVerdict.TLE;
  } else if (second.verdict === ProblemVerdict.MLE
    && verdict !== ProblemVerdict.TLE
    && verdict !== ProblemVerdict.RE) {
    verdict = ProblemVerdict.MLE;
  } else if (second.verdict === ProblemVerdict.WA
    && verdict !== ProblemVerdict.MLE
    && verdict !== ProblemVerdict.TLE
    && verdict !== ProblemVerdict.RE) {
    verdict = ProblemVerdict.WA;
  } else if (second.verdict === ProblemVerdict.PE
    && verdict !== ProblemVerdict.WA
    && verdict !== ProblemVerdict.MLE
    && verdict !== ProblemVerdict.TLE
    && verdict !== ProblemVerdict.RE) {
    verdict = ProblemVerdict.PE;
  } else if (second.verdict === ProblemVerdict.PA
    && verdict !== ProblemVerdict.PE
    && verdict !== ProblemVerdict.WA
    && verdict !== ProblemVerdict.MLE
    && verdict !== ProblemVerdict.TLE
    && verdict !== ProblemVerdict.RE) {
    verdict = ProblemVerdict.PA;
  } else if (second.verdict === ProblemVerdict.AC
    && verdict !== ProblemVerdict.PA
    && verdict !== ProblemVerdict.PE
    && verdict !== ProblemVerdict.WA
    && verdict !== ProblemVerdict.MLE
    && verdict !== ProblemVerdict.TLE
    && verdict !== ProblemVerdict.RE) {
    verdict = ProblemVerdict.AC;
  }
  return {
    maxTimeUsed: Math.max(first.timeUsed, second.timeUsed),
    maxMemoryUsed: Math.max(first.memoryUsed, second.memoryUsed),
    exitCode: first.exitCode || second.exitCode,
    totalTimeUsed: first.timeUsed + second.timeUsed,
    totalMemoryUsed: first.memoryUsed + second.memoryUsed,
    verdict,
  }
}

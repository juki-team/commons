import { CodeEditorTestCaseType, DataLogType, ProblemVerdict, SubmissionTestCaseType, TestCaseVerdict } from '../types';

export const getDataOfTestCase = (testCase: SubmissionTestCaseType, timeLimit: number, memoryLimit: number) => {
  
  const { timeUsed, memoryUsed, exitCode } = getDataLog(testCase?.log);
  const timeLimitExceeded = timeUsed > timeLimit;
  const memoryLimitExceeded = memoryUsed > memoryLimit;
  const runtimeError = exitCode !== 0;
  
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
  exitCode: number,
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
              : !testCaseValue.withPE && testCaseValue.out.split(' ').join('').split('\n').join('') === testCaseValue.testOut.split(' ').join('').split('\n').join('')
                ? ProblemVerdict.AC
                : ProblemVerdict.WA,
    timeUsed,
    memoryUsed,
    exitCode,
  };
};

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
    timeUsed: Math.max(first.timeUsed, second.timeUsed),
    memoryUsed: Math.max(first.memoryUsed, second.memoryUsed),
    exitCode: first.exitCode || second.exitCode,
    verdict,
  };
};

export const getDataLog = (log: any): DataLogType => {
  
  const lines = log?.split?.('\n') || [];
  let timeUsed = 0;
  let memoryUsed = 0;
  let exitCode = -1;
  
  if (lines.length > 4) {
    for (const line of lines) {
      if (line.startsWith('time:')) {
        timeUsed = +line.split(':')[1];
        if (Number.isNaN(timeUsed)) {
          timeUsed = 0;
        }
        timeUsed *= 1000;
      } else if (line.startsWith('max-rss:')) {
        memoryUsed = parseInt(line.split(':')[1], 10); // en KB
      } else if (line.startsWith('exitcode:')) {
        exitCode = parseInt(line.split(':')[1], 10);
      }
    }
  } else {
    timeUsed = +lines[0];
    memoryUsed = +lines[1];
    exitCode = +lines[2];
  }
  
  return {
    timeUsed: Number.isNaN(timeUsed) ? 0 : timeUsed,
    memoryUsed: Number.isNaN(memoryUsed) ? 0 : memoryUsed,
    exitCode: Number.isNaN(exitCode) ? -1 : exitCode,
  };
};

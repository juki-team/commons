import { ProblemVerdict, SubmissionRunStatus } from '../prisma/enums/index.js';
import type { CodeEditorTestCase, DataLog, SubmissionTestCase, TestCaseVerdict } from '../types/index.js';

export const getDataOfTestCase = (testCase: SubmissionTestCase, timeLimit: number, memoryLimit: number) => {
  const { timeUsed, memoryUsed, exitCode } = getDataLog(testCase?.log);
  const timeLimitExceeded = timeUsed > timeLimit;
  const memoryLimitExceeded = memoryUsed > memoryLimit;
  const runtimeError = exitCode !== 0;
  const compilationError = testCase?.status === SubmissionRunStatus.COMPILATION_ERROR;

  return {
    compilationError,
    timeUsed,
    timeLimitExceeded: timeLimitExceeded,
    memoryUsed,
    memoryLimitExceeded: memoryLimitExceeded,
    exitCode,
    runtimeError,
    failed: !!testCase?.log && (timeLimitExceeded || memoryLimitExceeded || runtimeError),
  };
};

function classifyOutput(testCaseValue: CodeEditorTestCase): ProblemVerdict {
  if (testCaseValue.out === testCaseValue.testOut) return ProblemVerdict.AC;
  const normalize = (s: string) => s.replaceAll(' ', '').replaceAll('\n', '');
  if (normalize(testCaseValue.out) === normalize(testCaseValue.testOut)) {
    return testCaseValue.withPE ? ProblemVerdict.PE : ProblemVerdict.AC;
  }
  return ProblemVerdict.WA;
}

function determineVerdict(
  testCaseValue: CodeEditorTestCase,
  compilationError: boolean,
  timeLimitExceeded: boolean,
  memoryLimitExceeded: boolean,
  runtimeError: boolean,
): ProblemVerdict {
  if (compilationError) return ProblemVerdict.CE;
  if (timeLimitExceeded) return ProblemVerdict.TLE;
  if (memoryLimitExceeded) return ProblemVerdict.MLE;
  if (runtimeError) return ProblemVerdict.RE;
  return classifyOutput(testCaseValue);
}

export const getVerdictFromTestCase = (
  testCaseValue: CodeEditorTestCase,
  timeLimit: number,
  memoryLimit: number,
): {
  verdict: ProblemVerdict;
  timeUsed: number;
  memoryUsed: number;
  exitCode: number;
} => {
  const { compilationError, timeLimitExceeded, memoryLimitExceeded, runtimeError, timeUsed, memoryUsed, exitCode } =
    getDataOfTestCase(testCaseValue, timeLimit, memoryLimit);

  return {
    verdict: determineVerdict(testCaseValue, compilationError, timeLimitExceeded, memoryLimitExceeded, runtimeError),
    timeUsed,
    memoryUsed,
    exitCode,
  };
};

const VERDICT_PRIORITY: ProblemVerdict[] = [
  ProblemVerdict.RE,
  ProblemVerdict.TLE,
  ProblemVerdict.MLE,
  ProblemVerdict.WA,
  ProblemVerdict.PE,
  ProblemVerdict.PA,
  ProblemVerdict.AC,
];

export const mergeVerdicts = (first: TestCaseVerdict, second: TestCaseVerdict) => {
  const firstRank = VERDICT_PRIORITY.indexOf(first.verdict);
  const secondRank = VERDICT_PRIORITY.indexOf(second.verdict);
  const verdict = secondRank !== -1 && (firstRank === -1 || secondRank < firstRank) ? second.verdict : first.verdict;
  return {
    timeUsed: Math.max(first.timeUsed, second.timeUsed),
    memoryUsed: Math.max(first.memoryUsed, second.memoryUsed),
    exitCode: first.exitCode || second.exitCode,
    verdict,
  };
};

function parseLineValue(line: string, prefix: string): number {
  return parseInt(line.slice(prefix.length + 1), 10);
}

function parseStructuredLog(lines: string[]): DataLog {
  let timeUsed = 0;
  let memoryUsed = 0;
  let exitCode = -1;
  for (const line of lines) {
    if (line.startsWith('time:')) {
      timeUsed = (Number.isNaN(+line.split(':')[1]) ? 0 : +line.split(':')[1]) * 1000;
    } else if (line.startsWith('max-rss:')) {
      memoryUsed = parseLineValue(line, 'max-rss');
    } else if (line.startsWith('exitcode:')) {
      exitCode = parseLineValue(line, 'exitcode');
    }
  }
  return { timeUsed, memoryUsed, exitCode };
}

function parseLegacyLog(lines: string[]): DataLog {
  return {
    timeUsed: +lines[0],
    memoryUsed: +lines[1],
    exitCode: +lines[2],
  };
}

export const getDataLog = (log: unknown): DataLog => {
  const lines = (log as '')?.split?.('\n') ?? [];
  const raw =
    lines.length > 4
      ? parseStructuredLog(lines)
      : lines.length >= 3
        ? parseLegacyLog(lines)
        : { timeUsed: 0, memoryUsed: 0, exitCode: -1 };
  return {
    timeUsed: Number.isNaN(raw.timeUsed) ? 0 : raw.timeUsed,
    memoryUsed: Number.isNaN(raw.memoryUsed) ? 0 : raw.memoryUsed,
    exitCode: Number.isNaN(raw.exitCode) ? -1 : raw.exitCode,
  };
};

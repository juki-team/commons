export type DataLogType = {
  timeUsed: number,
  memoryUsed: number,
  exitCode: number,
}

export type RunResult = DataLogType & {
  log: string,
  err: string,
  out: string
}

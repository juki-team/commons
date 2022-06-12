import { ErrorCode } from '../types/services';

export const ERROR: { [key in ErrorCode]: { value: ErrorCode, message: string, status: 500 | 400 | 401 | 403 | 404 | 405 } } = {
  // Http Errors
  [ErrorCode.ERR500]: { value: ErrorCode.ERR500, message: 'internal server error', status: 500 },
  [ErrorCode.ERR400]: { value: ErrorCode.ERR400, message: 'bad request', status: 400 },
  [ErrorCode.ERR401]: { value: ErrorCode.ERR401, message: 'unauthorized', status: 401 },
  [ErrorCode.ERR403]: { value: ErrorCode.ERR403, message: 'forbidden', status: 403 },
  [ErrorCode.ERR404]: { value: ErrorCode.ERR404, message: 'not found', status: 404 },
  [ErrorCode.ERR405]: { value: ErrorCode.ERR405, message: 'method not allowed', status: 405 },
  // UI general errors
  [ErrorCode.ERR9997]: { value: ErrorCode.ERR9997, message: 'aborted request', status: 400 },
  [ErrorCode.ERR9998]: { value: ErrorCode.ERR9998, message: 'error on response', status: 400 },
  [ErrorCode.ERR9999]: { value: ErrorCode.ERR9999, message: 'service no found', status: 400 },
  // User errors // 'unable update nickname yet'}, 'User not active'
  [ErrorCode.ERR0000]: { value: ErrorCode.ERR0000, message: 'internal server error on users service', status: 500 },
  [ErrorCode.ERR0001]: { value: ErrorCode.ERR0001, message: 'user not found', status: 400 },
  [ErrorCode.ERR0002]: { value: ErrorCode.ERR0002, message: 'user is reported', status: 400 },
  [ErrorCode.ERR0003]: { value: ErrorCode.ERR0003, message: 'user is archived', status: 400 },
  [ErrorCode.ERR0004]: { value: ErrorCode.ERR0004, message: 'user with email requested not found', status: 400 },
  [ErrorCode.ERR0005]: { value: ErrorCode.ERR0005, message: 'user with nickname requested not found', status: 400 },
  [ErrorCode.ERR0006]: { value: ErrorCode.ERR0006, message: 'user session not found', status: 401 },
  [ErrorCode.ERR0010]: { value: ErrorCode.ERR0010, message: 'the email is already registered', status: 400 },
  [ErrorCode.ERR0011]: { value: ErrorCode.ERR0011, message: 'the nickname is already taken', status: 400 },
  [ErrorCode.ERR0012]: { value: ErrorCode.ERR0012, message: 'incorrect password', status: 400 },
  // Problem Errors ERR01XX
  [ErrorCode.ERR0100]: { value: ErrorCode.ERR0100, message: 'internal server error on problems service', status: 500 },
  [ErrorCode.ERR0101]: { value: ErrorCode.ERR0101, message: 'problem not found', status: 400 },
  [ErrorCode.ERR0110]: { value: ErrorCode.ERR0110, message: 'problem mode not supported', status: 500 },
  [ErrorCode.ERR0111]: { value: ErrorCode.ERR0111, message: 'problem type not supported', status: 500 },
  [ErrorCode.ERR0112]: { value: ErrorCode.ERR0112, message: 'problem time limit must be a number', status: 500 },
  [ErrorCode.ERR0113]: { value: ErrorCode.ERR0113, message: 'problem memory limit must be number', status: 500 },
  // Contest Errors ERR02XX
  [ErrorCode.ERR0200]: { value: ErrorCode.ERR0200, message: 'internal server error on contests service', status: 500 },
  [ErrorCode.ERR0210]: { value: ErrorCode.ERR0210, message: 'contest not created', status: 500 },
  [ErrorCode.ERR0211]: { value: ErrorCode.ERR0211, message: 'contest not found', status: 500 },
  [ErrorCode.ERR0212]: { value: ErrorCode.ERR0212, message: 'contest not updated', status: 500 },
  [ErrorCode.ERR0213]: { value: ErrorCode.ERR0213, message: 'contest not deleted', status: 500 },
  [ErrorCode.ERR0214]: { value: ErrorCode.ERR0214, message: 'not allowed to create the contest', status: 400 },
  [ErrorCode.ERR0215]: { value: ErrorCode.ERR0215, message: 'not allowed to view the contest', status: 400 },
  [ErrorCode.ERR0216]: { value: ErrorCode.ERR0216, message: 'not allowed to updated the contest', status: 400 },
  [ErrorCode.ERR0217]: { value: ErrorCode.ERR0217, message: 'not allowed to deleted the contest', status: 400 },
  [ErrorCode.ERR0220]: { value: ErrorCode.ERR0220, message: 'not allowed to view contests', status: 400 },
  [ErrorCode.ERR0230]: { value: ErrorCode.ERR0230, message: 'scoreboard not created', status: 500 },
  [ErrorCode.ERR0231]: { value: ErrorCode.ERR0231, message: 'scoreboard not found', status: 500 },
  [ErrorCode.ERR0232]: { value: ErrorCode.ERR0232, message: 'scoreboard not updated', status: 500 },
  [ErrorCode.ERR0233]: { value: ErrorCode.ERR0233, message: 'scoreboard not deleted', status: 500 },
  [ErrorCode.ERR0234]: { value: ErrorCode.ERR0234, message: 'not allowed to create the scoreboard', status: 400 },
  [ErrorCode.ERR0235]: { value: ErrorCode.ERR0235, message: 'not allowed to view the scoreboard', status: 400 },
  [ErrorCode.ERR0236]: { value: ErrorCode.ERR0236, message: 'not allowed to update the scoreboard', status: 400 },
  [ErrorCode.ERR0237]: { value: ErrorCode.ERR0237, message: 'not allowed to delete the scoreboard', status: 400 },
  // Submission Errors ERR03XXX
  [ErrorCode.ERR0300]: { value: ErrorCode.ERR0300, message: 'internal server error on submissions service', status: 500 },
  [ErrorCode.ERR0301]: { value: ErrorCode.ERR0301, message: 'submission not found', status: 500 },
  [ErrorCode.ERR0302]: { value: ErrorCode.ERR0302, message: 'submission not created', status: 500 },
  [ErrorCode.ERR0303]: { value: ErrorCode.ERR0303, message: 'submission not updated', status: 500 },
  [ErrorCode.ERR0310]: { value: ErrorCode.ERR0310, message: 'source empty', status: 400 },
  [ErrorCode.ERR0311]: { value: ErrorCode.ERR0311, message: 'programming language not supported', status: 400 },
  [ErrorCode.ERR0321]: { value: ErrorCode.ERR0321, message: 'not allowed submit the problem in the contest', status: 400 },
  [ErrorCode.ERR0331]: { value: ErrorCode.ERR0331, message: 'judgement unavailable', status: 400 },
  // Utils Errors ERR04XX
  [ErrorCode.ERR0400]: { value: ErrorCode.ERR0400, message: 'internal server error on utils services', status: 500 },
  [ErrorCode.ERR0410]: { value: ErrorCode.ERR0410, message: 'empty image', status: 400 },
  [ErrorCode.ERR0420]: { value: ErrorCode.ERR0420, message: '', status: 400 }, // codes
  [ErrorCode.ERR0421]: { value: ErrorCode.ERR0421, message: 'compilation failed', status: 400 }, // codes
  [ErrorCode.ERR0430]: { value: ErrorCode.ERR0430, message: '', status: 400 }, // files
  [ErrorCode.ERR0440]: { value: ErrorCode.ERR0440, message: 'the email could not be sent', status: 400 }, // mails
  // Team Errors ERR06XX
  [ErrorCode.ERR0600]: { value: ErrorCode.ERR0600, message: 'internal server error on teams service', status: 500 },
  [ErrorCode.ERR0601]: { value: ErrorCode.ERR0601, message: 'team not found', status: 400 },
  [ErrorCode.ERR0602]: { value: ErrorCode.ERR0602, message: 'team is reported', status: 400 },
  [ErrorCode.ERR0603]: { value: ErrorCode.ERR0603, message: 'team is archived', status: 400 },
};

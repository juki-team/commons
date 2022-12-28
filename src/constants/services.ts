import { ErrorCode } from '../types';

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
  // USER ERRORS ERR99XX
  [ErrorCode.ERR9900]: { value: ErrorCode.ERR0000, message: 'internal server error on company service', status: 500 },
  // User server errors
  [ErrorCode.ERR9910]: { value: ErrorCode.ERR9910, message: 'company not created', status: 500 },
  [ErrorCode.ERR9911]: { value: ErrorCode.ERR9911, message: 'company not found', status: 500 },
  [ErrorCode.ERR9912]: { value: ErrorCode.ERR9912, message: 'company not updated', status: 500 },
  [ErrorCode.ERR9913]: { value: ErrorCode.ERR9913, message: 'company not deleted', status: 500 },
  // USER ERRORS ERR00XX
  [ErrorCode.ERR0000]: { value: ErrorCode.ERR0000, message: 'internal server error on users service', status: 500 },
  // User server errors
  [ErrorCode.ERR0010]: { value: ErrorCode.ERR0010, message: 'user not created', status: 500 },
  [ErrorCode.ERR0011]: { value: ErrorCode.ERR0011, message: 'user not found', status: 500 },
  [ErrorCode.ERR0012]: { value: ErrorCode.ERR0012, message: 'user not updated', status: 500 },
  [ErrorCode.ERR0013]: { value: ErrorCode.ERR0013, message: 'user not deleted', status: 500 },
  // User user permission error
  [ErrorCode.ERR0014]: { value: ErrorCode.ERR0014, message: 'not allowed to create the user', status: 400 },
  [ErrorCode.ERR0015]: { value: ErrorCode.ERR0015, message: 'not allowed to view the user', status: 400 },
  [ErrorCode.ERR0016]: { value: ErrorCode.ERR0016, message: 'not allowed to updated the user', status: 400 },
  [ErrorCode.ERR0017]: { value: ErrorCode.ERR0017, message: 'not allowed to deleted the user', status: 400 },
  // User others permissions errors
  [ErrorCode.ERR0018]: { value: ErrorCode.ERR0018, message: 'user is reported', status: 400 },
  [ErrorCode.ERR0019]: { value: ErrorCode.ERR0019, message: 'user is archived', status: 400 },
  [ErrorCode.ERR0020]: { value: ErrorCode.ERR0020, message: 'user with email requested not found', status: 400 },
  [ErrorCode.ERR0021]: { value: ErrorCode.ERR0021, message: 'user with nickname requested not found', status: 400 },
  [ErrorCode.ERR0022]: { value: ErrorCode.ERR0022, message: 'the email is already registered', status: 400 },
  [ErrorCode.ERR0023]: { value: ErrorCode.ERR0023, message: 'the nickname is already taken', status: 400 },
  [ErrorCode.ERR0024]: { value: ErrorCode.ERR0024, message: 'incorrect password', status: 400 },
  // User sessions errors
  [ErrorCode.ERR0050]: { value: ErrorCode.ERR0050, message: 'user session not created', status: 500 },
  [ErrorCode.ERR0051]: { value: ErrorCode.ERR0051, message: 'user session not found', status: 500 },
  [ErrorCode.ERR0052]: { value: ErrorCode.ERR0052, message: 'user session not updated', status: 500 },
  [ErrorCode.ERR0053]: { value: ErrorCode.ERR0053, message: 'user session not deleted', status: 500 },
  // PROBLEM ERRORS ERR01XX
  [ErrorCode.ERR0100]: { value: ErrorCode.ERR0100, message: 'internal server error on problems service', status: 500 },
  // Problem server errors
  [ErrorCode.ERR0110]: { value: ErrorCode.ERR0110, message: 'problem not created', status: 500 },
  [ErrorCode.ERR0111]: { value: ErrorCode.ERR0111, message: 'problem not found', status: 500 },
  [ErrorCode.ERR0112]: { value: ErrorCode.ERR0112, message: 'problem not updated', status: 500 },
  [ErrorCode.ERR0113]: { value: ErrorCode.ERR0113, message: 'problem not deleted', status: 500 },
  // Problem user permission error
  [ErrorCode.ERR0114]: { value: ErrorCode.ERR0114, message: 'not allowed to create the problem', status: 400 },
  [ErrorCode.ERR0115]: { value: ErrorCode.ERR0115, message: 'not allowed to view the problem', status: 400 },
  [ErrorCode.ERR0116]: { value: ErrorCode.ERR0116, message: 'not allowed to updated the problem', status: 400 },
  [ErrorCode.ERR0117]: { value: ErrorCode.ERR0117, message: 'not allowed to deleted the problem', status: 400 },
  // Problem others permissions errors
  [ErrorCode.ERR0118]: { value: ErrorCode.ERR0118, message: 'problem mode not supported', status: 500 },
  [ErrorCode.ERR0119]: { value: ErrorCode.ERR0119, message: 'problem type not supported', status: 500 },
  [ErrorCode.ERR0120]: { value: ErrorCode.ERR0120, message: 'problem time limit must be a number', status: 500 },
  [ErrorCode.ERR0121]: { value: ErrorCode.ERR0121, message: 'problem memory limit must be number', status: 500 },
  [ErrorCode.ERR0122]: { value: ErrorCode.ERR0122, message: 'test case file empty', status: 400 },
  
  // Contest Errors ERR02XX
  [ErrorCode.ERR0200]: { value: ErrorCode.ERR0200, message: 'internal server error on contests service', status: 500 },
  // Contest Server Error
  [ErrorCode.ERR0210]: { value: ErrorCode.ERR0210, message: 'contest not created', status: 500 },
  [ErrorCode.ERR0211]: { value: ErrorCode.ERR0211, message: 'contest not found', status: 500 },
  [ErrorCode.ERR0212]: { value: ErrorCode.ERR0212, message: 'contest not updated', status: 500 },
  [ErrorCode.ERR0213]: { value: ErrorCode.ERR0213, message: 'contest not deleted', status: 500 },
  // Contest User Permission error
  [ErrorCode.ERR0214]: { value: ErrorCode.ERR0214, message: 'not allowed to create the contest', status: 400 },
  [ErrorCode.ERR0215]: { value: ErrorCode.ERR0215, message: 'not allowed to view the contest', status: 400 },
  [ErrorCode.ERR0216]: { value: ErrorCode.ERR0216, message: 'not allowed to updated the contest', status: 400 },
  [ErrorCode.ERR0217]: { value: ErrorCode.ERR0217, message: 'not allowed to deleted the contest', status: 400 },
  // Contest Others permissions errors
  [ErrorCode.ERR0218]: { value: ErrorCode.ERR0218, message: 'not allowed to register to the contest', status: 400 },
  [ErrorCode.ERR0219]: { value: ErrorCode.ERR0219, message: 'is already registered', status: 400 },
  [ErrorCode.ERR0220]: { value: ErrorCode.ERR0220, message: 'not allowed to view contests', status: 400 },
  
  [ErrorCode.ERR0230]: { value: ErrorCode.ERR0230, message: 'scoreboard not created', status: 500 },
  [ErrorCode.ERR0231]: { value: ErrorCode.ERR0231, message: 'scoreboard not found', status: 500 },
  [ErrorCode.ERR0232]: { value: ErrorCode.ERR0232, message: 'scoreboard not updated', status: 500 },
  [ErrorCode.ERR0233]: { value: ErrorCode.ERR0233, message: 'scoreboard not deleted', status: 500 },
  [ErrorCode.ERR0234]: { value: ErrorCode.ERR0234, message: 'not allowed to create the scoreboard', status: 400 },
  [ErrorCode.ERR0235]: { value: ErrorCode.ERR0235, message: 'not allowed to view the scoreboard', status: 400 },
  [ErrorCode.ERR0236]: { value: ErrorCode.ERR0236, message: 'not allowed to update the scoreboard', status: 400 },
  [ErrorCode.ERR0237]: { value: ErrorCode.ERR0237, message: 'not allowed to delete the scoreboard', status: 400 },
  
  [ErrorCode.ERR0240]: { value: ErrorCode.ERR0240, message: 'clarification not created', status: 500 },
  [ErrorCode.ERR0241]: { value: ErrorCode.ERR0241, message: 'clarification not found', status: 500 },
  [ErrorCode.ERR0242]: { value: ErrorCode.ERR0242, message: 'clarification not updated', status: 500 },
  [ErrorCode.ERR0243]: { value: ErrorCode.ERR0243, message: 'clarification not deleted', status: 500 },
  [ErrorCode.ERR0244]: { value: ErrorCode.ERR0244, message: 'not allowed to submit clarification', status: 400 },
  [ErrorCode.ERR0245]: { value: ErrorCode.ERR0245, message: 'not allowed to view clarification', status: 400 },
  [ErrorCode.ERR0246]: { value: ErrorCode.ERR0246, message: 'not allowed to update clarification', status: 400 },
  [ErrorCode.ERR0247]: { value: ErrorCode.ERR0247, message: 'not allowed to delete clarification', status: 400 },
  
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

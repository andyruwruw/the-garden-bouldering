// Local Imports
import { Handler } from '../handler';
import { DeleteAttemptHandler } from './delete-attempt-handler';
import { LogAttemptHandler } from './log-attempt-handler';
import { UpdateAttemptHandler } from './update-attempt-handler';

export default {
  'delete': DeleteAttemptHandler,
  'log': LogAttemptHandler,
  'update': UpdateAttemptHandler,
} as Record<string, typeof Handler>;

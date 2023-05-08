// Local Imports
import { Handler } from '../handler';
import { DeleteInterestHandler } from './delete-interest-handler';
import { LogInterestHandler } from './log-interest-handler';
import { UpdateInterestHandler } from './update-interest-handler';

export default {
  'delete': DeleteInterestHandler,
  'log': LogInterestHandler,
  'update': UpdateInterestHandler,
} as Record<string, typeof Handler>;

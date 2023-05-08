// Local Imports
import { Handler } from '../handler';
import { DeleteSendHandler } from './delete-send-handler';
import { LogSendHandler } from './log-send-handler';
import { UpdateSendHandler } from './update-send-handler';

export default {
  'delete': DeleteSendHandler,
  'log': LogSendHandler,
  'update': UpdateSendHandler,
} as Record<string, typeof Handler>;

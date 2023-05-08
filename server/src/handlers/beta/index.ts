// Local Imports
import { Handler } from '../handler';
import { DeleteBetaHandler } from './delete-beta-handler';
import { PostBetaHandler } from './post-beta-handler';
import { UpdateBetaHandler } from './update-beta-handler';

export default {
  'delete': DeleteBetaHandler,
  'post': PostBetaHandler,
  'update': UpdateBetaHandler,
} as Record<string, typeof Handler>;

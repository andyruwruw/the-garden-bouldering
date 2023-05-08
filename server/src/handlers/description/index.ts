// Local Imports
import { Handler } from '../handler';
import { DeleteDescriptionandler } from './delete-description-handler';
import { PostDescriptionHandler } from './post-description-handler';
import { UpdateDescriptionHandler } from './update-description-handler';

export default {
  'delete': DeleteDescriptionandler,
  'post': PostDescriptionHandler,
  'update': UpdateDescriptionHandler,
} as Record<string, typeof Handler>;

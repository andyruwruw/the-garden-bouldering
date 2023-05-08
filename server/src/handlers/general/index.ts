// Local Imports
import { Handler } from '../handler';
import { DeleteCommentHandler } from './delete-comment-handler';
import { DeleteDescriptionandler } from './delete-description-handler';
import { LinkItemsHandler } from './link-items-handler';
import { PostCommentHandler } from './post-comment-handler';
import { PostDescriptionHandler } from './post-description-handler';
import { SearchHandler } from './search-handler';
import { UpdateCommentHandler } from './update-comment-handler';
import { UpdateDataHandler } from './update-data-handler';
import { UpdateDescriptionHandler } from './update-description-handler';

export default {
  'delete-comment': DeleteCommentHandler,
  'delete-description': DeleteDescriptionandler,
  'link': LinkItemsHandler,
  'comment': PostCommentHandler,
  'description': PostDescriptionHandler,
  'search': SearchHandler,
  'update': UpdateDataHandler,
  'update-comment': UpdateCommentHandler,
  'update-description': UpdateDescriptionHandler,
} as Record<string, typeof Handler>;

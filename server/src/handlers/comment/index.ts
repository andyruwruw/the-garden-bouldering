// Local Imports
import { Handler } from '../handler';
import { DeleteCommentHandler } from './delete-comment-handler';
import { PostCommentHandler } from './post-comment-handler';
import { UpdateCommentHandler } from './update-comment-handler';

export default {
  'delete': DeleteCommentHandler,
  'post': PostCommentHandler,
  'update': UpdateCommentHandler,
} as Record<string, typeof Handler>;

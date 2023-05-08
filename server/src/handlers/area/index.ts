// Local Imports
import { Handler } from '../handler';
import { ApproveUpdateAreaRequestHandler } from './approve-update-area-request-handler';
import { DeleteAreaHandler } from './delete-area-handler';
import { GetAreaHandler } from './get-area-handler';
import { GetAreasHandler } from './get-areas-handler';
import { GetCragAreasHandler } from './get-crag-areas-handler';
import { UpdateAreaHandler } from './update-area-handler';
import { UpdateAreaStatusHandler } from './update-area-status-handler';

export default {
  'approve-request': ApproveUpdateAreaRequestHandler,
  'delete': DeleteAreaHandler,
  'get': GetAreaHandler,
  'get-many': GetAreasHandler,
  'get-crag': GetCragAreasHandler,
  'update': UpdateAreaHandler,
  'status': UpdateAreaStatusHandler,
} as Record<string, typeof Handler>;

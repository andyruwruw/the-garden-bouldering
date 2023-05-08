// Local Imports
import { Handler } from '../handler';
import { ApproveUpdateBoulderRequestHandler } from './approve-update-boulder-request-handler';
import { DeleteBoulderHandler } from './delete-boulder-handler';
import { GetAreaBouldersHandler } from './get-area-boulders-handler';
import { GetBoulderHandler } from './get-boulder-handler';
import { GetBouldersHandler } from './get-boulders-handler';
import { GetCragBouldersHandler } from './get-crag-boulders-handler';
import { GetRandomBoulderHandler } from './get-random-boulder-handler';
import { UpdateBoulderHandler } from './update-boulder-handler';
import { UpdateBoulderStatusHandler } from './update-boulder-status-handler';

export default {
  'approve-request': ApproveUpdateBoulderRequestHandler,
  'delete': DeleteBoulderHandler,
  'get-area': GetAreaBouldersHandler,
  'get': GetBoulderHandler,
  'get-many': GetBouldersHandler,
  'get-crag': GetCragBouldersHandler,
  'random': GetRandomBoulderHandler,
  'update': UpdateBoulderHandler,
  'status': UpdateBoulderStatusHandler,
} as Record<string, typeof Handler>;

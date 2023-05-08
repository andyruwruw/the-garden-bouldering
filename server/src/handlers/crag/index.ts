// Local Imports
import { Handler } from '../handler';
import { ApproveUpdateCragRequestHandler } from './approve-update-crag-request-handler';
import { DeleteCragHandler } from './delete-crag-handler';
import { GetCragHandler } from './get-crag-handler';
import { GetCragsHandler } from './get-crags-handler';
import { UpdateCragHandler } from './update-crag-handler';
import { UpdateCragStatusHandler } from './update-crag-status-handler';

export default {
  'approve-request': ApproveUpdateCragRequestHandler,
  'delete': DeleteCragHandler,
  'get': GetCragHandler,
  'get-many': GetCragsHandler,
  'update': UpdateCragHandler,
  'status': UpdateCragStatusHandler,
} as Record<string, typeof Handler>;

// Local Imports
import { Handler } from '../handler';
import { ApproveUpdateRouteRequestHandler } from './approve-update-route-request-handler';
import { DeleteRouteHandler } from './delete-route-handler';
import { GetRandomRouteHandler } from './get-random-route-handler';
import { GetRouteHandler } from './get-route-handler';
import { GetRoutesHandler } from './get-routes-handler';
import { UpdateRouteHandler } from './update-route-handler';
import { UpdateRouteStatusHandler } from './update-route-status-handler';

export default {
  'approve-request': ApproveUpdateRouteRequestHandler,
  'delete': DeleteRouteHandler,
  'get': GetRouteHandler,
  'get-many': GetRoutesHandler,
  'random': GetRandomRouteHandler,
  'update': UpdateRouteHandler,
  'status': UpdateRouteStatusHandler,
} as Record<string, typeof Handler>;

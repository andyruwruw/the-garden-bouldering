// Local Imports
import { Environment } from './environment';

// Packages
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../types';
import { NOOP } from '../config';

/**
 * Does CORS stuff.
 *
 * @param {ClimbingRequest} req Incoming request.
 * @param {ClimbingResponse} res Outgoing response.
 */
export const handleCors = (
  req: ClimbingRequest,
  res: ClimbingResponse,
  next: (req: ClimbingRequest, res: ClimbingResponse) => null | void = NOOP,
): void => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    Environment.getOrigin(),
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );

  next(req, res);
};

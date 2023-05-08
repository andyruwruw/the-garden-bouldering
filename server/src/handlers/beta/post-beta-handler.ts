// Local Imports
import { Handler as AbstractHandler } from '../handler';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../../types';

/**
 * Posts beta for a route.
 */
export class PostBetaHandler extends AbstractHandler {
  /**
   * Handles the request.
   *
   * @param {ClimbingRequest} req Incoming request.
   * @param {ClimbingResponse} res Response.
   * @returns {Promise<void | ClimbingResponse>} Outgoing response.
   */
  async execute(
    req: ClimbingRequest,
    res: ClimbingResponse,
  ): Promise<void | ClimbingResponse> {
  }
}

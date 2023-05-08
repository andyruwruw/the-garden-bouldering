// Local Imports
import { Handler as AbstractHandler } from '../handler';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../../types';

/**
 * Retrieves boulders for a given area.
 */
export class GetAreaBouldersHandler extends AbstractHandler {
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

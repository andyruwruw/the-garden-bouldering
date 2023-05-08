// Local Imports
import { Handler as AbstractHandler } from '../handler';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../../types';

/**
 * Updates a boulder's status.
 */
export class UpdateBoulderStatusHandler extends AbstractHandler {
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

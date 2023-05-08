// Local Imports
import {
  MESSAGE_HANDLER_PARAMETER_MISSING,
  MESSAGE_UNAUTHORIZED,
} from '../../config/messages';
import { Handler as AbstractHandler } from '../handler';
import { validate } from '../../helpers/authentication';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../../types';

/**
 * Searchs for areas, routes or users.
 */
export class SearchHandler extends AbstractHandler {
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
    // Check the user's current session.
    const user = await validate(
      req,
      AbstractHandler.database,
    );

    if (!user) {
      return res.status(401).send({
        error: MESSAGE_UNAUTHORIZED,
      });
    }

    // If the query for search is missing.
    if (!('query' in req.query)) {
      return res.status(400).send({
        error: MESSAGE_HANDLER_PARAMETER_MISSING('query', 'search'),
      });
    }

    const promises = [];

    promises.push(AbstractHandler.database.route?.find({
      name: req.query.query,
    }));

    promises.push(AbstractHandler.database.area?.find({
      name: req.query.query,
    }));

    promises.push(AbstractHandler.database.user?.find({
      name: req.query.query,
    }));

    await Promise.all(promises);

    return res.status(201).send({
      routes: promises[0],

      areas: promises[1],

      users: promises[2],
    });
  }
}

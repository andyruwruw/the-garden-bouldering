// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';

// Local Imports
import { handleCors } from '../../src/helpers/cors';
import ROUTES from '../../src/handlers';

/**
 * Routes all incoming Vercel Serverless Function requests to the appropriate endpoint.
 *
 * @param {VercelRequest} req Incoming request.
 * @param {VercelResponse} res Outgoing response.
 */
export default async function (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  /**
   * ID of endpoint.
   */
  const {
    item,
    action,
  } = req.query;

  /**
   * Deal with pesky cors.
   */
  handleCors(
    req,
    res,
  );

  /**
   * Retrieve desired endpoint.
   */
  const handler = await new ROUTES[item as string][action as string]();

  /**
   * Execute function.
   */
  await handler.execute(
    req,
    res,
  );
}
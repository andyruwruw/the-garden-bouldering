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
  // ID of endpoint.
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

  if (req.method === 'OPTIONS') {
    res.send(204);
    return;
  }

  // Instantiate handler.
  const handler = new ROUTES[item as string][action as string]();
  await handler.connectDatabase();

  // Execute function.
  await handler.execute(
    req,
    res,
  );
}

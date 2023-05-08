// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/send';

const router = Router();

/**
 * Deletes a send.
 */
router.delete('/delete', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['delete']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Logs a send for a route by a climber.
 */
router.post('/log', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['log']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Updates send.
 */
router.put('/update', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['update']();

  await handler.execute(
    req,
    res,
  );
});

export default router;

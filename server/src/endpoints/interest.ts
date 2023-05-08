// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/interest';

const router = Router();

/**
 * Deletes interest in a route.
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
 * Logs a user's interest in a problem.
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
 * Updates interest in a route.
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

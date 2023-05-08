// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/attempt';

const router = Router();

/**
 * Deletes an attempt.
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
 * Logs an attempt on a route for a user.
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
 * Updates an attempt.
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

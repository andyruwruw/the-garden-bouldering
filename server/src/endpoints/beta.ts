// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/beta';

const router = Router();

/**
 * Deletes beta.
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
 * Posts beta for a route.
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
 * Updates beta.
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

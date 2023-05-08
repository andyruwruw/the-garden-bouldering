// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/general';

const router = Router();

/**
 * Links separate items.
 */
router.put('/link', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['link']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Searchs for areas, routes or users.
 */
router.get('/search', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['search']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Updates data with route guides.
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

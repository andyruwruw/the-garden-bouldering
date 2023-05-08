// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/description';

const router = Router();

/**
 * Deletes a description.
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
 * Posts a description for an item.
 */
router.post('/post', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['post']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Updates a description.
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

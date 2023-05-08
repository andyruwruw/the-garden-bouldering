// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/comment';

const router = Router();

/**
 * Deletes a comment.
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
 * Posts a new comment.
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
 * Updates a comment.
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

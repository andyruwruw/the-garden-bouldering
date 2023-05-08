// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/crag';

const router = Router();

/**
 * Approves an update to a crag.
 */
router.post('/approve-request', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['approve-request']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Deletes a crag.
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
 * Retrieves a crag.
 */
router.get('/get', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['get']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Retrieves crags.
 */
router.get('/get-many', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['get-many']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Updates a crag.
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

/**
 * Updates a crag's status.
 */
router.post('/status', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['status']();

  await handler.execute(
    req,
    res,
  );
});

export default router;

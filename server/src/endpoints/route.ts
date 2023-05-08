// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/route';

const router = Router();

/**
 * Approves an update to a route.
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
 * Deletes a route.
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
 * Retrieves a route.
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
 * Retrieves routes.
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
 * Retrieves a random route.
 */
router.get('/random', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['random']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Updates a route.
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
 * Updates a route's status.
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

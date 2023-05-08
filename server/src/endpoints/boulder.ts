// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/boulder';

const router = Router();

/**
 * Approves an update to a boulder.
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
 * Deletes a boulder.
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
 * Retrieves boulders for a given area.
 */
router.get('/get-area', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['get-area']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Retrieves a boulder.
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
 * Retrieves boulders.
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
 * Retrieves boulders for a given crag.
 */
router.get('/get-crag', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['get-crag']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Retrieves a random boulder.
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
 * Updates a boulder.
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
 * Updates a boulder's status.
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

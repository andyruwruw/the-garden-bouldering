// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/area';

const router = Router();

/**
 * Approves an update to an area.
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
 * Deletes an area.
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
 * Retrieves an area.
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
 * Retrieves areas.
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
 * Retrieves a areas for a given crag.
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
 * Updates an area's information.
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
 * Updates an area's status.
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

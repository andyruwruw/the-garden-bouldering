// Packages
import {
  Request,
  Response,
  Router,
} from 'express';

// Local Imports
import { handleCors } from '../helpers/cors';
import handlers from '../handlers/article';

const router = Router();

/**
 * Deletes an article.
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
 * Retrieves articles for a given area.
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
 * Retrieves an article.
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
 * Retrieves articles.
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
 * Retrieves articles for a given boulder.
 */
router.get('/get-boulder', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['get-boulder']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Retrieves articles for a given crag.
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
 * Retrieves articles for a given route.
 */
router.get('/get-route', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['get-route']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Posts an article.
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
 * Updates an article.
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

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
 * Retrieves a user.
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
 * Logs a user in.
 */
router.put('/login', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['login']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Logs out a user.
 */
router.delete('/logout', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['logout']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Registers a new user.
 */
router.post('/register', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['register']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Deletes a user.
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
 * Bans a user.
 */
router.put('/ban', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['ban']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Removes ban from a user.
 */
router.put('/unban', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['unban']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Promotes a user to an admin.
 */
router.put('/promote', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['promote']();

  await handler.execute(
    req,
    res,
  );
});

/**
 * Removes admin privilages.
 */
router.put('/demote', handleCors, async (
  req: Request,
  res: Response,
) => {
  const handler = await new handlers['demote']();

  await handler.execute(
    req,
    res,
  );
});

export default router;

// Packages
import * as bcrypt from 'bcrypt';

// Local Imports
import {
  decodeToken,
  getCookie,
} from './cookies';
import { Database } from '../database/database';
import { SALT_WORK_FACTOR } from '../config';

// Types
import {
  User,
  ClimbingRequest,
} from '../types';

/**
 * Salts and hashes passwords.
 *
 * @param {string} password Password to be salted and hashed.
 * @returns {Promise<string>} Hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

  return bcrypt.hash(
    password,
    salt,
  );
};

/**
 * Validates an incoming password against a vaild password.
 *
 * @param {string} valid Stored password.
 * @param {string} subject Password to test.
 * @returns {Promise<boolean>} Whether the passwords match.
 */
export const comparePassword = async (
  valid: string,
  subject: string,
): Promise<boolean> => {
  return bcrypt.compare(
    subject,
    valid,
  );
};

/**
 * Validates a request and returns user.
 *
 * @param {ClimbingRequest} req Incoming request.
 * @param {Database} database Database instance.
 * @returns {Promise<User | null>} User if valid, null otherwise.
 */
export const validate = async (
  req: ClimbingRequest,
  database: Database,
  offeredCookie: string | undefined = undefined,
): Promise<User | null> => {
  let cookie = getCookie(req);
  if (offeredCookie) {
    cookie = offeredCookie;
  }
  if ('body' in req && 'cookie' in req.body) {
    cookie = req.body.cookie;
  }
  if ('query' in req && 'cookie' in req.query) {
    cookie = req.query.cookie;
  }

  if (!cookie || cookie === '') {
    return null;
  }

  const token = decodeToken(cookie);

  if (!token) {
    return null;
  }

  const { id } = token;

  if (!id || id === '') {
    return null;
  }

  if (database.user !== null && database.user !== undefined) {
    return database.user.findOne({
      _id: id,
    }, {});
  }

  return null;
};

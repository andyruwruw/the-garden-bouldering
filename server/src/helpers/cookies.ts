// Packages
import * as jsonwebtoken from 'jsonwebtoken';

// Local Imports
import { COOKIE_NAME } from '../config';
import { Environment } from './environment';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../types';

/**
 * Retrieves a cookie from requests.
 *
 * @param {ClimbingRequest} req Incoming request.
 * @returns {string | null} Cookie value.
 */
export const getCookie = (req: ClimbingRequest): string | null => {
  if (!(COOKIE_NAME in req.cookies)) {
    return null;
  }
  return req.cookies[COOKIE_NAME];
};

/**
 * Attatches a cookie to an outgoing response.
 *
 * @param {ClimbingResponse} res Outgoing response.
 * @param {string} cookie Cookie to be attached.
 */
export const attatchCookie = (
  res: ClimbingResponse,
  cookie: string,
): void => {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=${cookie}`);
};

/**
 * Generates a signed token.
 *
 * @param {any} data Data to sign.
 * @param {string} [expires = '24h'] When the token expires.
 * @returns {string} Signed token.
 */
export const generateToken = (
  data: any,
  expires = '24h',
): string => {
  return jsonwebtoken.sign(
    data,
    Environment.getSecret(),
    {
      expiresIn: expires,
    },
  );
};

/**
 * Decodes a signed token.
 *
 * @param {string} token Signed token.
 * @returns {any} Data from token.
 */
export const decodeToken = (token: string): any => {
  try {
    return jsonwebtoken.verify(
      token,
      Environment.getSecret(),
    );
  } catch (error) {
    return null;
  }
};

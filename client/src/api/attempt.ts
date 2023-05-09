// Local Imports
import request from './request';

// Types
import {
  Article,
  RequestConfirmation,
  SendType,
} from '../types';

/**
 * Logs an attempt on a route for a user.
 *
 * @param {string} route Route the attempt was made on.
 * @param {number} attempts Number of attempts taken.
 * @param {SendType} type Type of attempts made.
 * @param {string} date Date of teh attempts.
 * @param {string} notes Notes of the attempts.
 * @returns {Promise<Attempt | RequestConfirmation>} Promise of the action.
 */
const logAttempt = async (
  route: string,
  attempts: number,
  type: SendType,
  date: string,
  notes = '',
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/attempt/log', {
      route,
      attempts,
      type,
      date,
      notes,
    });

    if (response.status === 200) {
      return response.data.attempt;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
}

/**
 * Deletes an attempt.
 *
 * @param {string} id ID of the attempt. 
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteAttempt = async (id: string): Promise<Article | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.delete(`/attempt/delete?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Updates an attempt.
 *
 * @param {string} id Id of the attempt.
 * @param {string} route Route the attempt was made on.
 * @param {number} attempts Number of attempts taken.
 * @param {SendType} type Type of attempts made.
 * @param {string} date Date of teh attempts.
 * @param {string} notes Notes of the attempts.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const updateAttempt = async (
  id: string,
  attempts: number,
  type: SendType,
  date: string,
  notes = '',
): Promise<Article[] | null> => {
  try {
    const response = await request.put('/attempt/update', {
      id,
      attempts,
      type,
      date,
      notes,
    });

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
}

export default {
  logAttempt,
  deleteAttempt,
  updateAttempt,
};

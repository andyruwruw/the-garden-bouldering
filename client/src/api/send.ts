// Local Imports
import request from './request';

// Types
import {
  ItemLink,
  RequestConfirmation,
  SendType,
} from '../types';

/**
 * Logs a new send.
 *
 * @param {number} attempts Number of attempts.
 * @param {number} laps Laps on the boulder.
 * @param {SendType} type Type of send.
 * @param {string} notes Notes about send.
 * @param {string} date Date the send happened.
 * @returns {Promise<Comment | RequestConfirmation>} Promise of the action.
 */
const logSend = async (
  attempts: number,
  laps: number,
  type: SendType,
  notes: string,
  date: string,
): Promise<Comment | RequestConfirmation> => {
  try {
    const response = await request.post('/comment/post', {
      attempts,
      laps,
      type,
      notes,
      date,
    });

    if (response.status === 200) {
      return response.data.send;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Deletes a send.
 *
 * @param {string} id ID of the comment.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteSend = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.delete(`/comment/delete?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Updates a send.
 *
 * @param {string} id ID of send.
 * @param {number} attempts Number of attempts.
 * @param {number} laps Laps on the boulder.
 * @param {SendType} type Type of send.
 * @param {string} notes Notes about send.
 * @param {string} date Date the send happened.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const updateSend = async (
  id: string,
  attempts: number,
  laps: number,
  type: SendType,
  notes: string,
  date: string,
): Promise<Comment | null> => {
  try {
    const response = await request.put('/comment/update', {
      id,
      attempts,
      laps,
      type,
      notes,
      date,
    });

    if (response.status === 200) {
      return response.data.send;
    }
  } catch (error) {
    return null;
  }
  return null;
};

export default {
  logSend,
  deleteSend,
  updateSend,
};

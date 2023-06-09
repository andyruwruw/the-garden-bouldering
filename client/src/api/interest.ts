// Local Imports
import request from './request';

// Types
import {
  Interest,
  InterestType,
  LinkType,
  RequestConfirmation,
} from '../types';

/**
 * Logs a user's interest in a problem.
 *
 * @param {string} route Route in interest.
 * @param {InterestType} type Type of interest.
 * @returns {Promise<Interest | RequestConfirmation>} Promise of the action.
 */
const logInterest = async (
  of: LinkType,
  ref: string,
): Promise<Interest | RequestConfirmation> => {
  try {
    const response = await request.post('/interest/log', {
      of,
      ref,
    });

    if (response.status === 200) {
      return response.data.interest;
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
 * Deletes interest in a route.
 *
 * @param {string} route Route in interest.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteInterest = async (route: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('route', route);

    const response = await request.delete(`/interest/delete?${params.toString()}`);

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
 * Updates interest in a route.
 *
 * @param {InterestType} type Type of interest.
 * @returns {Promise<Interest | RequestConfirmation>} Interest updated.
 */
const updateInterest = async (type: InterestType): Promise<Interest | RequestConfirmation> => {
  try {
    const response = await request.put('/interest/update', { type });

    if (response.status === 200) {
      return response.data.interest;
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

export default {
  logInterest,
  deleteInterest,
  updateInterest,
};

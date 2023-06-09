// Local Imports
import request from './request';

// Types
import {
  LinkType,
  RequestConfirmation,
  SearchResponse,
} from '../types';

/**
 * Links separate items.
 *
 * @param {ItemLink} first First item to link.
 * @param {ItemLink} second Second item to link.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const linkItems = async (
  of: LinkType,
  firstRef: string,
  secondRef: string,
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/general/link', {
      of,
      firstRef,
      secondRef,
    });

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
 * Searchs for areas, routes or users.
 *
 * @param {string} query Query to search for.
 * @returns {Promise<SearchResponse | RequestConfirmation>} Promise of the action.
 */
const serach = async (query: string): Promise<SearchResponse | RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('query', query);

    const response = await request.get(`/general/search?${params.toString()}`);

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
 * Updates data with route guides.
 *
 * @returns {Promise<RequestConfirmation>} Promise of update.
 */
const update = async (): Promise<RequestConfirmation> => {
  try {
    const response = await request.put('/general/update');

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

export default {
  linkItems,
  serach,
  update,
};

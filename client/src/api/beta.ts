// Local Imports
import request from './request';

// Types
import {
  Article,
  ItemLink,
  RequestConfirmation,
} from '../types';

/**
 * Posts beta for a route.
 *
 * @param {ItemLink} link Item the beta is linked to.
 * @param {string} text Text of the beta.
 * @param {string} href HREF for beta.
 * @returns {Promise<Attempt | RequestConfirmation>} Promise of the action.
 */
const postBeta = async (
  link: ItemLink,
  text = '',
  href = '',
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/beta/log', {
      link,
      text,
      href,
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
};

/**
 * Deletes beta.
 *
 * @param {string} id ID of the beta.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteBeta = async (id: string): Promise<Article | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.delete(`/beta/delete?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Updates beta.
 *
 * @param {string} id ID of the beta.
 * @param {ItemLink} link Item the beta is linked to.
 * @param {string} text Text of the beta.
 * @param {string} href HREF for beta.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const updateBeta = async (
  id: string,
  link: ItemLink,
  text = '',
  href = '',
): Promise<Article[] | null> => {
  try {
    const response = await request.put('/beta/update', {
      id,
      link,
      text,
      href,
    });

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
};

export default {
  postBeta,
  deleteBeta,
  updateBeta,
};

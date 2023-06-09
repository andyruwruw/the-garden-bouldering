// Local Imports
import request from './request';

// Types
import {
  Description,
  LinkType,
  RequestConfirmation,
} from '../types';

/**
 * Posts a description for an item.
 *
 * @param {ItemLink} link Item the description is linked to.
 * @param {string} text Text of the description.
 * @param {string} href HREF for description.
 * @returns {Promise<Description | RequestConfirmation>} Promise of the action.
 */
const postDescription = async (
  of: LinkType,
  ref: string,
  text = '',
  href = '',
): Promise<Description | RequestConfirmation> => {
  try {
    const response = await request.post('/description/post', {
      of,
      ref,
      text,
      href,
    });

    if (response.status === 200) {
      return response.data.description;
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
 * Deletes a description.
 *
 * @param {string} id ID of the description.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteDescription = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.delete(`/description/delete?${params.toString()}`);

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
 * Updates a description.
 *
 * @param {string} id Id of the description.
 * @param {string} text Text of the description.
 * @param {string} href HREF for description.
 * @returns {Promise<Description | null>} Promise of description.
 */
const updateDescription = async (
  id: string,
  text = '',
  href = '',
): Promise<Description | null> => {
  try {
    const response = await request.put('/description/update', {
      id,
      text,
      href,
    });

    if (response.status === 200) {
      return response.data.description;
    }
  } catch (error) {
    return null;
  }
  return null;
};

export default {
  postDescription,
  deleteDescription,
  updateDescription,
};

// Local Imports
import request from './request';

// Types
import {
  ItemLink,
  RequestConfirmation,
} from '../types';

/**
 * Posts a new comment.
 *
 * @param {ItemLink[]} link Item the article links to.
 * @param {string} text Text of the comment.
 * @returns {Promise<Comment | RequestConfirmation>} Promise of the action.
 */
const postComment = async (
  link: ItemLink,
  text: string,
): Promise<Comment | RequestConfirmation> => {
  try {
    const response = await request.post('/comment/post', {
      link,
      text,
    });

    if (response.status === 200) {
      return response.data.comment;
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
 * Deletes a comment.
 *
 * @param {string} id ID of the comment. 
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteComment = async (id: string): Promise<RequestConfirmation> => {
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
}

/**
 * Updates a comment.
 *
 * @param {string} id Id of the comment.
 * @param {string} text Text of the comment.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const updateComment = async (
  id: string,
  text: string,
): Promise<Comment | null> => {
  try {
    const response = await request.put('/comment/update', {
      id,
      text,
    });

    if (response.status === 200) {
      return response.data.comment;
    }
  } catch (error) {
    return null;
  }
  return null;
}

export default {
  postComment,
  deleteComment,
  updateComment,
};

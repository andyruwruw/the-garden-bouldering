// Local Imports
import request from './request';

// Types
import {
  Article,
  ArticleComponent,
  ArticleType,
  LinkType,
  RequestConfirmation,
} from '../types';

/**
 * Deletes an article.
 *
 * @param {string} id ID of the article.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteArticle = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/article/delete?${params.toString()}`);

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
 * Retrieves an article.
 *
 * @param {string} id ID of the article.
 * @returns {Promise<Article | null>} Promise of an article.
 */
const getArticle = async (id: string): Promise<Article | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/article/get?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Retrieves articles.
 *
 * @param {string[]} ids IDs of the articles.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const getArticles = async (ids: string[]): Promise<Article[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('ids', ids.join(','));

    const response = await request.get(`/article/get-many?${params.toString()}`);

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Retrieves articles for a given area.
 *
 * @param {string} id ID of the area.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const getAreaArticles = async (id: string): Promise<Article[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/article/get-area?${params.toString()}`);

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Retrieves articles for a given boulder.
 *
 * @param {string} id ID of the boulder.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const getBoulderArticles = async (id: string): Promise<Article[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/article/get-boulder?${params.toString()}`);

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Retrieves articles for a given crag.
 *
 * @param {string} id ID of the crag.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const getCragArticles = async (id: string): Promise<Article[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/article/get-crag?${params.toString()}`);

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Retrieves articles for a given route.
 *
 * @param {string} id ID of the route.
 * @returns {Promise<Article[] | null>} Promise of articles.
 */
const getRouteArticles = async (id: string): Promise<Article[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/article/get-route?${params.toString()}`);

    if (response.status === 200) {
      return response.data.articles;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Posts an article.
 *
 * @param {ItemLink[]} link Item the article links to.
 * @param {ArticleType} type Type of article.
 * @param {ArticleComponent[]} content Content of article.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const postArticle = async (
  of: LinkType,
  ref: string,
  type: ArticleType,
  content: ArticleComponent[],
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/article/post', {
      of,
      ref,
      type,
      content,
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
 * Updates an article.
 *
 * @returns {Promise<RequestConfirmation>} Confirmation of action.
 */
const updateArticle = async (
  of: LinkType,
  ref: string,
  type: ArticleType,
  content: ArticleComponent[],
): Promise<RequestConfirmation> => {
  try {
    const response = await request.put('/article/update', {
      of,
      ref,
      type,
      content,
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

export default {
  deleteArticle,
  getArticle,
  getArticles,
  getAreaArticles,
  getBoulderArticles,
  getCragArticles,
  getRouteArticles,
  postArticle,
  updateArticle,
};

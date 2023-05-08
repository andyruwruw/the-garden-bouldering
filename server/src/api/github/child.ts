// Local Imports
import { ANDREW_CHILD_GUIDE } from '../../config';
import request from './request';

/**
 * Retrieves Armageddon section TEX file from Andrew Child's guidebook.
 *
 * @returns {Promise<string>} TEX data.
 */
const getArmageddonTex = async (): Promise<string> => {
  try {
    const response = await request.get(`/repos/${ANDREW_CHILD_GUIDE.owner}/${ANDREW_CHILD_GUIDE.repo}/contents/${ANDREW_CHILD_GUIDE.files.armageddon.path}`);

    if (response.status === 200) {
      return Buffer.from(response.data.content, 'base64').toString();
    }
  } catch (error) {
    console.log(error);
  }

  return '';
}

/**
 * Retrieves The Garden Main section TEX file from Andrew Child's guidebook.
 *
 * @returns {Promise<string>} TEX data.
 */
const getMainTex = async (): Promise<string> => {
  try {
    const response = await request.get(`/repos/${ANDREW_CHILD_GUIDE.owner}/${ANDREW_CHILD_GUIDE.repo}/contents/${ANDREW_CHILD_GUIDE.files.main.path}`);

    if (response.status === 200) {
      return Buffer.from(response.data.content, 'base64').toString();
    }
  } catch (error) {
    console.log(error);
  }

  return '';
}

/**
 * Retrieves Quartzville Creek section TEX file from Andrew Child's guidebook.
 *
 * @returns {Promise<string>} TEX data.
 */
const getQuartzvilleCreekTex = async (): Promise<string> => {
  try {
    const response = await request.get(`/repos/${ANDREW_CHILD_GUIDE.owner}/${ANDREW_CHILD_GUIDE.repo}/contents/${ANDREW_CHILD_GUIDE.files['quartzville-creek'].path}`);

    if (response.status === 200) {
      return Buffer.from(response.data.content, 'base64').toString();
    }
  } catch (error) {
    console.log(error);
  }

  return '';
}

/**
 * Retrieves The Upper Garden section TEX file from Andrew Child's guidebook.
 *
 * @returns {Promise<string>} TEX data.
 */
const getUpperTex = async (): Promise<string> => {
  try {
    const response = await request.get(`/repos/${ANDREW_CHILD_GUIDE.owner}/${ANDREW_CHILD_GUIDE.repo}/contents/${ANDREW_CHILD_GUIDE.files.upper.path}`);

    if (response.status === 200) {
      return Buffer.from(response.data.content, 'base64').toString();
    }
  } catch (error) {
    console.log(error);
  }

  return '';
}

/**
 * Retrieves latest commit Id.
 *
 * @returns {string} Latest commit Id.
 */
const getVersion = async (): Promise<string> => {
  try {
    const response = await request.get(`/repos/${ANDREW_CHILD_GUIDE.owner}/${ANDREW_CHILD_GUIDE.repo}/commits`);

    if (response.status === 200) {
      return response.data[0].sha;
    }
  } catch (error) {
    console.log(error);
  }
  return '';
}

export default {
  getArmageddonTex,
  getMainTex,
  getQuartzvilleCreekTex,
  getUpperTex,
  getVersion,
}

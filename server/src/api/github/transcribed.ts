// Local Imports
import { TRANSCRIBED_GUIDES } from '../../config';
import request from './request';

// Types
import { OldGuide } from '../../types/old-guide';

/**
 * Retrieves The Garden transcribed JSON.
 *
 * @returns {Promise<OldGuide>} JSON data.
 */
const getGardenJson = async (): Promise<OldGuide> => {
  try {
    const response = await request.get(`/repos/${TRANSCRIBED_GUIDES.owner}/${TRANSCRIBED_GUIDES.repo}/contents/${TRANSCRIBED_GUIDES.files['the-garden'].path}`);

    if (response.status === 200) {
      return JSON.parse(Buffer.from(response.data.content, 'base64').toString()) as OldGuide;
    }
  } catch (error) {
    console.log(error);
  }

  return {} as OldGuide;
}

/**
 * Retrieves Druid Stones transcribed JSON.
 *
 * @returns {Promise<OldGuide>} JSON data.
 */
const getDruidStonesJson = async (): Promise<OldGuide> => {
  try {
    const response = await request.get(`/repos/${TRANSCRIBED_GUIDES.owner}/${TRANSCRIBED_GUIDES.repo}/contents/${TRANSCRIBED_GUIDES.files['druid-stones'].path}`);

    if (response.status === 200) {
      return JSON.parse(Buffer.from(response.data.content, 'base64').toString()) as OldGuide;
    }
  } catch (error) {
    console.log(error);
  }

  return {} as OldGuide;
}

/**
 * Retrieves latest commit Id.
 *
 * @returns {string} Latest commit Id.
 */
const getVersion = async (): Promise<string> => {
  try {
    const response = await request.get(`/repos/${TRANSCRIBED_GUIDES.owner}/${TRANSCRIBED_GUIDES.repo}/commits`);

    if (response.status === 200) {
      return response.data[0].sha;
    }
  } catch (error) {
    console.log(error);
  }
  return '';
}

export default {
  getGardenJson,
  getDruidStonesJson,
  getVersion,
}

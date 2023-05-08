// Packages
import axios from 'axios';

// Local Imports
import { Environment } from '../../helpers/environment';
import { GITHUB_API_BASE_URL } from '../../config';

/**
 * Preset request object with authentication and base URL.
 */
const request = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${Environment.getGithubToken()}`,
  },
});

export default request;

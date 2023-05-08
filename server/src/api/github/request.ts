// Packages
import axios from 'axios';

// Local Imports
import { Environment } from '../../helpers/environment';
import { GITHUB_API_BASE_URL } from '../../config';

const request = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${Environment.getGithubToken()}`,
  },
});

export default request;

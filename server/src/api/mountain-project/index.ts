// Local Imports
import { MountainProjectScraper } from './mountain-project-scraper';

// Types
import { MountainProjectItem } from '../../types';

/**
 * Retrieves a Mountain Project area by URL.
 *
 * @param {string} url Mountain Project URL. 
 * @returns {MountainProjectItem} Area data.
 */
export const getMountainProjectArea = async (url: string): Promise<MountainProjectItem | null> => {
  try {
    const scraper = new MountainProjectScraper();

    await scraper.request(url);

    return scraper.toObject();
  } catch (error) {
    console.log(error);
  }
  return null;
};

/**
 * Retrieves a Mountain Project route by URL.
 *
 * @param {string} url Mountain Project URL. 
 * @returns {MountainProjectItem} Route data.
 */
export const getMountainProjectRoute = async (url: string): Promise<MountainProjectItem | null> => {
  try {
    const scraper = new MountainProjectScraper();

    await scraper.request(url);

    return scraper.toObject();
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default {
  getMountainProjectArea,
  getMountainProjectRoute,
};

// Local Imports
import request from './request';

// Types
import {
  Boulder,
  Coordinates,
  ExternalHrefs,
  ExternalIds,
  RequestConfirmation,
} from '../types';

/**
 * Approves an update to a boulder.
 *
 * @param {string} id Id of the request.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const approveBoulderEditRequest = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.put(`/boulder/approve-request?${params.toString()}`);

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
 * Deletes a boulder.
 *
 * @param {string} id ID of the boulder. 
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteBoulder = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/boulder/delete?${params.toString()}`);

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
 * Retrieves boulders for a given area.
 *
 * @param {string} id ID of the area. 
 * @returns {Promise<Boulder | null>} Promise of boulders.
 */
const getAreaBoulders = async (id: string): Promise<Boulder | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/boulder/get-area?${params.toString()}`);

    if (response.status === 200) {
      return response.data.boulders;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves a boulder.
 *
 * @param {string} id ID of the boulder. 
 * @returns {Promise<Boulder | null>} Promise of a boulder.
 */
const getBoulder = async (id: string): Promise<Boulder | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/boulder/get?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves boulders.
 *
 * @param {string[]} ids IDs of the boulders. 
 * @returns {Promise<Boulder[] | null>} Promise of boulders.
 */
const getBoulders = async (ids: string[]): Promise<Boulder[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('ids', ids.join(','));

    const response = await request.get(`/boulder/get-many?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves boulders for a given crag.
 *
 * @param {string} id ID of the crag. 
 * @returns {Promise<Boulder[] | null>} Promise of boulders.
 */
const getCragBoulders = async (id: string): Promise<Boulder[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/boulder/get-crag?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves a random boulder.
 *
 * @param {string} id ID of the crag. 
 * @returns {Promise<Boulder[] | null>} Promise of a boulder.
 */
const getRandomBoulder = async (id: string): Promise<Boulder[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/boulder/random?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Updates a boulder.
 *
 * @param {string} id Boulder's Id.
 * @param {string} name Area's name.
 * @param {string[]} altNames Alternate names for the area.
 * @param {ExternalIds} externalIds External Ids for the area.
 * @param {ExternalHrefs} externalHrefs External HREFs for the area.
 * @param {string[]} shape Shape of the area.
 * @param {Coordinates} location Location of the area.
 * @returns {Promise<RequestConfirmation>} Confirmation of action.
 */
const updateBoulder = async (
  id: string,
  name: string,
  altNames: string[],
  externalIds: ExternalIds,
  externalHrefs: ExternalHrefs,
  shape: string[],
  location: Coordinates,
): Promise<RequestConfirmation> => {
  try {
    const response = await request.put('/boulder/update', {
      id,
      name,
      altNames,
      externalIds,
      externalHrefs,
      shape,
      location,
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
}

/**
 * Updates a boulder's status.
 *
 * @param {string} id Id of area.
 * @param {string} type Type of status report.
 * @param {string[]} value Values of status.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const postBoulderStatus = async (
  id: string,
  type: string,
  value: string[],
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/boulder/status', {
      id,
      type,
      value,
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
}

export default {
  approveBoulderEditRequest,
  deleteBoulder,
  getAreaBoulders,
  getBoulder,
  getBoulders,
  getCragBoulders,
  getRandomBoulder,
  updateBoulder,
  postBoulderStatus,
};

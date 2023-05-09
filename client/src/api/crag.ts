// Local Imports
import request from './request';

// Types
import {
  Area,
  Coordinates,
  Crag,
  ExternalHrefs,
  ExternalIds,
  RequestConfirmation,
} from '../types';

/**
 * Approves an update to a crag.
 *
 * @param {string} id Id of the request.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const approveCragEditRequest = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.put(`/crag/approve-request?${params.toString()}`);

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
 * Deletes a crag.
 *
 * @param {string} id ID of the crag.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteCrag = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/crag/delete?${params.toString()}`);

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
 * Retrieves a crag.
 *
 * @param {string} id ID of the crag.
 * @returns {Promise<Crag | null>} Promise of an crag.
 */
const getCrag = async (id: string): Promise<Crag | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/crag/get?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Retrieves crags.
 *
 * @param {string[]} ids IDs of the crags.
 * @returns {Promise<Area[] | null>} Promise of crags.
 */
const getCrags = async (ids: string[]): Promise<Area[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('ids', ids.join(','));

    const response = await request.get(`/crag/get-many?${params.toString()}`);

    if (response.status === 200) {
      return response.data.crags;
    }
  } catch (error) {
    return null;
  }
  return null;
};

/**
 * Updates a crag's information.
 *
 * @param {string} id Crag's Id.
 * @param {string} name Crag's name.
 * @param {string[]} altNames Alternate names for the crag.
 * @param {ExternalIds} externalIds External Ids for the crag.
 * @param {ExternalHrefs} externalHrefs External HREFs for the crag.
 * @param {string[]} shape Shape of the crag.
 * @param {Coordinates} location Location of the crag.
 * @returns {Promise<RequestConfirmation>} Confirmation of action.
 */
const updateCrag = async (
  id: string,
  name: string,
  altNames: string[],
  externalIds: ExternalIds,
  externalHrefs: ExternalHrefs,
  shape: string[],
  location: Coordinates,
): Promise<Crag | RequestConfirmation> => {
  try {
    const response = await request.put('/crag/update', {
      id,
      name,
      altNames,
      externalIds,
      externalHrefs,
      shape,
      location,
    });

    if (response.status === 200) {
      return response.data.crag;
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
 * Updates an area's status.
 *
 * @param {string} id Id of area.
 * @param {string} type Type of status report.
 * @param {string[]} value Values of status.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const postCragStatus = async (
  id: string,
  type: string,
  value: string[],
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/crag/status', {
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
};

export default {
  approveCragEditRequest,
  deleteCrag,
  getCrag,
  getCrags,
  updateCrag,
  postCragStatus,
};

// Local Imports
import request from './request';

// Types
import {
  Area,
  Coordinates,
  ExternalHrefs,
  ExternalIds,
  RequestConfirmation,
} from '../types';

/**
 * Approves an update to an area.
 *
 * @param {string} id Id of the request.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const approveAreaEditRequest = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.put(`/area/approve-request?${params.toString()}`);

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
 * Deletes an area.
 *
 * @param {string} id ID of the area. 
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteArea = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/area/delete?${params.toString()}`);

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
 * Retrieves an area.
 *
 * @param {string} id ID of the area. 
 * @returns {Promise<Area | null>} Promise of an area.
 */
const getArea = async (id: string): Promise<Area | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/area/get?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves areas.
 *
 * @param {string[]} ids IDs of the areas. 
 * @returns {Promise<Area[] | null>} Promise of areas.
 */
const getAreas = async (ids: string[]): Promise<Area[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('ids', ids.join(','));

    const response = await request.get(`/area/get-many?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves a areas for a given crag.
 *
 * @param {string} id ID of the crag. 
 * @returns {Promise<Area[] | null>} Promise of areas.
 */
const getCragAreas = async (id: string): Promise<Area[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/area/get-crag?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Updates an area's information.
 *
 * @param {string} id Area's Id.
 * @param {string} name Area's name.
 * @param {string[]} altNames Alternate names for the area.
 * @param {ExternalIds} externalIds External Ids for the area.
 * @param {ExternalHrefs} externalHrefs External HREFs for the area.
 * @param {string[]} shape Shape of the area.
 * @param {Coordinates} location Location of the area.
 * @returns {Promise<RequestConfirmation>} Confirmation of action.
 */
const updateArea = async (
  id: string,
  name: string,
  altNames: string[],
  externalIds: ExternalIds,
  externalHrefs: ExternalHrefs,
  shape: string[],
  location: Coordinates,
): Promise<RequestConfirmation> => {
  try {
    const response = await request.put('/area/update', {
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
 * Updates an area's status.
 *
 * @param {string} id Id of area.
 * @param {string} type Type of status report.
 * @param {string[]} value Values of status.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const postAreaStatus = async (
  id: string,
  type: string,
  value: string[],
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/area/status', {
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
  approveAreaEditRequest,
  deleteArea,
  getArea,
  getAreas,
  updateArea,
  getCragAreas,
  postAreaStatus,
};

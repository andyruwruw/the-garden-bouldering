// Local Imports
import request from './request';

// Types
import {
  Area,
  AscentObject,
  Coordinates,
  DangerObject,
  ExternalHrefs,
  ExternalIds,
  GradeObject,
  RatingObject,
  RequestConfirmation,
  Route,
} from '../types';

/**
 * Approves an update to a route.
 *
 * @param {string} id Id of the request.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const approveRouteEditRequest = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.put(`/route/approve-request?${params.toString()}`);

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
 * Deletes a route.
 *
 * @param {string} id ID of the route. 
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteRoute = async (id: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/route/delete?${params.toString()}`);

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
 * Retrieves a route.
 *
 * @param {string} id ID of the route. 
 * @returns {Promise<Route | null>} Promise of a route.
 */
const getRoute = async (id: string): Promise<Route | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/route/get?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves routes.
 *
 * @param {string[]} ids IDs of the routes. 
 * @returns {Promise<Route[] | null>} Promise of routes.
 */
const getRoutes = async (ids: string[]): Promise<Route[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('ids', ids.join(','));

    const response = await request.get(`/route/get-many?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves a random route.
 *
 * @returns {Promise<Route | null>} Promise of a route.
 */
const getRandomRoute = async (): Promise<Route | null> => {
  try {
    const response = await request.get('/route/random');

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves routes for a given area.
 *
 * @param {string} id ID of the area. 
 * @returns {Promise<Route[] | null>} Promise of routes.
 */
const getAreaRoutes = async (id: string): Promise<Route[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/route/get-area?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves route for a given boulder.
 *
 * @param {string} id ID of the boulder. 
 * @returns {Promise<Route[] | null>} Promise of routes.
 */
const getBoulderRoutes = async (id: string): Promise<Route[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/route/get-boulder?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Retrieves routes for a given crag.
 *
 * @param {string} id ID of the crag. 
 * @returns {Promise<Route[] | null>} Promise of routes.
 */
const getCragRoutes = async (id: string): Promise<Route[] | null> => {
  try {
    const params = new URLSearchParams();
    params.append('id', id);

    const response = await request.get(`/route/get-crag?${params.toString()}`);

    if (response.status === 200) {
      return response.data.areas;
    }
  } catch (error) {
    return null;
  }
  return null;
}

/**
 * Updates a route.
 *
 * @param {string} id Area's Id.
 * @param {string} name Area's name.
 * @param {string[]} altNames Alternate names for the area.
 * @param {ExternalIds} externalIds External Ids for the area.
 * @param {ExternalHrefs} externalHrefs External HREFs for the area.
 * @param {string[]} shape Shape of the area.
 * @param {Coordinates} location Location of the area.
 * @returns {Promise<Route | RequestConfirmation>} Confirmation of action.
 */
const updateRoute = async (
  id: string,
  crag: string,
  areas: string[],
  boulders: string[],
  externalIds: ExternalIds,
  externalHrefs: ExternalHrefs,
  name: string,
  altNames: string[],
  location: number,
  grade: GradeObject,
  rating: RatingObject,
  tags: string[],
  ascents: AscentObject[],
  danger: DangerObject,
): Promise<Route | RequestConfirmation> => {
  try {
    const response = await request.put('/route/update', {
      id,
      crag,
      areas,
      boulders,
      externalIds,
      externalHrefs,
      name,
      altNames,
      location,
      grade,
      rating,
      tags,
      ascents,
      danger,
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
 * Updates a route's status.
 *
 * @param {string} id Id of area.
 * @param {string} type Type of status report.
 * @param {string[]} value Values of status.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const postRouteStatus = async (
  id: string,
  type: string,
  value: string[],
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/route/status', {
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
  approveRouteEditRequest,
  deleteRoute,
  getRoute,
  getRoutes,
  getRandomRoute,
  getAreaRoutes,
  getBoulderRoutes,
  getCragRoutes,
  updateRoute,
  postRouteStatus,
};

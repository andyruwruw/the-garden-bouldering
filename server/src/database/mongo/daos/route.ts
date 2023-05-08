// Packages
import { Model } from 'mongoose';

// Local Imports
import { Route as RouteModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Route as RouteInterface,
  DataAccessObject as DataAccessObjectInterface,
  ExternalIds,
  ExternalHrefs,
  GradeObject,
  RatingObject,
  AscentObject,
} from '../../../types';

/**
 * Data access object for Routes.
 */
export class Route
  extends DataAccessObject<RouteInterface>
  implements DataAccessObjectInterface<RouteInterface> {
  /**
   * Creates an Route in the Database.
   * @returns {RouteInterface} The route created.
   */
  async create(
    crag = 'Unknown',
    areas = [] as string[],
    boulders = [] as string[],
    guides = [] as string[],
    name = 'Unknown',
    altNames = [] as string[],
    externalIds = {} as ExternalIds,
    externalHrefs = {} as ExternalHrefs,
    location = 0,
    grade = {} as GradeObject,
    rating = {} as RatingObject,
    tags = [] as string[],
    ascents = [] as AscentObject[],
  ): Promise<RouteInterface> {
    return this._create({
      crag,
      areas,
      boulders,
      guides,
      name,
      altNames,
      externalIds,
      externalHrefs,
      location,
      grade,
      rating,
      tags,
      ascents,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return RouteModel;
  }
}

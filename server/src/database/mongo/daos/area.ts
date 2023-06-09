// Packages
import { Model } from 'mongoose';

// Local Imports
import { Area as AreaModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Area as AreaInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Areas.
 */
export class Area
  extends DataAccessObject<AreaInterface>
  implements DataAccessObjectInterface<AreaInterface> {
  /**
   * Creates an Area in the Database.
   *
   * @returns {AreaInterface} The area created.
   */
  async create(
    crag: string,
    name = 'Unknown',
    altNames = [],
    externalIds = {},
    externalHrefs = {},
    latitude = 0,
    longitude = 0,
    elevation = 0,
    areas = [],
    shape = [],
    routes = 0,
    updated = new Date(),
    images = [],
  ): Promise<AreaInterface> {
    return this._create({
      crag,
      name,
      altNames,
      externalIds,
      externalHrefs,
      latitude,
      longitude,
      elevation,
      areas,
      shape,
      routes,
      updated,
      images,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return AreaModel;
  }
}

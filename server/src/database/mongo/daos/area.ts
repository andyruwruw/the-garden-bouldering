// Packages
import { Model } from 'mongoose';

// Local Imports
import { Area as AreaModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Coordinates,
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
    crag = '',
    name = 'Unknown',
    altNames = [],
    externalIds = {},
    externalHrefs = {},
    shape = [],
    location = {
      lat: 0,
      long: 0,
    } as Coordinates,
    guides = [],
  ): Promise<AreaInterface> {
    return this._create({
      crag,
      name,
      altNames,
      externalIds,
      externalHrefs,
      shape,
      location,
      guides,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return AreaModel;
  }
}

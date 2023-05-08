// Packages
import { Model } from 'mongoose';

// Local Imports
import { Crag as CragModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Crag as CragInterface,
  Coordinates,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Crags.
 */
export class Crag
  extends DataAccessObject<CragInterface>
  implements DataAccessObjectInterface<CragInterface> {
  /**
   * Creates an Crag in the Database.
   * @returns {CragInterface} The crag created.
   */
  async create(
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
  ): Promise<CragInterface> {
    return this._create({
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
    return CragModel;
  }
}

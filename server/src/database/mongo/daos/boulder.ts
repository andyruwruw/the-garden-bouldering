// Packages
import { Model } from 'mongoose';

// Local Imports
import { Boulder as BoulderModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Boulder as BoulderInterface,
  Coordinates,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Boulders.
 */
export class Boulder
  extends DataAccessObject<BoulderInterface>
  implements DataAccessObjectInterface<BoulderInterface> {
  /**
   * Creates an Boulder in the Database.
   * @returns {BoulderInterface} The boulder created.
   */
  async create(
    crag = '',
    areas = [],
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
  ): Promise<BoulderInterface> {
    return this._create({
      crag,
      areas,
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
    return BoulderModel;
  }
}

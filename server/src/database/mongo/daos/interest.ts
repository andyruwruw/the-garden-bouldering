// Packages
import { Model } from 'mongoose';

// Local Imports
import { Interest as InterestModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Interest as InterestInterface,
  DataAccessObject as DataAccessObjectInterface,
  InterestType,
} from '../../../types';

/**
 * Data access object for Interests.
 */
export class Interest
  extends DataAccessObject<InterestInterface>
  implements DataAccessObjectInterface<InterestInterface> {
  /**
   * Creates an Interest in the Database.
   * @returns {InterestInterface} The interest created.
   */
  async create(
    route: string,
    climber: string,
    type = 'project' as InterestType,
    date = '',
  ): Promise<InterestInterface> {
    return this._create({
      route,
      climber,
      type,
      date,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return InterestModel;
  }
}

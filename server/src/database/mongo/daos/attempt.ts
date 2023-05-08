// Packages
import { Model } from 'mongoose';

// Local Imports
import { Attempt as AttemptModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Attempt as AttemptInterface,
  DataAccessObject as DataAccessObjectInterface,
  SendType,
} from '../../../types';

/**
 * Data access object for Attempts.
 */
export class Attempt
  extends DataAccessObject<AttemptInterface>
  implements DataAccessObjectInterface<AttemptInterface> {
  /**
   * Creates an Attempt in the Database.
   * @returns {AttemptInterface} The attempt created.
   */
  async create(
    route: string,
    climber: string,
    attempts = 1,
    type = 'redpoint' as SendType,
    notes = '',
    date = '',
  ): Promise<AttemptInterface> {
    return this._create({
      route,
      climber,
      attempts,
      type,
      notes,
      date,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return AttemptModel;
  }
}

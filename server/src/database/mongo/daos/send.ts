// Packages
import { Model } from 'mongoose';

// Local Imports
import { Send as SendModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Send as SendInterface,
  SendType,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Sends.
 */
export class Send
  extends DataAccessObject<SendInterface>
  implements DataAccessObjectInterface<SendInterface> {
  /**
   * Creates an Send in the Database.
   * @returns {SendInterface} The send created.
   */
  async create(
    route: string,
    climber: string,
    attempts = 1,
    laps = 1,
    type = 'redpoint' as SendType,
    notes = '',
    date = '',
  ): Promise<SendInterface> {
    return this._create({
      route,
      climber,
      attempts,
      laps,
      type,
      notes,
      date,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return SendModel;
  }
}

// Packages
import { Model } from 'mongoose';

// Local Imports
import { Status as StatusModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Status as StatusInterface,
  DataAccessObject as DataAccessObjectInterface,
  ItemLink,
} from '../../../types';

/**
 * Data access object for Statuss.
 */
export class Status
  extends DataAccessObject<StatusInterface>
  implements DataAccessObjectInterface<StatusInterface> {
  /**
   * Creates an Status in the Database.
   * @returns {StatusInterface} The Status created.
   */
  async create(
    link: ItemLink,
    owner: string,
    type = 'description',
    value = [],
    date = new Date(),
  ): Promise<StatusInterface> {
    return this._create({
      link,
      owner,
      type,
      value,
      date,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return StatusModel;
  }
}

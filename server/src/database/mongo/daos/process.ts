// Packages
import { Model } from 'mongoose';

// Local Imports
import { Process as ProcessModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Process as ProcessInterface,
  DataAccessObject as DataAccessObjectInterface,
} from '../../../types';

/**
 * Data access object for Processs.
 */
export class Process
  extends DataAccessObject<ProcessInterface>
  implements DataAccessObjectInterface<ProcessInterface> {
  /**
   * Creates an Process in the Database.
   * @returns {ProcessInterface} The Process created.
   */
  async create(
    versions: Record<string, string> = {},
    updated = new Date(),
  ): Promise<ProcessInterface> {
    return this._create({
      versions,
      updated,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return ProcessModel;
  }
}

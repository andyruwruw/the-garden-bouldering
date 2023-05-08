// Packages
import { Model } from 'mongoose';

// Local Imports
import { Request as RequestModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Request as RequestInterface,
  DataAccessObject as DataAccessObjectInterface,
  RequestType,
  ItemLink,
} from '../../../types';

/**
 * Data access object for Requests.
 */
export class Request
  extends DataAccessObject<RequestInterface>
  implements DataAccessObjectInterface<RequestInterface> {
  /**
   * Creates an Request in the Database.
   * @returns {RequestInterface} The request created.
   */
  async create(
    link: ItemLink,
    text: string,
    owner: string,
    date: string,
    type = 'description' as RequestType,
    ref = '',
  ): Promise<RequestInterface> {
    return this._create({
      link,
      text,
      owner,
      date,
      type,
      ref,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return RequestModel;
  }
}

// Packages
import { Model } from 'mongoose';

// Local Imports
import { Description as DescriptionModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Description as DescriptionInterface,
  DataAccessObject as DataAccessObjectInterface,
  DescriptionType,
  ItemLink,
} from '../../../types';

/**
 * Data access object for Descriptions.
 */
export class Description
  extends DataAccessObject<DescriptionInterface>
  implements DataAccessObjectInterface<DescriptionInterface> {
  /**
   * Creates an Description in the Database.
   * @returns {DescriptionInterface} The description created.
   */
  async create(
    link: ItemLink,
    text: string,
    owner: string,
    date: string,
    type = 'description' as DescriptionType,
    guide = '',
    updated = new Date(),
    href = '',
  ): Promise<DescriptionInterface> {
    return this._create({
      link,
      text,
      owner,
      date,
      type,
      guide,
      updated,
      href,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return DescriptionModel;
  }
}

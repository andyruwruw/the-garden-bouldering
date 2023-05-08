// Packages
import { Model } from 'mongoose';

// Local Imports
import { Comment as CommentModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Comment as CommentInterface,
  DataAccessObject as DataAccessObjectInterface,
  ItemLink,
} from '../../../types';

/**
 * Data access object for Comments.
 */
export class Comment
  extends DataAccessObject<CommentInterface>
  implements DataAccessObjectInterface<CommentInterface> {
  /**
   * Creates an Comment in the Database.
   * @returns {CommentInterface} The comment created.
   */
  async create(
    link: ItemLink,
    text: string,
    owner: string,
    date = new Date(),
    updated = new Date(),
  ): Promise<CommentInterface> {
    return this._create({
      link,
      text,
      owner,
      date,
      updated,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return CommentModel;
  }
}

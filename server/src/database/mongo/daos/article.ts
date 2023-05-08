// Packages
import { Model } from 'mongoose';

// Local Imports
import { Article as ArticleModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Article as ArticleInterface,
  ArticleType,
  DataAccessObject as DataAccessObjectInterface,
  ItemLink,
} from '../../../types';

/**
 * Data access object for Articles.
 */
export class Article
  extends DataAccessObject<ArticleInterface>
  implements DataAccessObjectInterface<ArticleInterface> {
  /**
   * Creates an Article in the Database.
   * @returns {ArticleInterface} The article created.
   */
  async create(
    link: ItemLink[],
    owner: string,
    type = 'history' as ArticleType,
    content = [],
    created = new Date(),
    updated = new Date(),
  ): Promise<ArticleInterface> {
    return this._create({
      link,
      owner,
      type,
      content,
      created,
      updated,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return ArticleModel;
  }
}

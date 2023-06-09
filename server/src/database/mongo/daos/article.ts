// Packages
import { Model } from 'mongoose';

// Local Imports
import { Article as ArticleModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  ArticleComponent,
  Article as ArticleInterface,
  ArticleType,
  DataAccessObject as DataAccessObjectInterface,
  LinkType,
} from '../../../types';

/**
 * Data access object for Articles.
 */
export class Article
  extends DataAccessObject<ArticleInterface>
  implements DataAccessObjectInterface<ArticleInterface> {
  /**
   * Creates an Article in the Database.
   *
   * @returns {ArticleInterface} The article created.
   */
  async create(
    of: LinkType,
    ref: string,
    author: string,
    title = 'Untitled',
    type = 'history' as ArticleType,
    content = [] as ArticleComponent[],
    created = new Date(),
    updated = new Date(),
  ): Promise<ArticleInterface> {
    return this._create({
      of,
      ref,
      author,
      title,
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

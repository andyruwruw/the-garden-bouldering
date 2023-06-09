// Packages
import { Model } from 'mongoose';

// Local Imports
import { Image as ImageModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  Image as ImageInterface,
  DataAccessObject as DataAccessObjectInterface,
  ImageType,
  TopoObject,
  LinkType,
} from '../../../types';

/**
 * Data access object for Images.
 */
export class Image
  extends DataAccessObject<ImageInterface>
  implements DataAccessObjectInterface<ImageInterface> {
  /**
   * Creates an Image in the Database.
   *
   * @returns {ImageInterface} The image created.
   */
  async create(
    href: string,
    of: LinkType,
    ref: string,
    type: ImageType,
    description = '',
    width = 0,
    height = 0,
    shapes = [] as string[],
    topos = [] as TopoObject[],
  ): Promise<ImageInterface> {
    return this._create({
      href,
      of,
      ref,
      type,
      description,
      width,
      height,
      shapes,
      topos,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return ImageModel;
  }
}

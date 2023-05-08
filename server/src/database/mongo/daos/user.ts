// Packages
import { Model } from 'mongoose';

// Local Imports
import { User as UserModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import {
  User as UserInterface,
  DataAccessObject as DataAccessObjectInterface,
  GradeOpinion,
} from '../../../types';

/**
 * Data access object for Users.
 */
export class User
  extends DataAccessObject<UserInterface>
  implements DataAccessObjectInterface<UserInterface> {
  /**
   * Creates an User in the Database.
   * @returns {UserInterface} The User created.
   */
  async create(
    username: string,
    password: string,
    name = '',
    image = '',
    birthday = new Date(0),
    maxGrade = {
      grade: -1,
      subGrade: 0,
    } as  GradeOpinion,
    joined = new Date(),
    started = new Date(0),
    banned = false,
    admin = false,
  ): Promise<UserInterface> {
    return this._create({
      username,
      password,
      name,
      image,
      birthday,
      maxGrade,
      joined,
      started,
      banned,
      admin,
    });
  }

  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return UserModel;
  }
}

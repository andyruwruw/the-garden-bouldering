/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import {
  Attempt,
  Follow,
  Interest,
  Location,
  Medal,
  Post,
  Rating,
  Review,
  Route,
  Session,
  Shoes,
  Token,
  User,
  DataAccessObjectInterface,
  Area,
} from '../types';
import { DataAccessObject } from './dao';
import { UsedAbstractDatabaseError } from '../errors/used-abstract-database-error';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for Areas.
   */
  area: DataAccessObjectInterface<Area> = new DataAccessObject();

  /**
   * Data access object for Attempts.
   */
  attempt: DataAccessObjectInterface<Attempt> = new DataAccessObject();

  /**
   * Data access object for Follows.
   */
  follow: DataAccessObjectInterface<Follow> = new DataAccessObject();

  /**
   * Data access object for Interests.
   */
  interest: DataAccessObjectInterface<Interest> = new DataAccessObject();

  /**
   * Data access object for Locations.
   */
  location: DataAccessObjectInterface<Location> = new DataAccessObject();

  /**
   * Data access object for Medals.
   */
  medal: DataAccessObjectInterface<Medal> = new DataAccessObject();

  /**
   * Data access object for Posts.
   */
  post: DataAccessObjectInterface<Post> = new DataAccessObject();

  /**
   * Data access object for Ratings.
   */
  rating: DataAccessObjectInterface<Rating> = new DataAccessObject();

  /**
   * Data access object for Reviews.
   */
  review: DataAccessObjectInterface<Review> = new DataAccessObject();

  /**
   * Data access object for Routes.
   */
  route: DataAccessObjectInterface<Route> = new DataAccessObject();

  /**
   * Data access object for Sessions.
   */
  session: DataAccessObjectInterface<Session> = new DataAccessObject();

  /**
   * Data access object for Shoess.
   */
  shoes: DataAccessObjectInterface<Shoes> = new DataAccessObject();

  /**
   * Data access object for Tokens.
   */
  token: DataAccessObjectInterface<Token> = new DataAccessObject();

  /**
   * Data access object for Users.
   */
  user: DataAccessObjectInterface<User> = new DataAccessObject();

  /**
   * Connects to database.
   *
   * @param {string | undefined} [databaseUrl=''] Database URL.
   * @param {string | undefined} [databaseUser=''] Database username.
   * @param {string | undefined} [databasePassword=''] Database password.
   */
  async connect(
    databaseUrl = '',
    databaseUser = '',
    databasePassword = '',
  ): Promise<void> {
    throw new UsedAbstractDatabaseError();
  }

  /**
   * Whether or not the database is connected.
   *
   * @returns {boolean} Whether or not the database is connected.
   */
  isConnected(): boolean {
    return false;
  }
}

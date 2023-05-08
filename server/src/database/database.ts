/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { UsedAbstractDatabaseError } from '../errors/used-abstract-database-error';

// Types
import {
  Area,
  Article,
  Attempt,
  Boulder,
  Comment,
  Crag,
  Description,
  Interest,
  Route,
  Send,
  Status,
  User,
  Request,
  NullableDataAccessObject,
} from '../types';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for areas.
   */
  area: NullableDataAccessObject<Area> = null;

  /**
   * Data access object for articles.
   */
  article: NullableDataAccessObject<Article> = null;

  /**
   * Data access object for attempts.
   */
  attempt: NullableDataAccessObject<Attempt> = null;

  /**
   * Data access object for boulders.
   */
  boulder: NullableDataAccessObject<Boulder> = null;

  /**
   * Data access object for comments.
   */
  comment: NullableDataAccessObject<Comment> = null;

  /**
   * Data access object for crags.
   */
  crag: NullableDataAccessObject<Crag> = null;

  /**
   * Data access object for descriptions.
   */
  description: NullableDataAccessObject<Description> = null;

  /**
   * Data access object for interests.
   */
  interest: NullableDataAccessObject<Interest> = null;

  /**
   * Data access object for requests.
   */
  request: NullableDataAccessObject<Request> = null;

  /**
   * Data access object for routes.
   */
  route: NullableDataAccessObject<Route> = null;

  /**
   * Data access object for sends.
   */
  send: NullableDataAccessObject<Send> = null;

  /**
   * Data access object for status'.
   */
  status: NullableDataAccessObject<Status> = null;

  /**
   * Data access object for users.
   */
  user: NullableDataAccessObject<User> = null;

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
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

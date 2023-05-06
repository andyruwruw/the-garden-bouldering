/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { UsedAbstractDatabaseError } from '../errors/used-abstract-database-error';

// Types
import {
  Crag,
  NullableDataAccessObject,
} from '../types';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for Crags.
   */
  crag: NullableDataAccessObject<Crag> = null;

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

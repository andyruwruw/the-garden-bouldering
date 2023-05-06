// Local Imports
import { Database as DatabaseClass } from './database';
import { MongoDatabase } from './mongo';
import { DATABASE_TYPES } from '../config';
import { Environment } from '../helpers/environment';

/**
 * Static instance of the database.
 */
let DatabaseInstace: DatabaseClass | null = null;

/**
 * Generates database based on environmental variables.
 */
export const initializeDatabase = async () => {
  if (!DatabaseInstace) {
    if (Environment.getDatabaseType() === DATABASE_TYPES.MONGO) {
      DatabaseInstace = new MongoDatabase();
    }
    DatabaseInstace = new MongoDatabase();
  }
};

/**
 * Retrieves database based on environmental variables.
 *
 * @returns {Database} The database.
 */
export const getDatabase = (): DatabaseClass => {
  initializeDatabase();

  return DatabaseInstace as DatabaseClass;
};

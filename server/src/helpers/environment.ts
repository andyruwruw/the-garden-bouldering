// Packages
import dotenv from 'dotenv';

dotenv.config();

/**
 * Static methods for retrieving environment variables.
 */
export class Environment {
  /**
   * Retrieves token for Github API.
   *
   * @returns {string} Token for Github API.
   */
  static getGithubToken(): string {
    return process.env.GITHUB_TOKEN as string || '';
  }

  /**
   * Retrieves password for connecting with database if needed.
   *
   * @returns {string} Password for connecting with database if needed.
   */
  static getDatabasePassword(): string {
    return process.env.DATABASE_PASSWORD as string || '';
  }

  /**
   * Retrieves type of database to use.
   *
   * @returns {string} Type of database to use.
   */
  static getDatabaseType(): string {
    return process.env.DATABASE_TYPE || 'cache';
  }

  /**
   * Retrieves URL for connecting with database if needed.
   *
   * @returns {string} URL for connecting with database if needed.
   */
  static getDatabaseUrl(): string {
    return process.env.DATABASE_URL as string || 'mongodb://localhost:27017/';
  }

  /**
   * Retrieves username for connecting with database if needed.
   *
   * @returns {string} Username for connecting with database if needed.
   */
  static getDatabaseUser(): string {
    return process.env.DATABASE_USER as string || '';
  }

  /**
   * Whether log layer DEBUG is enabled.
   *
   * @returns {boolean} Whether log layer DEBUG is enabled.
   */
  static isDebugLayerEnabled(): boolean {
    return process.env.DISABLE_DEBUG_LAYER !== 'true';
  }

  /**
   * Whether log layer WARNING is enabled.
   *
   * @returns {boolean} Whether log layer WARNING is enabled.
   */
  static isWarningLayerEnabled(): boolean {
    return process.env.DISABLE_WARNING_LAYER !== 'true';
  }

  /**
   * Whether log layer UPDATE is enabled.
   *
   * @returns {boolean} Whether log layer UPDATE is enabled.
   */
  static isUpdateLayerEnabled(): boolean {
    return process.env.DISABLE_UPDATE_LAYER !== 'true';
  }

  /**
   * Retrieves encryption secret.
   *
   * @returns {string} Encryption secret.
   */
  static getSecret(): string {
    return process.env.SECRET as string;
  }

  /**
   * Retrieves origin for CORS.
   *
   * @returns {string} Origin URL.
   */
  static getOrigin(): string {
    return process.env.PRODUCTION_ORIGIN || '';
  }

  /**
   * Retrieves REST API port.
   *
   * @returns {number} REST API port.
   */
  static getPort(): number {
    return parseInt(process.env.PORT as string, 10) || 3000;
  }
}

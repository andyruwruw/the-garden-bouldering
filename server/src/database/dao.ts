// Types
import {
  QueryConditions,
  QueryProjection,
  QueryUpdate,
  MariaDbQuery,
  QuerySort,
} from '../types';

/**
 * Abstract class for Data Access Objects.
 */
export class DataAccessObject<T> {
  /**
   * Creates a new instance of the item in the Database.
   *
   * @param {T} options The item to create.
   * @returns {T} The created item.
   */
  async create(options: T): Promise<number> {
    return 0;
  }

  /**
   * Retrieves default sort value.
   *
   * @returns {Record<string, number>} Sort method.
   */
  _getSort() {
    return {};
  }

  /**
   * Pain.
   */
  async query(query: string | MariaDbQuery): Promise<any> {
    return null;
  }

  /**
   * Not needed.
   */
  async createTable(): Promise<void> {
    return;
  }

  /**
   * Not needed.
   */
  async dropTable(): Promise<void> {
    return;
  }

  /**
   * Deletes all items from the Database.
   */
  async deleteAll(): Promise<void> {
    return;
  }

  /**
   * Creates a new instance of the item in the Database.
   *
   * @param {T} options The item to create.
   * @returns {T} The created item.
   */
  async insert(item: T): Promise<number> {
    return;
  }

  /**
   * Finds one item in the Database.
   *
   * @param {QueryConditions} filter The filter to apply to the query.
   * @param {QueryProjection} projection The projection to apply to the query.
   * @returns {Promise<T | null>} The item.
   */
  async findOne(
    filter: QueryConditions = {},
    projection: QueryProjection = {},
  ): Promise<T | null> {
    return null;
  }

  /**
   * Finds all of the item in the Database.
   *
   * @param {QueryConditions} filter The filter to apply to the query.
   * @param {QueryProjection} projection The projection to apply to the query.
   * @param {QuerySort | null} sort The sort to apply to the query.
   * @returns {Promise<T[]>} The items.
   */
  async find(
    filter: QueryConditions = {},
    projection: QueryProjection = {},
    sort: QuerySort | null = null,
    offset = 0,
    limit = -1,
  ): Promise<T[]> {
    return [];
  }

  /**
   * Finds an item by it's id from the Database.
   *
   * @param {string} id The id of the item.
   * @returns {Promise<T | null>} The item or null if not found.
   */
  async findById(id: string): Promise<T | null> {
    return null;
  }

  /**
   * Deletes all items or a subset of items from the Database.
   *
   * @param {QueryConditions} filter The filter to apply to the query.
   * @returns {Promise<number>} The number of items deleted.
   */
  async delete(filter: QueryConditions = {}): Promise<number> {
    return 0;
  }

  /**
   * Deletes a single item by its id from the Database.
   *
   * @param {string} id The id of the item.
   * @returns {Promise<boolean>} Whether the item was deleted.
   */
  async deleteById(id: string): Promise<boolean> {
    return false;
  }

  /**
   * Updates one item in the Database matching the filter.
   *
   * @param {QueryConditions} filter
   * @param {QueryUpdate} update
   * @param {boolean} insertNew
   * @returns {Promise<boolean>} Whether the item was updated.
   */
  async update(
    conditions: QueryConditions = {},
    update: QueryUpdate = {},
  ): Promise<number> {
    return 0;
  }

  /**
   * Updates all items in the Database matching the filter.
   *
   * @param {QueryConditions} filter
   * @param {QueryUpdate} update
   * @param {boolean} insertNew
   * @returns {Promise<number>} The number of documents updated.
   */
  async updateMany(
    filter: QueryConditions = {},
    update: QueryUpdate = {},
    insertNew = true,
  ): Promise<number> {
    return 0;
  }

  /**
   * Clears all items from the table.
   *
   * @returns {Promise<void>} Promise of the action.
   */
  async clear(): Promise<void> {
    return;
  }
}

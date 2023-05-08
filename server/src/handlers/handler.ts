/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { Database } from '../database/database';
import { getDatabase } from '../database';
import { Monitor } from '../helpers/monitor';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
} from '../types';

/**
 * Abstract handler class.
 */
export class Handler {
  /**
   * Database instance.
   */
  static database: Database;

  /**
   * Whether the handler is ready to execute.
   */
  _ready: boolean = false;

  /**
   * Instantiates a new handler.
   */
  constructor() {
    if (!Handler.database) {
      Handler.database = getDatabase();
    }
    this._connectDatabase();
  }

  /**
   * Handles the request.
   *
   * @param {ClimbingRequest} req Incoming request.
   * @param {ClimbingResponse} res Outgoing response.
   */
  async execute(
    req: ClimbingRequest,
    res: ClimbingResponse,
  ): Promise<void | ClimbingResponse> {
  }

  /**
   * Connects to the database.
   */
  async _connectDatabase(): Promise<void> {
    try {
      if (!Handler.database.isConnected()) {
        await Handler.database.connect();
      }

      this._ready = true;
    } catch (error) {
      Monitor.trace(
        Handler,
        `Failed to connect to database: ${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}

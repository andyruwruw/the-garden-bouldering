// Packages
import express, { Application } from 'express';

// Local Imports
import { Monitor } from './helpers/monitor';
import endpoints from './endpoints';

/**
 * Wrapper class for Express server.
 */
export class Server {
  /**
   * Express Application instance.
   */
  _app: Application;

  /**
   * Desired server port.
   */
  _port: number;

  constructor(port: number) {
    this._app = express();
    this._port = port;

    this.setup();
  }

  setup(): void {
    this._app.use('/api/area', endpoints.area);
    this._app.use('/api/article', endpoints.article);
    this._app.use('/api/attempt', endpoints.attempt);
    this._app.use('/api/beta', endpoints.beta);
    this._app.use('/api/boulder', endpoints.boulder);
    this._app.use('/api/comment', endpoints.comment);
    this._app.use('/api/crag', endpoints.crag);
    this._app.use('/api/description', endpoints.description);
    this._app.use('/api/general', endpoints.general);
    this._app.use('/api/interest', endpoints.interest);
    this._app.use('/api/route', endpoints.route);
    this._app.use('/api/send', endpoints.send);
    this._app.use('/api/user', endpoints.user);
  }

  /**
   * Starts the server.
   */
  start(): void {
    this._app.listen(this._port, () => {
      Monitor.log(
        Server,
        `Server started on port ${this._port}.`,
        Monitor.Layer.UPDATE,
      );
    });
  }
}

// Packages
import {
  connect,
  connection,
} from 'mongoose';

// Local Imports
import {
  Area,
  Article,
  Attempt,
  Boulder,
  Comment,
  Crag,
  Description,
  Image,
  Interest,
  Process,
  Request,
  Route,
  Send,
  Status,
  User,
} from './daos';
import { Database } from '../database';
import { MESSAGE_DATABASE_CONNECTION_SUCCESS } from '../../config/messages';
import { Monitor } from '../../helpers/monitor';
import { Environment } from '../../helpers/environment';

/**
 * Database connection to MongoDB.
 */
export class MongoDatabase extends Database {
  /**
   * Data access object for areas.
   */
  area: Area;

  /**
   * Data access object for articles.
   */
  article: Article;

  /**
   * Data access object for attempts.
   */
  attempt: Attempt;

  /**
   * Data access object for boulders.
   */
  boulder: Boulder;

  /**
   * Data access object for comments.
   */
  comment: Comment;

  /**
   * Data access object for crags.
   */
  crag: Crag;

  /**
   * Data access object for descriptions.
   */
  description: Description;

  /**
   * Data access object for images.
   */
  image: Image;

  /**
   * Data access object for interests.
   */
  interest: Interest;

  /**
   * Data access object for process.
   */
  process: Process;

  /**
   * Data access object for requests.
   */
  request: Request;

  /**
   * Data access object for routes.
   */
  route: Route;

  /**
   * Data access object for sends.
   */
  send: Send;

  /**
   * Data access object for status'.
   */
  status: Status;

  /**
   * Data access object for users.
   */
  user: User;

  /**
   * Instantiates MongoDatabase with correct queries.
   */
  constructor() {
    super();

    this.area = new Area();
    this.article = new Article();
    this.attempt = new Attempt();
    this.boulder = new Boulder();
    this.comment = new Comment();
    this.crag = new Crag();
    this.description = new Description();
    this.process = new Process();
    this.image = new Image();
    this.interest = new Interest();
    this.request = new Request();
    this.route = new Route();
    this.send = new Send();
    this.status = new Status();
    this.user = new User();
  }

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    const authorizedUrl = Environment.getDatabaseUrl()
      .replace(
        '<user>',
        Environment.getDatabaseUser(),
      )
      .replace(
        '<password>',
        Environment.getDatabasePassword(),
      );
    await connect(authorizedUrl);

    Monitor.log(
      MongoDatabase,
      MESSAGE_DATABASE_CONNECTION_SUCCESS,
      Monitor.Layer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return connection.readyState === 1;
  }
}

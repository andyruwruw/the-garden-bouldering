/**
 * Subobjects for physical representations.
 */

/**
 * Someone's opinion about the grade of a route.
 */
export interface GradeOpinion {
  /**
   * Base grade.
   */
  grade: number;

  /**
   * Subgrade modifier.
   */
  subGrade?: number;
}

/**
 * Subjective rating of route.
 */
export interface RatingOpinion {
  /**
   * Rating provided.
   */
  average: number;

  /**
   * How many votes this was created using.
   */
  votes?: number;
}

/**
 * Notable ascent types.
 */
export type AscentType = 'fa' | 'second';

/**
 * Notable ascents of the route.
 */
export interface AscentObject {
  /**
   * Guides this ascent is listed under.
   */
  guides: string[];

  /**
   * Type of ascent.
   */
  type?: AscentType;

  /**
   * Name of climber.
   */
  name: string;

  /**
   * Date this climb was made.
   */
  date?: string;
}

/**
 * Database related extendable objects.
 */

/**
 * Item from the database.
 */
export interface DatabaseItem {
  /**
   * Random Identifier.
   */
  _id?: string;
}

/**
 * Items with names.
 */
export interface NamedDatabaseItem extends DatabaseItem {
  /**
   * Name of the item.
   */
  name: string;
}

/**
 * Items with potentially multiple names.
 */
export interface NamableDatabaseItem extends NamedDatabaseItem {
  /**
   * Alternative names for the item.
   */
  altNames: string[];
}

/**
 * Items with external links.
 */
export interface ReferenceableDatabaseItem extends NamableDatabaseItem {
  /**
   * Externally used identifiers for the item.
   */
  externalIds: Record<string, string>;

  /**
   * Links to externally hosted instances of the item.
   */
  externalHrefs: Record<string, string>;
}

/**
 * Locatable database item.
 */
export interface LocatableItem extends ReferenceableDatabaseItem {
  /**
   * Latitude coordinates of the item.
   */
  latitude: number;

  /**
   * Longitude coordinates of the item.
   */
  longitude: number;

  /**
   * Elevation of the crag.
   */
  elevation: number;
}

/**
 * Link to another database object type.
 */
export type LinkType = 'crag' | 'boulder' | 'area' | 'route' | 'user' | 'comment' | 'article' | 'description' | 'image' | 'send' | 'attempt' | 'interest' | 'comment' | 'status';

/**
 * Item linking to another database item.
 */
export interface LinkItem extends DatabaseItem {
  /**
   * Type of item referenced to.
   */
  of: LinkType;

  /**
   * Identifier of the item referenced.
   */
  ref: string;
}

/**
 * Climb and physical objects.
 */

/**
 * Database crag type.
 */
export interface Crag extends LocatableItem {
  /**
   * SVG paths of the general shape of the item.
   */
  shape: string[];

  /**
   * Number of routes in the crag.
   */
  routes: number;

  /**
   * When the crag was updated.
   */
  updated: Date;

  /**
   * Images of the boulder.
   */
  images: string[];
}

/**
 * Database area type.
 */
export interface Area extends LocatableItem {
  /**
   * Crag this area belongs to.
   */
  crag: string;

  /**
   * Areas if any this area belongs to.
   */
  areas: string[];

  /**
   * SVG paths of the general shape of the item.
   */
  shape: string[];

  /**
   * Number of routes in the area.
   */
  routes: number;

  /**
   * When the area was updated.
   */
  updated: Date;

  /**
   * Images of the boulder.
   */
  images: string[];
}

/**
 * Database boulder type.
 */
export interface Boulder extends LocatableItem {
  /**
   * Crag this boulder belongs to.
   */
  crag: string;

  /**
   * Areas if any this boulder belongs to.
   */
  areas: string[];

  /**
   * SVG paths of the general shape of the item.
   */
  shape: string[];

  /**
   * Number of routes on the boulder.
   */
  routes: number;

  /**
   * When the boulder was updated.
   */
  updated: Date;

  /**
   * Images of the boulder.
   */
  images: string[];
}

/**
 * Database Route type.
 */
export interface Route extends ReferenceableDatabaseItem {
  /**
   * Crag this route belongs to.
   */
  crag: string;

  /**
   * Areas if any this route belongs to.
   */
  areas: string[];

  /**
   * Boulders if any this route belongs to.
   */
  boulders: string[];

  /**
   * Guides this route is included in.
   */
  guides: string[];

  /**
   * Radial position of route on boulder shape.
   */
  location: number;

  /**
   * Subjective grading of route.
   */
  grade: Record<string, GradeOpinion>;

  /**
   * Subjective rating of the route.
   */
  rating: Record<string, RatingOpinion>;

  /**
   * Provided tags for the route style.
   */
  tags: string[];

  /**
   * Important ascents.
   */
  ascents: AscentObject[];

  /**
   * Subjective danger ratings of the route.
   */
  danger: Record<string, number>;

  /**
   * Images of the route.
   */
  images: string[];
}

/**
 * General service objects.
 */

/**
 * Instance of data collection.
 */
export interface Process {
  /**
   * Versions of guides.
   */
  versions: Record<string, string>;

  /**
   * Date processing was done.
   */
  updated: Date;
}

/**
 * Links guide items to database items.
 */
export interface Reference extends LinkItem {
  /**
   * Identifier to the guide used.
   */
  guide: string;

  /**
   * Guide version.
   */
  version: string;

  /**
   * Guide identifier of the item.
   */
  id: string;

  /**
   * Name of the item in case references get confused.
   */
  name: string;
}

/**
 * User related objects.
 */

/**
 * Privacy settings for user.
 */
export type PrivacySetting = 'public' | 'unlisted' | 'private';

/**
 * Login users.
 */
export interface User extends NamedDatabaseItem {
  /**
   * User username.
   */
  username: string;

  /**
   * User password.
   */
  password?: string;

  /**
   * User bio.
   */
  bio: string;
  
  /**
   * User image.
   */
  image: string;

  /**
   * Birthday of user.
   */
  birthday: Date;

  /**
   * Max grade sent by user.
   */
  maxGrade: GradeOpinion;

  /**
   * When the user joined the service.
   */
  joined: Date;

  /**
   * When the user started climbing.
   */
  started: Date;

  /**
   * Whether the user is banned.
   */
  banned: boolean;

  /**
   * Whether the user is an admin.
   */
  admin: boolean;

  /**
   * User privacy settings.
   */
  privacy: PrivacySetting;
}

/**
 * Meta-data
 */

/**
 * Topo for an image.
 */
export interface TopoObject {
  /**
   * Route given a topo.
   */
  route: string;

  /**
   * Shape of the topo.
   */
  shape: string[];
}

/**
 * Types of images.
 */
export type ImageType = 'topo' | 'boulder' | 'action' | 'beta' | 'area' | 'hold' | 'historical';

/**
 * Images are stored separately and used broadly.
 */
export interface Image extends LinkItem {
  /**
   * Link to image.
   */
  href: string;

  /**
   * Type of image.
   */
  type: ImageType;

  /**
   * SVG path for outline of image.
   */
  shapes: string[];

  /**
   * Additional topos on image.
   */
  topos: TopoObject[];

  /**
   * Description of the image.
   */
  description: string;

  /**
   * Width of the image.
   */
  width: number;

  /**
   * Height of the image.
   */
  height: number;
}

/**
 * Type of article.
 */
export type ArticleType = 'history' | 'story' | 'beta';

/**
 * Article component types.
 */
export type ArticleContentType = 'link' | 'image' | 'paragraph' | 'header' | 'sub-header';

/**
 * Article component.
 */
export interface ArticleComponent {
  /**
   * Type of component.
   */
  type: ArticleContentType;

  /**
   * Text content if needed.
   */
  text?: string[];

  /**
   * Image identifier if needed.
   */
  image?: string;

  /**
   * Link href if needed.
   */
  href?: string;
}

/**
 * Article on items.
 */
export interface Article extends LinkItem {
  /**
   * Type of article.
   */
  type: ArticleType;

  /**
   * Title of the article.
   */
  title: string;

  /**
   * Components making up the article.
   */
  content: ArticleComponent[];

  /**
   * Author of the article.
   */
  author: string;

  /**
   * When the article was created.
   */
  created: Date;

  /**
   * When the article was updated.
   */
  updated: Date;
}

/**
   * Type of description.
   */
export type DescriptionType = 'beta' | 'description' | 'location' | 'ethics' | 'history' | 'protection';

/**
 * Description of an item.
 */
export interface Description extends LinkItem {
  /**
   * Type of description.
   */
  type: DescriptionType;

  /**
   * Text making up the description.
   */
  text: string[];

  /**
   * Guide this description comes from.
   */
  guide?: string;

  /**
   * Version of the guide this description comes from.
   */
  version?: string;

  /**
   * Author of this description.
   */
  author: string;

  /**
   * When this description was created.
   */
  created?: string;

  /**
   * When this description was updated.
   */
  updated: Date;

  /**
   * Link if needed.
   */
  href?: string;
}

/**
 * Type of request change.
 */
export type RequestType = 'name' | 'alt-names' | 'description' | 'grade' | 'tags';

/**
 * A request to change details.
 */
export interface ChangeRequest extends LinkItem {
  /**
   * Type of change.
   */
  type: RequestType;

  /**
   * New text.
   */
  text: string;

  /**
   * Identifier for user making request.
   */
  owner: string;

  /**
   * When this request was created.
   */
  created: Date;

  /**
   * When this request was approved.
   */
  approved: Date;
}

/**
 * Type of status report.
 */
export type StatusType = 'conditions' | 'cleanliness' | 'integrity';

/**
 * Status updates to an item.
 */
export interface Status extends LinkItem {
  /**
   * Type of status report.
   */
  type: StatusType;

  /**
   * Values of this status report.
   */
  values: string[];

  /**
   * Author of this status.
   */
  author: string;

  /**
   * When this status was submitted.
   */
  date: Date;
}

/**
 * User objects.
 */

/**
 * Comment on an item.
 */
export interface Comment extends LinkItem {
  /**
   * Text content of the comment.
   */
  text: string;

  /**
   * Identifier of author of comment.
   */
  author: string;

  /**
   * Date this comment was created.
   */
  created: Date;

  /**
   * Date this comment was updated.
   */
  updated: Date;

  /**
   * Date this comment was removed.
   */
  removed: Date;
}

/**
 * Types of interest.
 */
export type InterestType = 'project' | 'long-term-project' | 'interest' | 'cleaning';

/**
 * Way for climbers to profess interest in a given route.
 */
export interface Interest extends DatabaseItem {
  /**
   * Route in interest.
   */
  route: string;

  /**
   * Climber interested.
   */
  climber: string;

  /**
   * Type of interest.
   */
  type: InterestType;

  /**
   * When interest was professed.
   */
  created: Date;

  /**
   * Notes on interest.
   */
  notes: string;
}

/**
 * Types of attempts.
 */
export type AttemptType = 'redpoint' | 'iso' | 'casual';

/**
 * Logs climbers attempts on a route.
 */
export interface Attempt extends DatabaseItem {
  /**
   * Route attempted.
   */
  route: string;

  /**
   * Climber identifier.
   */
  climber: string;

  /**
   * Attempts made.
   */
  attempts: number;

  /**
   * Type of attempts
   */
  type: AttemptType;

  /**
   * Notes on attempts.
   */
  notes: string;

  /**
   * When this attempt was made.
   */
  created: Date;

  /**
   * Link if applicable.
   */
  href?: string;

  /**
   * Number of likes.
   */
  likes: string[];
}

/**
 * Type of send.
 */
export type SendType = 'redpoint' | 'roped';

/**
 * Logs climbers send on a route.
 */
export interface Send extends DatabaseItem {
  /**
   * Route sent.
   */
  route: string;

  /**
   * Climber identifier.
   */
  climber: string;

  /**
   * Attempts made.
   */
  attempts: number;

  /**
   * Number of laps made.
   */
  laps: number;

  /**
   * Type of send.
   */
  type: SendType;

  /**
   * Notes on send.
   */
  notes: string;

  /**
   * When this was sent.
   */
  created: Date;

  /**
   * Link if applicable.
   */
  href?: string;

  /**
   * Number of likes.
   */
  likes: string[];
}

export interface RequestConfirmation {
  success: boolean;
}

export interface SearchResponse {
  areas: Area[];

  articles: Article[];

  boulders: Boulder[];

  crags: Crag[];

  routes: Route[];
}

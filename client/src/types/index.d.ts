// Types
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';
import { 
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

export type ClimbingRequest = VercelRequest | ExpressRequest;

export type ClimbingResponse = VercelResponse | ExpressResponse;

export type ItemType = 'area' | 'boulder' | 'route';

export type DescriptionType = 'beta' | 'description' | 'location' | 'ethics' | 'history' | 'protection';

export type ShapeLinkType = 'hold' | 'user' | 'boulder' | 'area' | 'image';

export type ImageType = 'topo' | 'boulder' | 'action' | 'beta' | 'area' | 'hold';

export type ImageSize = 'small' | 'medium' | 'large';

export interface ItemLink {
  type: ItemType;

  id: string;
}

export interface ExternalIds extends Record<string, string> {
  child?: string;

  oldGuide?: string;

  mountainProject?: string;
}

export interface ExternalHrefs extends Record<string, string> {
  mountainProject?: string;
}

export interface GradeOpinion {
  grade: number;

  subGrade?: number;
}

export interface AscentObject {
  guides: string[];

  type?: string;

  name: string;

  date?: string;
}

export interface GradeObject extends Record<string, GradeOpinion> {
  voted?: GradeOpinion;

  child?: GradeOpinion;

  oldGuide?: GradeOpinion;

  mountainProject?: GradeOpinion;
}

export interface RatingOpinion {
  average: number;

  votes: number;
}

export interface DangerObject extends Record<string, number> {
  voted?: number;

  child?: number;

  mountainProject?: number;
}

export interface RatingObject extends Record<string, RatingOpinion> {
  voted?: RatingOpinion;

  child?: RatingOpinion;

  mountainProject?: RatingOpinion;
}

export interface Coordinates {
  lat: number;

  long: number;
}

export interface ShapeLinks {
  shape: string;

  type: ShapeLinkType;
  
  link: string;
}

export interface LocatableItem {
  _id?: string;

  name: string;

  altNames: string[];

  externalIds: ExternalIds;

  externalHrefs: ExternalHrefs;

  shape: string[];

  location: Coordinates;
}

export interface Crag extends LocatableItem {
  guides: string[];
}

export interface Area extends LocatableItem {
  guides: string[];

  crag: string;
}

export interface Boulder extends LocatableItem {
  guides: string[];

  crag: string;

  areas: string[];
}

export interface Route {
  _id?: string;

  guides: string[];

  crag: string;

  areas: string[];

  boulders: string[];

  externalIds: ExternalIds;

  externalHrefs: ExternalHrefs;

  name: string;

  altNames: string[];

  location: number;

  grade: GradeObject;

  rating: RatingObject;

  tags: string[];

  ascents: AscentObject[];

  danger: DangerObject;
}

export interface Description {
  _id?: string;

  guide: string;

  link: ItemLink;

  type: DescriptionType;

  text: string;

  owner: string;

  date: string;

  updated: Date;

  href: string;
}

export type RequestType = 'name' | 'alt-names' | 'description' | 'grade' | 'tags';

export interface Request {
  _id?: string;

  link: ItemLink;

  type: RequestType;

  ref: string;

  text: string;

  owner: string;

  date: string;
}

export interface Comment {
  _id?: string;

  link: ItemLink;

  text: string;

  owner: string;

  date: Date;

  updated: Date;
}

export interface Image {
  _id: string;

  href: string;

  link?: ItemLink;

  type: ImageType;

  shapes?: ShapeLinks[];

  description?: string;

  size: string;
}

export type SendType = 'redpoint';

export interface Send {
  _id?: string;

  route: string;

  climber: string;

  attempts: number;

  laps: number;

  type: SendType;

  notes?: string;

  date: String;
}

export interface Attempt {
  _id?: string;

  route: string;

  climber: string;

  attempts: number;

  type: SendType;

  notes?: string;

  date: String;
}

export interface Process {
  versions: Record<string, string>;

  updated: Date;
}

export type InterestType = 'project' | 'long-term-project' | 'interest';

export interface Interest {
  _id?: string;

  route: string;

  climber: string;

  type: InterestType;

  date: String;
}

export interface Status {
  link: ItemLink;

  type: String;

  value: string[];

  owner: string;

  date: Date;
}

export interface User {
  _id?: string;

  image: string;

  name: string;

  username: string;

  password?: string;

  joined: Date;

  started: Date;

  birthday: Date;

  maxGrade: GradeOpinion;

  banned: boolean;

  admin: boolean;
}

export type ArticleType = 'history' | 'story' | 'beta';

export type ArticleContentType = 'link' | 'image' | 'paragraph' | 'header' | 'sub-header';

export interface ArticleContent {
  text: string;

  href: string;

  type: ArticleContentType;
}

export interface Article {
  link: ItemLink[];

  type: ArticleType;

  content: ArticleContent[];

  owner: string;

  created: Date;

  updated: Date;
}

/**
 * Types of data in the database.
 */
export type DatabaseColumnTypes = string | number | boolean | Date | string[] | number[];

/**
 * Filter object used to limit queries.
 */
export interface QueryFilter {
  [key: string]: DatabaseColumnTypes
  | DatabaseColumnTypes[]
  | Record<string, DatabaseColumnTypes
  | DatabaseColumnTypes[]>;
}

/**
 * Projection on queries to limit columns.
 */
export type QueryProjection = Record<string, number> | string | string[];

/**
 * Update object used to update data in the database.
 */
export interface UpdateQuery {
  [key: string]: DatabaseColumnTypes | Record<string, DatabaseColumnTypes>;
}

/**
 * Interface for data access objects.
 */
export interface DataAccessObject<T> {
  _create: (item: T) => Promise<T>;
  create: (...args: any[]) => Promise<T>;

  findOne: (
    filter?: QueryFilter,
    projection?: QueryProjection,
  ) => Promise<T | null>;

  find: (
    filter?: QueryFilter,
    projection?: QueryProjection,
    offset?: number,
    limit?: number,
  ) => Promise<T[]>;

  findById: (id: string) => Promise<T | null>;

  delete: (filter?: QueryFilter) => Promise<number>;

  deleteById: (id: string) => Promise<boolean>;

  updateOne: (
    filter?: QueryFilter,
    update?: UpdateQuery,
    insertNew?: boolean,
  ) => Promise<boolean>;

  updateMany: (
    filter?: QueryFilter,
    update?: UpdateQuery,
    insertNew?: boolean,
  ) => Promise<number>;

  clear: () => Promise<void>;
}

/**
 * Nullable type for abstract class.
 */
export type NullableDataAccessObject<T> = DataAccessObject<T> | null;

/**
 * Confirmation of a request.
 */
export interface RequestConfirmation {
  success: boolean;
}

/**
 * Response to search request.
 */
export interface SearchResponse {
  crags?: Crag[];

  area?: Area[];

  boulder?: Boulder[];

  routes?: Route[];

  article?: Article[];

  beta?: Beta[];

  user?: User[];
}
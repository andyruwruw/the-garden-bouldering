// Local Imports
import { Description } from './description';

// Types
import {
  AscentObject,
  DangerObject,
  ExternalHrefs,
  ExternalIds,
  GradeObject,
  RatingObject,
} from '../../types';

/**
 * Data structure for routes.
 */
export class Route {
  /**
   * Database ID for the item.
   */
  _id: string = '';

  /**
   * Guides this route is included in.
   */
  _guides: string[] = [];

  /**
   * The crag this route is in.
   */
  _crag: string = '';

  /**
   * The areas this route is in.
   */
  _areas: string[] = [];

  /**
   * The areas this route is in.
   */
  _boulders: string[] = [];

  /**
   * External IDs for the route.
   */
  _externalIds: ExternalIds = {};

  /**
   * External HREFs for the route.
   */
  _externalHrefs: ExternalHrefs = {};

  /**
   * Name of the route.
   */
  _name: string = '';

  /**
   * Alternative names for the route.
   */
  _altNames: string[] = [];

  /**
   * Location of the route.
   */
  _location: number = 0;

  /**
   * Subjective grades on the route.
   */
  _grade: GradeObject = {};

  /**
   * Subjective ratings of the route.
   */
  _rating: RatingObject = {};

  /**
   * Style tags.
   */
  _tags: string[] = [];

  /**
   * Notable sends.
   */
  _ascents: AscentObject[] = [];

  /**
   * Danger object.
   */
  _danger: DangerObject = {};

  /**
   * Children of this route.
   */
  _children: (Route | Description)[] = [];

  /**
   * Sets the ID for the route.
   *
   * @param {string} id Id of the route. 
   */
  setId(id: string): void {
    this._id = id;
  }

  /**
   * Retrieves the ID for the route.
   *
   * @returns {string} ID for the route.
   */
  getId(): string {
    return this._id;
  }

  /**
   * Sets the name for the route.
   *
   * @param {string} name Name of the route. 
   */
  setName(name: string): void {
    this._name = name;
  }

  /**
   * Retrieves the name for the route.
   *
   * @returns {string} Name for the route.
   */
  getName(): string {
    return this._name;
  }

  /**
   * Sets the alternate names for the route.
   *
   * @param {string[]} altNames Alternate names of the route. 
   */
  setAltNames(altNames: string[]): void {
    this._altNames = altNames;
  }

  /**
   * Retrieves alternate names for the route.
   *
   * @returns {string[]} Alternate names for the route.
   */
  getAltNames(): string[] {
    return this._altNames;
  }

  /**
   * Sets the external IDs for the route.
   *
   * @param {ExternalIds} externalIds External IDs of the route. 
   */
  setExternalIds(externalIds: ExternalIds): void {
    this._externalIds = externalIds;
  }

  /**
   * Retrieves external IDs for the route.
   *
   * @returns {ExternalIds} External IDs for the route.
   */
  getExternalIds(): ExternalIds {
    return this._externalIds;
  }

  /**
   * Sets the external HREFs for the route.
   *
   * @param {ExternalHrefs} externalHrefs External HREFs of the route. 
   */
  setExternalHrefs(externalHrefs: ExternalHrefs): void {
    this._externalHrefs = externalHrefs;
  }

  /**
   * Retrieves external HREFs for the route.
   *
   * @returns {ExternalHrefs} External HREFs for the route.
   */
  getExternalHrefs(): ExternalHrefs {
    return this._externalHrefs;
  }

  /**
   * Sets the location for the route.
   *
   * @param {number} location Location of the route. 
   */
  setLocation(location: number): void {
    this._location = location;
  }

  /**
   * Retrieves location for the route.
   *
   * @returns {number} Location for the route.
   */
  getLocation(): number {
    return this._location;
  }

  /**
   * Sets the guides for the route.
   *
   * @param {string[]} guides Guides of the route. 
   */
  setGuides(guides: string[]): void {
    this._guides = guides;
  }

  /**
   * Retrieves guides for the route.
   *
   * @returns {string[]} Guides for the route.
   */
  getGuides(): string[] {
    return this._guides;
  }

  /**
   * Whether a guide is included.
   *
   * @param {string} guide Guide name.
   * @returns {boolean} Whether a guide is included.
   */
  guidesInclude(guide: string): boolean {
    return this._guides.includes(guide);
  }

  /**
   * Sets the crag for the route.
   *
   * @param {string} crag Crag of the route. 
   */
  setCrag(crag: string): void {
    this._crag = crag;
  }

  /**
   * Retrieves the crag for the route.
   *
   * @returns {string} Crag for the route.
   */
  getCrag(): string {
    return this._crag;
  }

  /**
   * Sets the areas for the route.
   *
   * @param {string[]} areas Areas of the route. 
   */
  setAreas(areas: string[]): void {
    this._areas = areas;
  }

  /**
   * Retrieves areas for the route.
   *
   * @returns {string[]} Areas for the route.
   */
  getAreas(): string[] {
    return this._areas;
  }

  /**
   * Sets the boulders for the route.
   *
   * @param {string[]} boulders Boulders of the route. 
   */
  setBoulders(boulders: string[]): void {
    this._boulders = boulders;
  }

  /**
   * Retrieves boulders for the route.
   *
   * @returns {string[]} Boulders for the route.
   */
  getBoulders(): string[] {
    return this._boulders;
  }

  /**
   * Sets the grade for the route.
   *
   * @param {GradeObject} grade Grade of the route. 
   */
  setGrade(grade: GradeObject): void {
    this._grade = grade;
  }

  /**
   * Retrieves grade for the route.
   *
   * @returns {GradeObject} Grade for the route.
   */
  getGrade(): GradeObject {
    return this._grade;
  }

  /**
   * Sets the rating for the route.
   *
   * @param {RatingObject} rating Rating of the route. 
   */
  setRating(rating: RatingObject): void {
    this._rating = rating;
  }

  /**
   * Retrieves rating for the route.
   *
   * @returns {RatingObject} Rating for the route.
   */
  getRating(): RatingObject {
    return this._rating;
  }

  /**
   * Sets the tags for the route.
   *
   * @param {string[]} tags Tags of the route. 
   */
  setTags(tags: string[]): void {
    this._tags = tags;
  }

  /**
   * Retrieves tags for the route.
   *
   * @returns {string[]} Tags for the route.
   */
  getTags(): string[] {
    return this._tags;
  }

  /**
   * Sets the ascents for the route.
   *
   * @param {AscentObject[]} ascents Ascents of the route. 
   */
  setAscents(ascents: AscentObject[]): void {
    this._ascents = ascents;
  }

  /**
   * Retrieves ascents for the route.
   *
   * @returns {AscentObject[]} Ascents for the route.
   */
  getAscents(): AscentObject[] {
    return this._ascents;
  }

  /**
   * Sets the danger for the route.
   *
   * @param {DangerObject} danger Danger of the route. 
   */
  setDanger(danger: DangerObject): void {
    this._danger = danger;
  }

  /**
   * Retrieves danger for the route.
   *
   * @returns {DangerObject} Danger for the route.
   */
  getDanger(): DangerObject {
    return this._danger;
  }

  /**
   * Sets this item's children.
   *
   * @param {(Route | Description)[]} children Item's children.
   */
  setChildren(children: (Route | Description)[]): void {
    this._children = children;
  }

  /**
   * Pushes a new child.
   *
   * @param {Route | Description} child Item's child.
   */
  push(child: Route | Description): void {
    this._children.push(child);
  }

  /**
   * Retrieves a child at a given index.
   *
   * @param {number} index Index to retrieve from.
   * @returns {Route | Description} Child at that index.
   */
  at(index: number): Route | Description {
    return this._children[index];
  }

  /**
   * Retrieves all children routes.
   *
   * @returns {Route[]} Children routes.
   */
  getChildARoutes(): Route[] {
    return this._children
      .filter((child: Route | Description): boolean => (child instanceof Route)) as Route[];
  }

  /**
   * Retrieves all children descriptions.
   *
   * @returns {Description[]} Children descriptions.
   */
  getChildADescriptions(): Description[] {
    return this._children
      .filter((child: Route | Description): boolean => (child instanceof Description)) as Description[];
  }

  /**
   * Retrieves the length of children.
   *
   * @returns {number} Length of children.
   */
  length(): number {
    return this._children.length;
  }

  /**
   * Retrieves this item's children.
   *
   * @returns {(Route | Description)[]} Item's children.
   */
  getChildren(): (Route | Description)[] {
    return this._children;
  }

  /**
   * Prints object as string.
   */
  log(depth: number = 0): void {
    const spacing = new Array(depth).fill(' ');

    console.log(spacing.join(), 'Route:', this._name, this._grade, this._rating, this._danger);

    for (let i = 0; i < this._children.length; i += 1) {
      this._children[i].log(depth + 1);
    }
  }
}

// Local Imports
import { Area } from './area';
import { Description } from './description';
import { Route } from './route';

// Types
import {
  Coordinates,
  ExternalHrefs,
  ExternalIds,
} from '../../types';

/**
 * Data structure for boulders.
 */
export class Boulder {
  /**
   * Database ID for the item.
   */
  _id: string = '';

  /**
   * Name of the boulder.
   */
  _name: string = '';

  /**
   * Alternative names for the boulder.
   */
  _altNames: string[] = [];

  /**
   * External IDs for the boulder.
   */
  _externalIds: ExternalIds = {};

  /**
   * External HREFs for the boulder.
   */
  _externalHrefs: ExternalHrefs = {};

  /**
   * Shape of the boulder.
   */
  _shape: string[] = [];

  /**
   * Location of the boulder.
   */
  _location: Coordinates = {
    lat: 0,
    long: 0,
  };

  /**
   * Guides this boulder is included in.
   */
  _guides: string[] = [];

  /**
   * The crag this boulder is in.
   */
  _crag: string = '';

  /**
   * The areas this boulder is in.
   */
  _areas: string[] = [];

  /**
   * Children of this boulder.
   */
  _children: (Area | Boulder | Route | Description)[] = [];

  /**
   * Sets the ID for the boulder.
   *
   * @param {string} id Id of the boulder. 
   */
  setId(id: string): void {
    this._id = id;
  }

  /**
   * Retrieves the ID for the boulder.
   *
   * @returns {string} ID for the boulder.
   */
  getId(): string {
    return this._id;
  }

  /**
   * Sets the name for the boulder.
   *
   * @param {string} name Name of the boulder. 
   */
  setName(name: string): void {
    this._name = name;
  }

  /**
   * Retrieves the name for the boulder.
   *
   * @returns {string} Name for the boulder.
   */
  getName(): string {
    return this._name;
  }

  /**
   * Sets the alternate names for the boulder.
   *
   * @param {string[]} altNames Alternate names of the boulder. 
   */
  setAltNames(altNames: string[]): void {
    this._altNames = altNames;
  }

  /**
   * Retrieves alternate names for the boulder.
   *
   * @returns {string[]} Alternate names for the boulder.
   */
  getAltNames(): string[] {
    return this._altNames;
  }

  /**
   * Sets the external IDs for the boulder.
   *
   * @param {ExternalIds} externalIds External IDs of the boulder. 
   */
  setExternalIds(externalIds: ExternalIds): void {
    this._externalIds = externalIds;
  }

  /**
   * Retrieves external IDs for the boulder.
   *
   * @returns {ExternalIds} External IDs for the boulder.
   */
  getExternalIds(): ExternalIds {
    return this._externalIds;
  }

  /**
   * Sets the external HREFs for the boulder.
   *
   * @param {ExternalHrefs} externalHrefs External HREFs of the boulder. 
   */
  setExternalHrefs(externalHrefs: ExternalHrefs): void {
    this._externalHrefs = externalHrefs;
  }

  /**
   * Retrieves external HREFs for the boulder.
   *
   * @returns {ExternalHrefs} External HREFs for the boulder.
   */
  getExternalHrefs(): ExternalHrefs {
    return this._externalHrefs;
  }

  /**
   * Sets the shapes for the boulder.
   *
   * @param {string[]} shape Shapes of the boulder. 
   */
  setShapes(shape: string[]): void {
    this._shape = shape;
  }

  /**
   * Retrieves shape for the boulder.
   *
   * @returns {string[]} Shape for the boulder.
   */
  getShapes(): string[] {
    return this._shape;
  }

  /**
   * Sets the location for the boulder.
   *
   * @param {Coordinates} location Location of the boulder. 
   */
  setLocation(location: Coordinates): void {
    this._location = location;
  }

  /**
   * Retrieves location for the boulder.
   *
   * @returns {Coordinates} Location for the boulder.
   */
  getLocation(): Coordinates {
    return this._location;
  }

  /**
   * Sets the latitude for the boulder.
   *
   * @param {number} latitude Latitude of the boulder. 
   */
  setLatitude(latitude: number): void {
    this._location.lat = latitude;
  }

  /**
   * Retrieves latitude for the boulder.
   *
   * @returns {number} Latitude for the boulder.
   */
  getLatitude(): number {
    return this._location.lat;
  }

  /**
   * Sets the longitude for the boulder.
   *
   * @param {number} longitude longitude of the boulder. 
   */
  setLongitude(longitude: number): void {
    this._location.long = longitude;
  }

  /**
   * Retrieves longitude for the boulder.
   *
   * @returns {number} Longitude for the boulder.
   */
  getLongitude(): number {
    return this._location.long;
  }

  /**
   * Sets the guides for the boulder.
   *
   * @param {string[]} guides Guides of the boulder. 
   */
  setGuides(guides: string[]): void {
    this._guides = guides;
  }

  /**
   * Retrieves guides for the boulder.
   *
   * @returns {string[]} Guides for the boulder.
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
   * Sets the crag for the boulder.
   *
   * @param {string} crag Crag of the boulder. 
   */
  setCrag(crag: string): void {
    this._crag = crag;
  }

  /**
   * Retrieves the crag for the boulder.
   *
   * @returns {string} Crag for the boulder.
   */
  getCrag(): string {
    return this._crag;
  }

  /**
   * Sets the areas for the boulder.
   *
   * @param {string[]} areas Areas of the boulder. 
   */
  setAreas(areas: string[]): void {
    this._areas = areas;
  }

  /**
   * Retrieves areas for the boulder.
   *
   * @returns {string[]} Areas for the boulder.
   */
  getAreas(): string[] {
    return this._areas;
  }

  /**
   * Sets this item's children.
   *
   * @param {(Area | Boulder | Route | Description)[]} children Item's children.
   */
  setChildren(children: (Area | Boulder | Route | Description)[]): void {
    this._children = children;
  }

  /**
   * Pushes a new child.
   *
   * @param {Area | Boulder | Route | Description} child Item's child.
   */
  push(child: Area | Boulder | Route | Description): void {
    this._children.push(child);
  }

  /**
   * Retrieves a child at a given index.
   *
   * @param {number} index Index to retrieve from.
   * @returns {Area | Boulder | Route | Description} Child at that index.
   */
  at(index: number): Area | Boulder | Route | Description {
    return this._children[index];
  }

  /**
   * Retrieves all children areas.
   *
   * @returns {Area[]} Children areas.
   */
  getChildAreas(): Area[] {
    return this._children
      .filter((child: Area | Boulder | Route | Description): boolean => (child instanceof Area)) as Area[];
  }

  /**
   * Retrieves all children boulders.
   *
   * @returns {Boulder[]} Children boulders.
   */
  getChildBoulders(): Boulder[] {
    return this._children
      .filter((child: Area | Boulder | Route | Description): boolean => (child instanceof Boulder)) as Boulder[];
  }

  /**
   * Retrieves all children routes.
   *
   * @returns {Route[]} Children routes.
   */
  getChildRoutes(): Route[] {
    return this._children
      .filter((child: Area | Boulder | Route | Description): boolean => (child instanceof Route)) as Route[];
  }

  /**
   * Retrieves all children descriptions.
   *
   * @returns {Description[]} Children descriptions.
   */
  getChildDescriptions(): Description[] {
    return this._children
      .filter((child: Area | Boulder | Route | Description): boolean => (child instanceof Description)) as Description[];
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
   * @returns {(Area | Boulder | Route | Description)[]} Item's children.
   */
  getChildren(): (Area | Boulder | Route | Description)[] {
    return this._children;
  }
}

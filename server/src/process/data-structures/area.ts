// Local Imports
import { Boulder } from './boulder';
import { Description } from './description';
import { Route } from './route';

// Types
import {
  Coordinates,
  ExternalHrefs,
  ExternalIds,
} from '../../types';

/**
 * Data structure for areas.
 */
export class Area {
  /**
   * Database ID for the item.
   */
  _id: string = '';

  /**
   * Name of the area.
   */
  _name: string = '';

  /**
   * Alternative names for the area.
   */
  _altNames: string[] = [];

  /**
   * External IDs for the area.
   */
  _externalIds: ExternalIds = {};

  /**
   * External HREFs for the area.
   */
  _externalHrefs: ExternalHrefs = {};

  /**
   * Shape of the area.
   */
  _shape: string[] = [];

  /**
   * Location of the area.
   */
  _location: Coordinates = {
    lat: 0,
    long: 0,
  };

  /**
   * Guides this area is included in.
   */
  _guides: string[] = [];

  /**
   * The crag this area is in.
   */
  _crag: string = '';

  /**
   * Children of this area.
   */
  _children: (Area | Boulder | Route | Description)[] = [];

  /**
   * Sets the ID for the area.
   *
   * @param {string} id Id of the area. 
   */
  setId(id: string): void {
    this._id = id;
  }

  /**
   * Retrieves the ID for the area.
   *
   * @returns {string} ID for the area.
   */
  getId(): string {
    return this._id;
  }

  /**
   * Sets the name for the area.
   *
   * @param {string} name Name of the area. 
   */
  setName(name: string): void {
    this._name = name;
  }

  /**
   * Retrieves the name for the area.
   *
   * @returns {string} Name for the area.
   */
  getName(): string {
    return this._name;
  }

  /**
   * Sets the alternate names for the area.
   *
   * @param {string[]} altNames Alternate names of the area. 
   */
  setAltNames(altNames: string[]): void {
    this._altNames = altNames;
  }

  /**
   * Retrieves alternate names for the area.
   *
   * @returns {string[]} Alternate names for the area.
   */
  getAltNames(): string[] {
    return this._altNames;
  }

  /**
   * Sets the external IDs for the area.
   *
   * @param {ExternalIds} externalIds External IDs of the area. 
   */
  setExternalIds(externalIds: ExternalIds): void {
    this._externalIds = externalIds;
  }

  /**
   * Retrieves external IDs for the area.
   *
   * @returns {ExternalIds} External IDs for the area.
   */
  getExternalIds(): ExternalIds {
    return this._externalIds;
  }

  /**
   * Sets the external HREFs for the area.
   *
   * @param {ExternalHrefs} externalHrefs External HREFs of the area. 
   */
  setExternalHrefs(externalHrefs: ExternalHrefs): void {
    this._externalHrefs = externalHrefs;
  }

  /**
   * Retrieves external HREFs for the area.
   *
   * @returns {ExternalHrefs} External HREFs for the area.
   */
  getExternalHrefs(): ExternalHrefs {
    return this._externalHrefs;
  }

  /**
   * Sets the shapes for the area.
   *
   * @param {string[]} shape Shapes of the area. 
   */
  setShapes(shape: string[]): void {
    this._shape = shape;
  }

  /**
   * Retrieves shape for the area.
   *
   * @returns {string[]} Shape for the area.
   */
  getShapes(): string[] {
    return this._shape;
  }

  /**
   * Sets the location for the area.
   *
   * @param {Coordinates} location Location of the area. 
   */
  setLocation(location: Coordinates): void {
    this._location = location;
  }

  /**
   * Retrieves location for the area.
   *
   * @returns {Coordinates} Location for the area.
   */
  getLocation(): Coordinates {
    return this._location;
  }

  /**
   * Sets the latitude for the area.
   *
   * @param {number} latitude Latitude of the area. 
   */
  setLatitude(latitude: number): void {
    this._location.lat = latitude;
  }

  /**
   * Retrieves latitude for the area.
   *
   * @returns {number} Latitude for the area.
   */
  getLatitude(): number {
    return this._location.lat;
  }

  /**
   * Sets the longitude for the area.
   *
   * @param {number} longitude longitude of the area. 
   */
  setLongitude(longitude: number): void {
    this._location.long = longitude;
  }

  /**
   * Retrieves longitude for the area.
   *
   * @returns {number} Longitude for the area.
   */
  getLongitude(): number {
    return this._location.long;
  }

  /**
   * Sets the guides for the area.
   *
   * @param {string[]} guides Guides of the area. 
   */
  setGuides(guides: string[]): void {
    this._guides = guides;
  }

  /**
   * Retrieves guides for the area.
   *
   * @returns {string[]} Guides for the area.
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
   * Sets the crag for the area.
   *
   * @param {string} crag Crag of the area. 
   */
  setCrag(crag: string): void {
    this._crag = crag;
  }

  /**
   * Retrieves the crag for the area.
   *
   * @returns {string} Crag for the area.
   */
  getCrag(): string {
    return this._crag;
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

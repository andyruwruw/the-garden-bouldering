// Local Imports
import { Area } from './area';
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
 * Data structure for crags.
 */
export class Crag {
  /**
   * Database ID for the item.
   */
  _id: string = '';

  /**
   * Name of the crag.
   */
  _name: string = '';

  /**
   * Alternative names for the crag.
   */
  _altNames: string[] = [];

  /**
   * External IDs for the crag.
   */
  _externalIds: ExternalIds = {};

  /**
   * External HREFs for the crag.
   */
  _externalHrefs: ExternalHrefs = {};

  /**
   * Shape of the crag.
   */
  _shape: string[] = [];

  /**
   * Location of the crag.
   */
  _location: Coordinates = {
    lat: 0,
    long: 0,
  };

  /**
   * Guides this crag is included in.
   */
  _guides: string[] = [];

  /**
   * Children of this crag.
   */
  _children: (Area | Boulder | Route | Description)[] = [];

  /**
   * Sets the ID for the crag.
   *
   * @param {string} id Id of the crag. 
   */
  setId(id: string): void {
    this._id = id;
  }

  /**
   * Retrieves the ID for the crag.
   *
   * @returns {string} ID for the crag.
   */
  getId(): string {
    return this._id;
  }

  /**
   * Sets the name for the crag.
   *
   * @param {string} name Name of the crag. 
   */
  setName(name: string): void {
    this._name = name;
  }

  /**
   * Retrieves the name for the crag.
   *
   * @returns {string} Name for the crag.
   */
  getName(): string {
    return this._name;
  }

  /**
   * Sets the alternate names for the crag.
   *
   * @param {string[]} altNames Alternate names of the crag. 
   */
  setAltNames(altNames: string[]): void {
    this._altNames = altNames;
  }

  /**
   * Retrieves alternate names for the crag.
   *
   * @returns {string[]} Alternate names for the crag.
   */
  getAltNames(): string[] {
    return this._altNames;
  }

  /**
   * Sets the external IDs for the crag.
   *
   * @param {ExternalIds} externalIds External IDs of the crag. 
   */
  setExternalIds(externalIds: ExternalIds): void {
    this._externalIds = externalIds;
  }

  /**
   * Retrieves external IDs for the crag.
   *
   * @returns {ExternalIds} External IDs for the crag.
   */
  getExternalIds(): ExternalIds {
    return this._externalIds;
  }

  /**
   * Sets the external HREFs for the crag.
   *
   * @param {ExternalHrefs} externalHrefs External HREFs of the crag. 
   */
  setExternalHrefs(externalHrefs: ExternalHrefs): void {
    this._externalHrefs = externalHrefs;
  }

  /**
   * Retrieves external HREFs for the crag.
   *
   * @returns {ExternalHrefs} External HREFs for the crag.
   */
  getExternalHrefs(): ExternalHrefs {
    return this._externalHrefs;
  }

  /**
   * Sets the shapes for the crag.
   *
   * @param {string[]} shape Shapes of the crag. 
   */
  setShapes(shape: string[]): void {
    this._shape = shape;
  }

  /**
   * Retrieves shape for the crag.
   *
   * @returns {string[]} Shape for the crag.
   */
  getShapes(): string[] {
    return this._shape;
  }

  /**
   * Sets the location for the crag.
   *
   * @param {Coordinates} location Location of the crag. 
   */
  setLocation(location: Coordinates): void {
    this._location = location;
  }

  /**
   * Retrieves location for the crag.
   *
   * @returns {Coordinates} Location for the crag.
   */
  getLocation(): Coordinates {
    return this._location;
  }

  /**
   * Sets the latitude for the crag.
   *
   * @param {number} latitude Latitude of the crag. 
   */
  setLatitude(latitude: number): void {
    this._location.lat = latitude;
  }

  /**
   * Retrieves latitude for the crag.
   *
   * @returns {number} Latitude for the crag.
   */
  getLatitude(): number {
    return this._location.lat;
  }

  /**
   * Sets the longitude for the crag.
   *
   * @param {number} longitude longitude of the crag. 
   */
  setLongitude(longitude: number): void {
    this._location.long = longitude;
  }

  /**
   * Retrieves longitude for the crag.
   *
   * @returns {number} Longitude for the crag.
   */
  getLongitude(): number {
    return this._location.long;
  }

  /**
   * Sets the guides for the crag.
   *
   * @param {string[]} guides Guides of the crag. 
   */
  setGuides(guides: string[]): void {
    this._guides = guides;
  }

  /**
   * Retrieves guides for the crag.
   *
   * @returns {string[]} Guides for the crag.
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

  /**
   * Prints object as string.
   */
  log(depth: number = 0): void {
    const spacing = new Array(depth).fill(' ');

    console.log(spacing.join(), 'Crag:', this._name);

    for (let i = 0; i < this._children.length; i += 1) {
      this._children[i].log(depth + 1);
    }
  }
}

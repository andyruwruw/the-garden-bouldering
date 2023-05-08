// Types
import {
  DescriptionType,
  ItemLink,
} from '../../types';

/**
 * Data structure for descriptions.
 */
export class Description {
  /**
   * Database ID for the item.
   */
  _id: string = '';

  /**
   * Guides this description is included in.
   */
  _guide: string = '';

  /**
   * Object this links to.
   */
  _link: ItemLink = {
    type: 'route',
    id: '',
  };

  /**
   * Type of description.
   */
  _type: DescriptionType = 'description';

  /**
   * Text of the description
   */
  _text: string = '';

  /**
   * Owner of this description.
   */
  _owner: string = 'Unknown';

  /**
   * Date this description was written.
   */
  _date: string = 'Unknown';

  /**
   * When this description was updated.
   */
  _updated: Date = new Date();

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
   * Sets the guide for the crag.
   *
   * @param {string} guide Guide of the crag. 
   */
  setGuide(guide: string): void {
    this._guide = guide;
  }

  /**
   * Retrieves guide for the crag.
   *
   * @returns {string} Guide for the crag.
   */
  getGuide(): string {
    return this._guide;
  }

  /**
   * Whether this is a matching guide.
   *
   * @param {string} guide Guide name.
   * @returns {boolean} Whether this is a matching guide.
   */
  guidesInclude(guide: string): boolean {
    return this._guide === guide;
  }

  /**
   * Sets the link for the crag.
   *
   * @param {ItemLink} link Link of the crag. 
   */
  setLink(link: ItemLink): void {
    this._link = link;
  }

  /**
   * Retrieves link for the crag.
   *
   * @returns {ItemLink} Link for the crag.
   */
  getLink(): ItemLink {
    return this._link;
  }

  /**
   * Sets the type for the crag.
   *
   * @param {DescriptionType} type Type of the crag. 
   */
  setType(type: DescriptionType): void {
    this._type = type;
  }

  /**
   * Retrieves type for the crag.
   *
   * @returns {DescriptionType} Type for the crag.
   */
  getType(): DescriptionType {
    return this._type;
  }

  /**
   * Sets the text for the crag.
   *
   * @param {string} text Text of the crag. 
   */
  setText(text: string): void {
    this._text = text;
  }

  /**
   * Retrieves text for the crag.
   *
   * @returns {string} Text for the crag.
   */
  getText(): string {
    return this._text;
  }

  /**
   * Sets the owner for the crag.
   *
   * @param {string} owner Owner of the crag. 
   */
  setOwner(owner: string): void {
    this._owner = owner;
  }

  /**
   * Retrieves owner for the crag.
   *
   * @returns {string} Owner for the crag.
   */
  getOwner(): string {
    return this._owner;
  }

  /**
   * Sets the date for the crag.
   *
   * @param {string} date Date of the crag. 
   */
  setDate(date: string): void {
    this._date = date;
  }

  /**
   * Retrieves date for the crag.
   *
   * @returns {string} Date for the crag.
   */
  getDate(): string {
    return this._date;
  }

  /**
   * Sets the updated for the crag.
   *
   * @param {Date} updated Updated of the crag. 
   */
  setUpdated(updated: Date): void {
    this._updated = updated;
  }

  /**
   * Retrieves updated for the crag.
   *
   * @returns {Date} Updated for the crag.
   */
  getUpdated(): Date {
    return this._updated;
  }
}

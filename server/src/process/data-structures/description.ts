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
   * Associated link.
   */
  _href:string  = '';

  /**
   * Sets the ID for the description.
   *
   * @param {string} id Id of the description. 
   */
  setId(id: string): void {
    this._id = id;
  }

  /**
   * Retrieves the ID for the description.
   *
   * @returns {string} ID for the description.
   */
  getId(): string {
    return this._id;
  }

  /**
   * Sets the guide for the description.
   *
   * @param {string} guide Guide of the description. 
   */
  setGuide(guide: string): void {
    this._guide = guide;
  }

  /**
   * Retrieves guide for the description.
   *
   * @returns {string} Guide for the description.
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
   * Sets the link for the description.
   *
   * @param {ItemLink} link Link of the description. 
   */
  setLink(link: ItemLink): void {
    this._link = link;
  }

  /**
   * Retrieves link for the description.
   *
   * @returns {ItemLink} Link for the description.
   */
  getLink(): ItemLink {
    return this._link;
  }

  /**
   * Sets the type for the description.
   *
   * @param {DescriptionType} type Type of the description. 
   */
  setType(type: DescriptionType): void {
    this._type = type;
  }

  /**
   * Retrieves type for the description.
   *
   * @returns {DescriptionType} Type for the description.
   */
  getType(): DescriptionType {
    return this._type;
  }

  /**
   * Sets the text for the description.
   *
   * @param {string} text Text of the description. 
   */
  setText(text: string): void {
    this._text = text;
  }

  /**
   * Retrieves text for the description.
   *
   * @returns {string} Text for the description.
   */
  getText(): string {
    return this._text;
  }

  /**
   * Sets the owner for the description.
   *
   * @param {string} owner Owner of the description. 
   */
  setOwner(owner: string): void {
    this._owner = owner;
  }

  /**
   * Retrieves owner for the description.
   *
   * @returns {string} Owner for the description.
   */
  getOwner(): string {
    return this._owner;
  }

  /**
   * Sets the date for the description.
   *
   * @param {string} date Date of the description. 
   */
  setDate(date: string): void {
    this._date = date;
  }

  /**
   * Retrieves date for the description.
   *
   * @returns {string} Date for the description.
   */
  getDate(): string {
    return this._date;
  }

  /**
   * Sets the updated for the description.
   *
   * @param {Date} updated Updated of the description. 
   */
  setUpdated(updated: Date): void {
    this._updated = updated;
  }

  /**
   * Retrieves updated for the description.
   *
   * @returns {Date} Updated for the description.
   */
  getUpdated(): Date {
    return this._updated;
  }

  /**
   * Sets the HREF for the description.
   *
   * @param {string} href HREF of the description. 
   */
  setHref(href: string): void {
    this._href = href;
  }

  /**
   * Retrieves the HREF for the description.
   *
   * @returns {string} HREF for the description.
   */
  getHref(): string {
    return this._href;
  }
  
  /**
   * Prints object as string.
   */
  log(depth: number = 0): void {
    const spacing = new Array(depth).fill(' ');

    console.log(spacing.join(), 'Description:', this._text);
  }
}

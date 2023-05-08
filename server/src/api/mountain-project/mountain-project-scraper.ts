// Local Imports
import { WebScraper } from '../web-scraper';
import {
  ADDITIONAL_LINES_SELECTOR,
  MOUNTAIN_PROJECT_DETAIL_INTERESTS,
  MOUNTAIN_PROJECT_SELECTORS,
  NUMBER_SELECTOR,
  PRIOR_SPACE_SELECTOR,
  TWO_NUMBER_SELECTOR,
} from '../../config';

// Types
import { Coordinates } from '../../types';
import { MountainProjectItem } from '../../types/mountain-project';

/**
 * Aids in retrieval and parsing of Mountain Project web pages..
 */
export class MountainProjectScraper extends WebScraper {
  /**
   * Whether details have been retrieved.
   */
  _detailsGathered = false;

  /**
   * Coordinates of the item.
   */
  _coords: Coordinates | null = null;

  /**
   * Elevation of the item.
   */
  _elevation: number | null = null;

  /**
   * Number of page views.
   */
  _pageViews: number | null = null;

  /**
   * First ascension.
   */
  _fa: string | null = null;

  /**
   * Type of route if applicable.
   */
  _type: string | null = null;

  /**
   * Name of the item.
   */
  _name: string | null = null;

  /**
   * Route difficulty.
   */
  _grade: string | null = null;

  /**
   * Route rating.
   */
  _rating: number | null = null;

  /**
   * Instantiates a new Mountain Projectweb scraper.
   *
   * @param {string} url URL to request.
   */
  constructor(url?: string | undefined) {
    super(url);
  }

  /**
   * Returns data as object.
   *
   * @returns {MountainProjectItem | null} Data as object.
   */
  toObject(): MountainProjectItem | null {
    if (this._dom === null || this._dom === undefined) {
      return null;
    }

    if (!this._detailsGathered) {
      this._gatherDetails();
    }

    return {
      elevation: this._elevation,
      pageViews: this._pageViews,
      fa: this._fa,
      type: this._type,
      name: this._name,
      grade: this._grade,
      rating: this._rating,
      coords: this._coords,
      url: this._url,
      isRoute: this.isRoute(),
      isArea: this.isArea(),
    };
  }

  /**
   * Whether the URL points to an area.
   *
   * @returns {boolean} Whether the URL points to an area.;
   */
  isArea(): boolean {
    if (!this._url) {
      return false;
    }

    const regex = /mountainproject.com\/area/g;
    return regex.test(this._url);
  }

  /**
   * Whether the URL points to a route.
   *
   * @returns {boolean} Whether the URL points to a route.;
   */
  isRoute(): boolean {
    if (!this._url) {
      return false;
    }

    const regex = /mountainproject.com\/route/g;
    return regex.test(this._url);
  }

  /**
   * Retrieves name from data.
   * 
   * @returns {string} Name of item.
   */
  getName(): string {
    if (this._dom === null || this._dom === undefined) {
      return '';
    }

    if (!this._detailsGathered) {
      this._gatherDetails();
    }

    return this._name || 'Unknown';
  }

  /**
   * Parses the coordinates of the item.
   *
   * @returns {Coordinates} Object with longitude and latitude of the item.
   */
  getCoordinates(): Coordinates | null {
    if (this._dom === null || this._dom === undefined) {
      return null;
    }

    if (!this._detailsGathered) {
      this._gatherDetails();
    }

    return this._coords;
  }

  /**
   * Parses the longitude of the item.
   *
   * @returns {number} Longitude of the item.
   */
  getLongitude(): number | null {
    if (this._dom === null || this._dom === undefined) {
      return null;
    }

    if (!this._detailsGathered) {
      this._gatherDetails();
    }

    return this._coords?.long || null;
  }

  /**
   * Parses the latitude of the item.
   *
   * @returns {number} Latitude of the item.
   */
  getLatitude(): number | null {
    if (this._dom === null || this._dom === undefined) {
      return null;
    }

    if (!this._detailsGathered) {
      this._gatherDetails();
    }

    return this._coords?.lat || null;
  }

  /**
   * Ensures the URL provided is valid.
   *
   * @param {string} url URL to request.
   */
  _checkUrl(): void {
    if (!this._url) {
      this._validUrl = false;
    }

    this._detailsGathered = false;

    const regex = /mountainproject.com/g;
    this._validUrl = regex.test(this._url);
  }

  /**
   * Retrieves details from data.
   */
  _gatherDetails() {
    if (this._dom === null || this._dom === undefined) {
      return null;
    }

    this._name = this._dom(MOUNTAIN_PROJECT_SELECTORS.name)
      .text()
      .replace(PRIOR_SPACE_SELECTOR, '')
      .replace(ADDITIONAL_LINES_SELECTOR, '');

    if (this.isRoute()) {
      this._grade = this._dom(MOUNTAIN_PROJECT_SELECTORS.grade).text().replace(' YDS', '');

      const matches = this._dom(MOUNTAIN_PROJECT_SELECTORS.rating).text().match(NUMBER_SELECTOR);

      if (matches && matches.length) {
        this._rating = parseFloat(matches[0]);
      }
    }

    const elements = this._dom(MOUNTAIN_PROJECT_SELECTORS.descriptionDetails).toArray();

    for (let i = 1; i < elements.length; i += 2) {
      const key = this._dom(elements[i - 1]).text().trim();

      if (!(Object.keys(MOUNTAIN_PROJECT_DETAIL_INTERESTS).includes(key))) {
        continue;
      }

      const value = this._dom(elements[i]).text().trim();
      let matches;

      switch (MOUNTAIN_PROJECT_DETAIL_INTERESTS[key]) {
        case 'elevation':
          matches = value.match(NUMBER_SELECTOR);

          if (matches && matches.length) {
            this._elevation = parseFloat(matches[0]);
          }
          break;
        case 'coordinates':
          matches = value.match(TWO_NUMBER_SELECTOR);

          if (matches && matches.length) {
            const coords = matches[0].split(', ');

            this._coords = {
              lat: parseFloat(coords[0]),
              long: parseFloat(coords[1]),
            };
          }
          break;
        case 'pageViews':
          matches = value.match(NUMBER_SELECTOR);

          if (matches && matches.length) {
            this._pageViews = parseFloat(matches[0]);
          }
          break;
        case 'fa':
          this._fa = value;
          break;
        case 'type':
          this._type = value.toLocaleLowerCase();
          break;
        default: 
          break;
      }
    }

    this._detailsGathered = true;
  }
}

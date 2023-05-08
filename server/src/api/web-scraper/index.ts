// Packages
import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * Aids in retrieval and parsing of web pages.
 */
export class WebScraper {
  /**
   * The URL requested.
   */
  _url: string = '';

  /**
   * Reference to request.
   */
  _dom: cheerio.CheerioAPI | null = null;

  /**
   * Whether the URL is valid for retrieval.
   */
  _validUrl = true;

  /**
   * Instantiates a new web scraper.
   *
   * @param {string} url URL to request.
   */
  constructor(url?: string | undefined) {
    if (url) {
      this._url = url;

      this._checkUrl();
      this.request();
    }
  }

  /**
   * Request DOM data for a URL.
   *
   * @param {string} url URL to request.
   * @returns {Promise<void>} Promise of action.
   */
  async request(url?: string | undefined): Promise<void> {
    if (url !== undefined) {
      this._url = url;
      this._checkUrl();
    }

    if (!this._validUrl) {
      return;
    }

    const response = await axios.get(
      this._url,
      {
        headers: {
          'Connection': 'Keep-Alive',
        },
      },
    );
  
    this._dom = cheerio.load(response.data);
  }

  /**
   * Ensures the URL provided is valid.
   *
   * @param {string} url URL to request.
   */
  _checkUrl(): void {
    this._validUrl = true;
  }
}

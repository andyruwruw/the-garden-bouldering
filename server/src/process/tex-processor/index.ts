// Local Imports
import { Area } from '../data-structures';
import { TexReader } from './tex-reader';

/**
 * Processes a TEX file.
 */
export class TexProcessor {
  /**
   * Instance of a TEX reader.
   */
  _reader: TexReader;

  /**
   * Instantiates a new TEX reader.
   */
  constructor() {
    this._reader = new TexReader();
  }

  /**
   * Loads a new TEX file to process.
   *
   * @param {string} data TEX data. 
   */
  load(data: string) {
    this._reader.setData(data);
  }

  /**
   * Parses the file for an area object.
   *
   * @returns {Area} Resulting area object.
   */
  start(): Area {
    this._reader.parse();

    return this._reader.getArea() as Area;
  }
}

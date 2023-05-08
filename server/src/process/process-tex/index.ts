// Local Imports
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
   * @param {Buffer} data TEX data. 
   */
  load(data: Buffer) {
    this._reader.setData(data);
  }

  start() {
    console.log(this._reader._data.toString().split('\\'));
  }
}

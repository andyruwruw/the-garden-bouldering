/**
 * Proxy class for reading TEX files.
 */
export class TexReader {
  /**
   * Data from file.
   */
  _data: Buffer;

  /**
   * Creates a new TEX reader.
   *
   * @param {Buffer} data Tex data.
   */
  constructor(data: Buffer = Buffer.from('')) {
    this._data = data;
  }

  /**
   * Loads tex data into reader.
   *
   * @param {Buffer} data Tex data.
   */
  setData(data: Buffer): void {
    this._data = data;
  }
}

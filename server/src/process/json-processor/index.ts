// Local Imports
import { Area } from '../data-structures';

// Types
import {
  OldGuide,
  OldGuideArea,
  OldGuideBoulder,
  OldGuideBoulderFace,
  OldGuideRoute,
} from '../../types/old-guide';

/**
 * Processes Json file.
 */
export class JsonProcessor {
  /**
   * Data container.
   */
  _data: OldGuide | null = null;

  /**
   * Resulting area.
   */
  _area: Area | null = null;

  /**
   * Instantiates a new TEX reader.
   */
  constructor(data: OldGuide | null = null) {
    if (data) {
      this.load(data);
    }
  }

  /**
   * Loads JSON data to process.
   *
   * @param {OldGuide} data JSON data.
   */
  load(data: OldGuide) {
    this._data = data;
  }

  /**
   * Parses the file for an area object.
   *
   * @returns {Area} Resulting area object.
   */
  start(): Area {
  }

  _processItem(item: OldGuideArea | OldGuideBoulder | OldGuideRoute | OldGuideBoulderFace) {
    
  }
}

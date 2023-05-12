// Local Imports
import { Area, Boulder, Crag, Description, Route } from '../data-structures';

// Types
import {
  OldGuide,
  OldGuideArea,
  OldGuideBoulder,
  OldGuideBoulderFace,
  OldGuideRoute,
} from '../../types/old-guide';
import { AscentObject } from 'src/types';
import { GUIDE_IDS } from 'src/config';

/**
 * Processes Json file.
 */
export class JsonProcessor {
  /**
   * Data container.
   */
  _data: OldGuide | null = null;

  /**
   * ID of guide.
   */
  _id: string;

  /**
   * Resulting crag.
   */
  _crag: Crag | null = null;

  /**
   * Instantiates a new TEX reader.
   */
  constructor(
    data: OldGuide | null = null,
    id: string,
  ) {
    if (data) {
      this.load(data);
    }

    this._id = id;
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
   * Parses the file for an crag object.
   *
   * @returns {Crag | null} Resulting crag object.
   */
  start(): Crag | null {
    if (!this._data) {
      return null;
    }

    this._crag = new Crag();
    this._crag.setName(this._data.name || 'Unknown');
    this._crag.setGuides([ this._id ]);

    for (let i = 0; i < (this._data.children || []).length; i += 1) {
      this._processItem(
        (this._data.children as OldGuideArea[])[i],
        this._crag as Area,
      );
    }

    return this._crag;
  }

  /**
   * Processes an item into its set data structure.
   *
   * @param {OldGuideArea | OldGuideBoulder | OldGuideRoute | OldGuideBoulderFace} item Item data from JSON. 
   * @param {Crag | Area | Boulder} parent Parent item.
   */
  _processItem(
    item: OldGuideArea | OldGuideBoulder | OldGuideRoute | OldGuideBoulderFace,
    parent: Crag | Area | Boulder,
  ) {
    let processed: Area | Boulder | Route | null = null;

    if (item.type === 'area') {
      processed = this._processArea(item as OldGuideArea);
    }
    if (item.type === 'boulder') {
      processed = this._processBoulder(item as OldGuideBoulder);
    }
    if (item.type === 'face') {
      processed = this._processBoulderFace(item as OldGuideBoulderFace);
    }
    if (item.type === 'route') {
      processed = this._processRoute(item as OldGuideRoute);
    }

    // Process children.
    if ([
      'area',
      'boulder',
      'face'
    ].includes(item.type)) {
      if ('children' in item && item.children && item.children.length) {
        for (let i = 0; i < item.children?.length; i += 1) {
          this._processItem(
            item.children[i],
            processed as unknown as Area | Boulder,
          );
        }
      }
    }

    parent.push(processed as unknown as Area | Boulder | Route);
  }

  /**
   * Processes area data.
   *
   * @param {OldGuideArea} data Area JSON data.
   * @returns {Area} Resulting area data structure.
   */
  _processArea(data: OldGuideArea): Area {
    const area = new Area();

    area.setName(data.name || 'Unknown');
    if ('id' in data && data.id) {
      area.setExternalIds({
        'oldGuide': data.id as string,
      });
    }
    if ('alt-names' in data && data['alt-names']) {
      area.setAltNames(data['alt-names'] as string[]);
    }
    if ('usable-description' in data && data['usable-description']) {
      const description = this._processDescription(data['usable-description']);
      for (let i = 0; i < description.length; i += 1) {
        area.push(description[i]);
      }
    } else if ('description' in data && data.description) {
      const description = this._processDescription(data.description);
      for (let i = 0; i < description.length; i += 1) {
        area.push(description[i]);
      }
    }

    return area;
  }

  /**
   * Processes boulder data.
   *
   * @param {OldGuideBoulder} data Boulder JSON data.
   * @returns {Boulder} Resulting boulder data structure.
   */
  _processBoulder(data: OldGuideBoulder): Boulder {
    const boulder = new Boulder();

    boulder.setName(data.name || 'Unknown');
    if ('id' in data && data.id) {
      boulder.setExternalIds({
        'oldGuide': `${data.id}`,
      });
    }
    if ('alt-names' in data && data['alt-names']) {
      boulder.setAltNames(data['alt-names'] as string[]);
    }
    if ('usable-description' in data && data['usable-description']) {
      const description = this._processDescription(data['usable-description']);
      for (let i = 0; i < description.length; i += 1) {
        boulder.push(description[i]);
      }
    } else if ('description' in data && data.description) {
      const description = this._processDescription(data.description);
      for (let i = 0; i < description.length; i += 1) {
        boulder.push(description[i]);
      }
    }

    return boulder;
  }

  /**
   * Processes area data.
   *
   * @param {OldGuideBoulderFace} data Boulder face JSON data.
   * @returns {Area} Resulting boulder face data structure.
   */
  _processBoulderFace(data: OldGuideBoulderFace): Area {
    const face = new Area();

    face.setName(data.name || 'Unknown');
    if ('id' in data && data.id) {
      face.setExternalIds({
        'oldGuide': `${data.id}`,
      });
    }
    if ('alt-names' in data && data['alt-names']) {
      face.setAltNames(data['alt-names'] as string[]);
    }
    if ('usable-description' in data && data['usable-description']) {
      const description = this._processDescription(data['usable-description']);
      for (let i = 0; i < description.length; i += 1) {
        face.push(description[i]);
      }
    } else if ('description' in data && data.description) {
      const description = this._processDescription(data.description);
      for (let i = 0; i < description.length; i += 1) {
        face.push(description[i]);
      }
    }

    return face;
  }

  /**
   * Processes route data.
   *
   * @param {OldGuideRoute} data Route JSON data.
   * @returns {Route} Resulting route data structure.
   */
  _processRoute(data: OldGuideRoute): Route {
    const route = new Route();

    route.setName(data.name || 'Unknown');
    if ('id' in data && data.id) {
      route.setExternalIds({
        'oldGuide': `${this._id}.${data.id}`,
      });
    }
    if ('alt-names' in data && data['alt-names']) {
      route.setAltNames(data['alt-names'] as string[]);
    }
    if ('usable-description' in data && data['usable-description']) {
      const description = this._processDescription(data['usable-description']);
      for (let i = 0; i < description.length; i += 1) {
        route.push(description[i]);
      }
    } else if ('description' in data && data.description) {
      const description = this._processDescription(data.description);
      for (let i = 0; i < description.length; i += 1) {
        route.push(description[i]);
      }
    }
    if ('grade' in data && data.grade) {
      route.setGrade({
        oldGuide: data.grade,
      });
    }
    if ('tags' in data && data.tags) {
      route.setTags(data.tags);
    }

    const ascents = [] as AscentObject[];

    if ('fa' in data && data.fa) {
      ascents.push({
        guides: [ this._id ],
        type: 'fa',
        name: data.fa.name || 'Unknown',
        date: data.fa.date || 'Unknown',
      });
    }
    if ('second' in data && data.second) {
      ascents.push({
        guides: [ this._id ],
        type: 'second',
        name: data.second.name || 'Unknown',
        date: data.second.date || 'Unknown',
      });
    }

    route.setAscents(ascents);

    return route;
  }

  /**
   * Processes description of item.
   *
   * @param {string | string[]} description JSON description of item.
   */
  _processDescription(description: string | string[]): Description[] {
    const items = [] as Description[];

    if (description instanceof Array) {
      for (let i = 0; i < description.length; i += 1) {
        const item = new Description();
        item.setText(description[i]);
        item.setGuide(this._id);

        items.push(item);
      }
    } else {
      const item = new Description();
      item.setText(description);
      item.setGuide(this._id);

      items.push(item);
    }

    return items;
  }
}

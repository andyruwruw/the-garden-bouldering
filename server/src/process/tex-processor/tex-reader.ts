// Local Imports
import {
  GUIDE_IDS,
  TEX_AREA_HEADING,
  TEX_BOULDER,
  TEX_CHAPTER_HEADING,
  TEX_DANGER,
  TEX_LABEL,
  TEX_NO_STAR,
  TEX_QR_CODE,
  TEX_ROUTE_DESCRIPTION,
  TEX_ROUTE_HEADER,
  TEX_STAR,
  TEX_UNDESIRED_ELEMENTS,
} from '../../config';
import { parseStringGrade } from '../../helpers/grades';

// Types
import {
  Area,
  Boulder,
  Crag,
  Description,
  Route,
} from '../data-structures';

/**
 * Proxy class for reading TEX files.
 */
export class TexReader {
  /**
   * Data split up.
   */
  _data: string[] = [];

  /**
   * Area data.
   */
  _area: Area | null = null;

  /**
   * Creates a new TEX reader.
   *
   * @param {string} data Tex data.
   */
  constructor(data: string = '') {
    this.setData(data);
  }

  /**
   * Loads tex data into reader.
   *
   * @param {string} data Tex data.
   */
  setData(data: string): void {
    const sanitized = data.replace(/[\u000A\u0009\u000B\u000C\u000D]/g, '');

    this._data = sanitized.split('\\').filter((line: string) => {
      if (line.length === 0) {
        return false;
      }

      if (TEX_UNDESIRED_ELEMENTS.includes(line)) {
        return false;
      }

      return true;
    });
  }

  /**
   * Parses data to create dataset.
   */
  parse(): void {
    let curr: Area | Boulder | Crag | Description | Route | null = null;
    let area: Area | null = null;
    let boulder: Boulder | null = null;
    let description: Description | null = null;
    let route: Route | null = null;

    for (let i = 0; i < this._data.length; i += 1) {
      const line = this._data[i];

      if (TEX_CHAPTER_HEADING.test(line)) {
        const [
          ,
          title,
        ] = line.match(TEX_CHAPTER_HEADING) as string[];

        this._area = new Area();
        curr = this._area;
        this._area.setName(title);
        this._area.setGuides([
          GUIDE_IDS.child,
        ]);
      }

      if (TEX_QR_CODE.test(line)) {
        const [
          ,
          href,
          label,
          text,
        ] = line.match(TEX_QR_CODE) as string[];

        description = new Description();
        description.setText(text);
        description.setHref(href);
        description.setGuide(GUIDE_IDS.child);

        curr?.push(description);
      }

      if (TEX_AREA_HEADING.test(line)) {
        const [
          ,
          id,
          title,
        ] = line.match(TEX_AREA_HEADING) as string[];

        if (area) {
          this._area?.push(area);
        }

        area = new Area();
        curr = area;
        area.setName(title);
        area.setExternalIds({
          child: id,
        });
        area.setGuides([
          GUIDE_IDS.child,
        ]);
      }

      if (TEX_LABEL.test(line)) {
        const [
          ,
          type,
          item,
          text,
        ] = line.match(TEX_LABEL) as string[];

        description = new Description();
        description.setText(text);
        description.setGuide(GUIDE_IDS.child);

        curr?.push(description);
      }

      if (TEX_BOULDER.test(line)) {
        const [
          ,
          title,
        ] = line.match(TEX_BOULDER) as string[];

        boulder = new Boulder();
        curr = boulder;
        boulder.setName(title);
        boulder.setGuides([
          GUIDE_IDS.child,
        ]);

        area?.push(boulder);
      }

      if (TEX_ROUTE_HEADER.test(line)) {
        const [
          ,
          id,
          name,
          grade,
        ] = line.match(TEX_ROUTE_HEADER) as string[];

        route = new Route();
        curr = route;
        route.setName(name);
        route.setExternalIds({
          child: id,
        });
        route.setGrade({
          child: parseStringGrade(grade),
        });
        route.setGuides([
          GUIDE_IDS.child,
        ]);

        boulder?.push(route);
      }

      if (TEX_NO_STAR.test(line)) {
        route?.setRating({
          child: {
            average: 0,
            votes: 1,
          },
        });
      }

      if (TEX_STAR.test(line)) {
        const currRating = route?.getRating() || {};

        if (currRating && Object.keys(currRating).length) {
          route?.setRating({
            child: {
              average: currRating.child?.average ? currRating.child?.average + 1 : 1,
              votes: 1
            },
          });
        } else {
          route?.setRating({
            child: {
              average: 1,
              votes: 1,
            },
          });
        }
      }

      if (TEX_DANGER.test(line)) {
        const currDanger = route?.getDanger() || {};

        if (currDanger && Object.keys(currDanger).length) {
          route?.setDanger({
            child: currDanger.child ? currDanger.child + 1 : 1,
          });
        } else {
          route?.setDanger({
            child: 1,
          });
        }
      }

      if (TEX_ROUTE_DESCRIPTION.test(line)) {
        const [
          ,
          text,
        ] = line.match(TEX_ROUTE_DESCRIPTION) as string[];

        description = new Description();
        description.setText(text);
        description.setGuide(GUIDE_IDS.child);

        curr?.push(description);
      }
    }
  }

  /**
   * Retrieves resulting area object.
   */
  getArea(): Area | null {
    return this._area;
  }
}

// Local Imports
import { Handler as AbstractHandler } from '../handler';

// Types
import {
  ClimbingRequest,
  ClimbingResponse,
  Process,
} from '../../types';
import {
  GUIDE_IDS,
  MOUNTAIN_PROJECT_HREFS,
} from '../../config';
import { Crag } from '../../process/data-structures';
import { JsonProcessor } from '../../process/json-processor';
import { TexProcessor } from '../../process/tex-processor';
import api from '../../api';

/**
 * Updates data with route guides.
 */
export class UpdateDataHandler extends AbstractHandler {
  /**
   * Handles the request.
   *
   * @param {ClimbingRequest} req Incoming request.
   * @param {ClimbingResponse} res Response.
   * @returns {Promise<void | ClimbingResponse>} Outgoing response.
   */
  async execute(
    req: ClimbingRequest,
    res: ClimbingResponse,
  ): Promise<void | ClimbingResponse> {
    const history = await AbstractHandler.database.process?.find();

    await this._processChild(history && history.length ? history[0] : null);

    await this._processGardenTranscribed(history && history.length ? history[0] : null);

    await this._processMountainProject(history && history.length ? history[0] : null);
  }

  async _processChild(history: Process | null) {
    try {
      const response = await api.github.child.getMainTex();

      const processor = new TexProcessor();
      processor.load(response);

      const area = processor.start();

      if (area) {
        area.log();
      }
    } catch (error) {
      return history?.versions[GUIDE_IDS.child] || '';
    }
  }

  async _processGardenTranscribed(history: Process | null) {
    try {
      const response = await api.github.transcribed.getGardenJson();

      const processor = new JsonProcessor(
        null,
        GUIDE_IDS['old-guidebook-the-garden'],
      );
      processor.load(response);

      const area = processor.start();

      if (area) {
        area.log();
      }
    } catch (error) {
      return history?.versions[GUIDE_IDS['old-guidebook-the-garden']] || '';
    }
  }

  async _processMountainProject(history: Process | null) {
    try {
      const response = await api.mountainProject.getMountainProjectArea(MOUNTAIN_PROJECT_HREFS['the-garden']);

      console.log(response);
    } catch (error) {
      return history?.versions[GUIDE_IDS['mountain-project']] || '';
    }
  }

  async _processResultingCrag(crag: Crag) {
    const id = Object.values(crag.getExternalIds())[0];
    const existing = await AbstractHandler.database.crag?.findOne({
      externalIds: {
        
      }
    });
  }
}

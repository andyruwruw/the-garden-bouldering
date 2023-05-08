// Local Imports
import { Handler } from '../handler';
import { LinkItemsHandler } from './link-items-handler';
import { SearchHandler } from './search-handler';
import { UpdateDataHandler } from './update-data-handler';

export default {
  'link': LinkItemsHandler,
  'search': SearchHandler,
  'update': UpdateDataHandler,
} as Record<string, typeof Handler>;

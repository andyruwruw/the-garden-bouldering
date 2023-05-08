// Local Imports
import { GetCragAreasHandler } from '../area/get-crag-areas-handler';
import { Handler } from '../handler';
import { DeleteArticleHandler } from './delete-article-handler';
import { GetAreaArticlesHandler } from './get-area-articles-handler';
import { GetArticleHandler } from './get-article-handler';
import { GetArticlesHandler } from './get-articles';
import { GetBoulderArticlesHandler } from './get-boulder-articles-handler';
import { GetRouteArticlesHandler } from './get-route-articles-handler';
import { PostArticleHandler } from './post-article-handler';
import { UpdateArticleHandler } from './update-article-handler';

export default {
  'delete': DeleteArticleHandler,
  'get-area': GetAreaArticlesHandler,
  'get': GetArticleHandler,
  'get-many': GetArticlesHandler,
  'get-boulder': GetBoulderArticlesHandler,
  'get-crag': GetCragAreasHandler,
  'get-route': GetRouteArticlesHandler,
  'post': PostArticleHandler,
  'update': UpdateArticleHandler,
} as Record<string, typeof Handler>;

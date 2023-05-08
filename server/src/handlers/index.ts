// Local Imports
import { Handler } from './handler';
import area from './area';
import article from './article';
import attempt from './attempt';
import beta from './beta';
import boulder from './boulder';
import comment from './comment';
import crag from './crag';
import description from './description';
import general from './general';
import interest from './interest';
import route from './route';
import send from './send';
import user from './user';

export default {
  area,
  article,
  attempt,
  beta,
  boulder,
  comment,
  crag,
  description,
  general,
  interest,
  route,
  send,
  user,
} as Record<string, Record<string, typeof Handler>>;

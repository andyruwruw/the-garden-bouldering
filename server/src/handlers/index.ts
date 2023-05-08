// Local Imports
import { Handler } from './handler';
import area from './area';
import article from './articles';
import attempt from './attempt';
import beta from './beta';
import boulder from './boulder';
import crag from './crag';
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
  crag,
  general,
  interest,
  route,
  send,
  user,
} as Record<string, Record<string, typeof Handler>>;

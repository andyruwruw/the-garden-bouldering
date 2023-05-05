// Types
import {
  Boulder,
  Route,
} from '../../types';

const TheGoodWarmup: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/118701335/the-good-warm-up-shark-fin',
  },
  name: 'The Good Warmup',
  altNames: [
    'Shark Fin',
  ],
  grade: {
    child: {
      grade: 0,
      subgrade: 0,
    },
    mountainProject: {
      grade: 0,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 1,
    mountainProject: {
      average: 2.9,
      votes: 7,
    },
  },
};

export default {
  href:  {},
  lat: 0,
  long: 0,
  name: 'The Good Warmup Boulder',
  elevation: 0,
  images: [],
  routes: {
    'the-good-warmup': TheGoodWarmup,
  },
} as Boulder;

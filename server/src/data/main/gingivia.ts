// Types
import {
  Boulder,
  Route,
} from '../../types';

const Gingivia: Route = {
  href: {},
  name: 'Gingivia',
  altNames: [],
  grade: {
    child: {
      grade: 2,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 2,
  },
};

export default {
  href:  {},
  lat: 0,
  long: 0,
  name: 'Gingivia Boulder',
  elevation: 0,
  images: [],
  routes: {
    'gingivia': Gingivia,
  },
} as Boulder;

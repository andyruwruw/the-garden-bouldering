// Types
import {
  Boulder,
  Route,
} from '../../types';

const UNNAMED: Route = {
  href: {
    mountainProject: '',
  },
  name: 'UNNAMED',
  altNames: [],
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
    child: 2,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

export default {
  href:  {
    mountainProject: '',
  },
  lat: 0,
  long: 0,
  name: 'UNNAMED Boulder',
  elevation: 0,
  images: [],
  routes: {},
} as Boulder;

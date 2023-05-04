// Types
import {
  Boulder,
  Route,
} from '../../types';

const Vince: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Vince',
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
  name: 'Crash Test Dummies Boulder',
  elevation: 0,
  images: [],
  routes: {},
} as Boulder;

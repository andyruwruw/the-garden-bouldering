// Types
import {
  Boulder,
  Route,
} from '../../types';

const EsDirtyB: Route = {
  href: {
    mountainProject: '',
  },
  name: 'E\'s Dirty B',
  altNames: [],
  grade: {
    child: {
      grade: 5,
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
  name: 'E\'s Dirty B Boulder',
  elevation: 0,
  images: [],
  routes: {
    'es-dirty-b': EsDirtyB,
  },
} as Boulder;

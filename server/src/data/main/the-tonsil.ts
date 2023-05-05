// Types
import {
  Boulder,
  Route,
} from '../../types';

const Tonsil: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Tonsil',
  altNames: [],
  grade: {
    child: {
      grade: 4,
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

const TonsilLowStart: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Tonsil Low Start',
  altNames: [],
  grade: {
    child: {
      grade: -1,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: -1,
  },
};

const Prowed: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Prowed',
  altNames: [],
  grade: {
    child: {
      grade: -1,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: -1,
  },
  danger: {
    child: 2,
  },
};

export default {
  href:  {
    mountainProject: '',
  },
  lat: 0,
  long: 0,
  name: 'The Tonsil Boulder',
  elevation: 0,
  images: [],
  routes: {
    'tonsil': Tonsil,
    'tonsil-low-start': TonsilLowStart,
    'prowed': Prowed,
  },
} as Boulder;

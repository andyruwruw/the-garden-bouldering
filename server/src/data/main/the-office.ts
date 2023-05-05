// Types
import {
  Boulder,
  Route,
} from '../../types';

const JimHalpert: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Jim Halpert',
  altNames: [],
  grade: {
    child: {
      grade: 1,
      subgrade: 0,
    },
    mountainProject: {
      grade: 0,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 0,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
  danger: {
    child: 2,
  },
};

const DarylPhilbin: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Daryl Philbin',
  altNames: [],
  grade: {
    child: {
      grade: 2,
      subgrade: -2,
    },
    mountainProject: {
      grade: 0,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 3,
    mountainProject: {
      average: 0,
      votes: 0,
    },
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
  name: 'The Office Boulder',
  elevation: 0,
  images: [],
  routes: {
    'jim-halpert': JimHalpert,
    'daryl-philbin': DarylPhilbin,
  },
} as Boulder;

// Types
import {
  Boulder,
  Route,
} from '../../types';

const ThreeStarLedge: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Three Star Ledge',
  altNames: [],
  grade: {
    child: {
      grade: 2,
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

const ThreeStarLedgeVariation: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Three Star Ledge Variation',
  altNames: [],
  grade: {
    child: {
      grade: 2,
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
  name: 'Three Star Ledge Boulder',
  elevation: 0,
  images: [],
  routes: {
    'three-star-ledge': ThreeStarLedge,
    'three-star-ledge-variation': ThreeStarLedgeVariation,
  },
} as Boulder;

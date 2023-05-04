// Types
import {
  Boulder,
  Route,
} from '../../types';

const AllSortsOfEase: Route = {
  href: {
    mountainProject: '',
  },
  name: 'All Sorts of Ease',
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

const InTheShadowOfGiants: Route = {
  href: {
    mountainProject: '',
  },
  name: 'In the Shadows of Giants',
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
  name: 'All Sorts of Ease Boulder',
  elevation: 0,
  images: [],
  routes: {
    'all-sorts-of-ease': AllSortsOfEase,
    'in-the-shadow-of-giants': InTheShadowOfGiants,
  },
} as Boulder;

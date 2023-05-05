// Types
import {
  Boulder,
  Route,
} from '../../types';

const Trust: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Trust',
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
    child: 3,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

const IronCross: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Iron Cross',
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
    child: 1,
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
  name: 'Trust Boulder',
  elevation: 0,
  images: [],
  routes: {
    'trust': Trust,
    'iron-cross': IronCross,
  },
} as Boulder;

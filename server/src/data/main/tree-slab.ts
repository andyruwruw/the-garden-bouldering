// Types
import {
  Boulder,
  Route,
} from '../../types';

const TreeSlab: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/114794320/2-slab-4-u',
  },
  name: 'Tree Slab',
  altNames: [
    '2 slab 4 u',
  ],
  grade: {
    child: {
      grade: 1,
      subgrade: 1,
    },
    mountainProject: {
      grade: 3,
      subgrade: -1,
    },
  },
  firstAscent: {
    name: 'Dallas Mulkey',
    date: 'July 29th 2018',
  },
  rating: {
    child: 2,
    mountainProject: {
      average: 2.4,
      votes: 7,
    },
  },
};

const TreeSlabLeft: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/114794361/tree-slab-right',
  },
  name: 'Tree Slab Left',
  altNames: [],
  grade: {
    mountainProject: {
      grade: 1,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    mountainProject: {
      average: 2.6,
      votes: 7,
    },
  },
};

const TreeSlabRight: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/114794361/tree-slab-right',
  },
  name: 'Tree Slab Right',
  altNames: [],
  grade: {
    mountainProject: {
      grade: 0,
      subgrade: 0,
    },
  },
  firstAscent: {
    name: 'Brandon Cortez',
    date: 'July 29th 2018',
  },
  rating: {
    mountainProject: {
      average: 2,
      votes: 5,
    },
  },
};

export default {
  href:  {
    mountainProject: '',
  },
  lat: 0,
  long: 0,
  name: 'Tree Slab Boulder',
  elevation: 0,
  images: [],
  routes: {
    'tree-slab': TreeSlab,
    'tree-slab-left': TreeSlabLeft,
    'tree-slab-right': TreeSlabRight,
  },
} as Boulder;

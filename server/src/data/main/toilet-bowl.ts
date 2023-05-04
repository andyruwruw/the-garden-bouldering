// Types
import {
  Boulder,
  Route,
} from '../../types';

const ToiletBowl: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/110169739/toilet-bowl',
  },
  name: 'Toilet Bowl',
  altNames: [],
  grade: {
    child: {
      grade: 1,
      subgrade: 0,
    },
    mountainProject: {
      grade: 2,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 1,
    mountainProject: {
      average: 2,
      votes: 11,
    },
  },
};

const ToiletBowlTraverse: Route = {
  href: {},
  name: 'Toilet Bowl Traverse',
  altNames: [],
  grade: {
    child: {
      grade: 0,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 2,
  },
};

export default {
  href:  {
    mountainProject: 'https://www.mountainproject.com/area/119940713/toilet-bowl-boulder',
  },
  lat: 44.44109,
  long: -122.57454,
  name: 'Toilet Bowl Boulder',
  elevation: 789,
  images: [],
  routes: {
    'toilet-bowl': ToiletBowl,
    'toilet-bowl-traverse': ToiletBowlTraverse,
  },
} as Boulder;

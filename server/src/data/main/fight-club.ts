// Types
import {
  Boulder,
  Route,
} from '../../types';

const TheEar: Route = {
  href: {
    mountainProject: '',
  },
  name: 'The Ear',
  altNames: [],
  grade: {
    child: {
      grade: 2,
      subgrade: 1,
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

const FightClub: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Fight Club',
  altNames: [],
  grade: {
    child: {
      grade: 8,
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

const FightClub2: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Fight Club 2',
  altNames: [],
  grade: {
    child: {
      grade: 10,
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

const Brewmaster: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Brewmaster',
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
  name: 'Fight Club Boulder',
  elevation: 0,
  images: [],
  routes: {
    'the-ear': TheEar,
    'fight-club': FightClub,
    'fight-club-2': FightClub2,
    'brewmaster': Brewmaster,
  },
} as Boulder;

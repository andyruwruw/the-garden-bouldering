// Types
import {
  Boulder,
  Route,
} from '../../types';

const MiniMe: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Mini Me',
  altNames: [],
  grade: {
    child: {
      grade: 3,
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
};

const AustinPowers: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Austin Powers',
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

const DrEvil: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Dr. Evil',
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

const MrBigglesworth: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Mr. Bigglesworth',
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
  name: 'Mini Me Boulder',
  elevation: 0,
  images: [],
  routes: {
    'mini-me': MiniMe,
    'austin-powers': AustinPowers,
    'dr-evil': DrEvil,
    'mr-bigglesworth': MrBigglesworth,
  },
} as Boulder;

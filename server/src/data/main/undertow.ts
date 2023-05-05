// Types
import {
  Boulder,
  Route,
} from '../../types';

const Undertow: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Undertow',
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
    child: 3,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

const SprayAgainstTheUndertow: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Spray Against the Undertow',
  altNames: [],
  grade: {
    child: {
      grade: 6,
      subgrade: 0,
    },
    mountainProject: {
      grade: 0,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: -1,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

const UndertowSitStart: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Undertow Sit Start',
  altNames: [],
  grade: {
    child: {
      grade: 7,
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

const Riptide: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Riptide',
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
    child: 2,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

const SimpleMath: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Simple Math',
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
    child: -1,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

const ShakeItOut: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Shake It Out',
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
    child: 1,
    mountainProject: {
      average: 0,
      votes: 0,
    },
  },
};

const Tidepool: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Tidepool',
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
    child: -1,
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
  name: 'Undertow Boulder',
  elevation: 0,
  images: [],
  routes: {
    'undertow': Undertow,
    'spray-against-the-undertow': SprayAgainstTheUndertow,
    'undertow-sit-start': UndertowSitStart,
    'riptide': Riptide,
    'simple-math': SimpleMath,
    'shake-it-out': ShakeItOut,
    'tidepool': Tidepool,
  },
} as Boulder;

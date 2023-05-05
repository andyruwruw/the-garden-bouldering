// Types
import {
  Boulder,
  Route,
} from '../../types';

const ProjectMayhem: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Project Mayhem',
  altNames: [],
  grade: {
    child: {
      grade: 1,
      subgrade: 1,
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

const TylerDurtenDyno: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Tyler Durten Dyno',
  altNames: [],
  grade: {
    child: {
      grade: -1,
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

const AngelFace: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Angel Face',
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

const DurtenLayback: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Durten Layback',
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
  name: 'Tyler Durten Boulder',
  elevation: 0,
  images: [],
  routes: {
    'project-mayhem': ProjectMayhem,
    'tyler-durten-dyno': TylerDurtenDyno,
    'angel-face': AngelFace,
    'durten-layback': DurtenLayback,
  },
} as Boulder;

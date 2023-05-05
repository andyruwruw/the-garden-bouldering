// Types
import {
  Boulder,
  Route,
} from '../../types';

const BoysInTheWoods: Route = {
  href: {
    mountainProject: '',
  },
  name: 'Boys in the Woods',
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

const CubaGooding: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/114951903/cuba-gooding',
  },
  name: 'Cuba Gooding',
  altNames: [],
  grade: {
    child: {
      grade: 6,
      subgrade: 0,
    },
    mountainProject: {
      grade: 6,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 2,
    mountainProject: {
      average: 3,
      votes: 9,
    },
  },
};

const CubaGoodingVariation: Route = {
  href: {},
  name: 'Cuba Gooding Variation',
  altNames: [],
  grade: {
    child: {
      grade: 3,
      subgrade: 0,
    },
  },
  firstAscent: null,
  rating: {
    child: 1,
  },
};

const IceCubesShinyJerryCurl: Route = {
  href: {
    mountainProject: 'https://www.mountainproject.com/route/114952000/ice-cubes-shiny-jerry-curl',
  },
  name: 'Ice Cubes Shiny Jerry Curl',
  altNames: [],
  grade: {
    child: {
      grade: 6,
      subgrade: 0,
    },
    mountainProject: {
      grade: 6,
      subgrade: 0,
    },
  },
  firstAscent: {
    name: 'Brandon Cortez',
    date: 'Aug 11th, 2018',
  },
  rating: {
    child: 2,
    mountainProject: {
      average: 3.2,
      votes: 13,
    },
  },
};

export default {
  href:  {
    mountainProject: 'https://www.mountainproject.com/area/119940668/boys-in-the-woods-boulder',
  },
  lat: 44.44109,
  long: -122.57454,
  name: 'Boys in the Woods Boulder',
  elevation: 789,
  images: [],
  routes: {
    'boys-in-the-woods': BoysInTheWoods,
    'cuba-gooding': CubaGooding,
    'cuba-gooding-variation': CubaGoodingVariation,
    'ice-cubes-shiny-jerry-curl': IceCubesShinyJerryCurl,
  },
} as Boulder;

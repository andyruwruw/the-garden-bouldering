/**
 * Database type enum.
 */
export const DATABASE_TYPES = {
  MONGO: 'mongo',
  CACHE: 'cache',
};

/**
 * Cookie key.
 */
export const COOKIE_NAME = 'the-garden-guide-cookie';

/**
 * Salt work factor for encryption.
 */
export const SALT_WORK_FACTOR = 23;

/**
 * Nothing at all.
 *
 * @returns {null}
 */
export const NOOP = () => null;

/**
 * References to Andrew Child's Guidebook on Github.
 */
export const ANDREW_CHILD_GUIDE = {
  owner: 'AndrewChild',
  repo: 'The-Garden-Guidebook',
  files: [
    {
      name: 'The Garden Main',
      path: 'sections/The Garden Main.tex',
      type: 'tex',
    },
    {
      name: 'Armageddon',
      path: 'sections/Armageddon.tex',
      type: 'tex',
    },
    {
      name: 'Quartzville Creek',
      path: 'sections/Quartzville Creek.tex',
      type: 'tex',
    },
    {
      name: 'Upper Garden',
      path: 'sections/Upper Garden.tex',
      type: 'tex',
    },
  ],
};

/**
 * Base URL to Github's API.
 */
export const GITHUB_API_BASE_URL = 'https://api.github.com';

/**
 * CSS selectors for Mountain Project.
 */
export const MOUNTAIN_PROJECT_SELECTORS: Record<string, string> = {
  name: 'h1',
  grade: '.mr-2 .rateYDS',
  rating: '#route-star-avg span',
  descriptionDetails: '.description-details td',
};

/**
 * Details we care about.
 */
export const MOUNTAIN_PROJECT_DETAIL_INTERESTS: Record<string, string> = {
  'Elevation:': 'elevation',
  'GPS:': 'coordinates',
  'Page Views:': 'pageViews',
  'FA:': 'fa',
  'Type:': 'type',
};

/**
 * Regex for selecting numbers.
 */
export const NUMBER_SELECTOR = /([0-9,.]*[0-9]+)/gi;

/**
 * Regex for selecting numbers.
 */
export const TWO_NUMBER_SELECTOR = /([-0-9,.]+), ([-0-9,.]+)/gi;

/**
 * Selector for white space prior.
 */
export const PRIOR_SPACE_SELECTOR = /^\s+/g;

/**
 * Selector for additional lines.
 */
export const ADDITIONAL_LINES_SELECTOR = /\n[a-zA-Z0-9\n\s]+$/g;

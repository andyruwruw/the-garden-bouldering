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
  files: {
    'armageddon': {
      name: 'Armageddon',
      path: 'sections/Armageddon.tex',
      type: 'tex',
    },
    'main': {
      name: 'The Garden Main',
      path: 'sections/The Garden Main.tex',
      type: 'tex',
    },
    'quartzville-creek': {
      name: 'Quartzville Creek',
      path: 'sections/Quartzville Creek.tex',
      type: 'tex',
    },
    'upper': {
      name: 'Upper Garden',
      path: 'sections/Upper Garden.tex',
      type: 'tex',
    },
  }
};

/**
 * References to transcribed guidebooks on Github.
 */
export const TRANSCRIBED_GUIDES = {
  owner: 'andyruwruw',
  repo: 'climbing-guidebooks-transcribed',
  files: {
    'the-garden': {
      name: 'The Garden',
      path: 'oregon/willamette-valley/the-garden.json',
      type: 'json',
    },
    'druid-stones': {
      name: 'Druid Stones',
      path: 'oregon/willamette-valley/druid-stones.json',
      type: 'json',
    },
  }
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
 * Mountain project links.
 */
export const MOUNTAIN_PROJECT_HREFS: Record<string, string> = {
  'the-garden': 'https://www.mountainproject.com/area/105818193/the-garden',
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

/**
 * Selector for whitespace.
 */
export const WHITESPACE_CHARACTERS = /[\u000A\u0009\u000B\u000C\u000D]/g;

/**
 * Selector for TEX chapter headers.
 */
export const TEX_CHAPTER_HEADING = /formatChapter{([a-zA-Z\s]+)}/;

/**
 * Selector for TEX QR codes.
 */
export const TEX_QR_CODE = /qrcode{.+}{(.+)}{(.+)}(.+)/;

/**
 * Selector for TEX area headings.
 */
export const TEX_AREA_HEADING = /section{([a-zA-Z]+) - (.+)}/;

/**
 * Selector for TEX labels.
 */
export const TEX_LABEL = /label{([a-zA-Z]+):(.+)}(.+)/;

/**
 * Selector for TEX boulder headers.
 */
export const TEX_BOULDER = /subsection\*{(.+)}/;

/**
 * Selector for TEX route headers
 */
export const TEX_ROUTE_HEADER = /textbf*{([0-9a-z]+) (.+) (V[B0-9?+-/*]+)/;

/**
 * Selector for TEX no star icons.
 */
export const TEX_NO_STAR = /ding{73}/g;

/**
 * Selector for TEX star icons.
 */
export const TEX_STAR = /ding{72}/g;

/**
 * Selector for TEX danger signs.
 */
export const TEX_DANGER = /warn/g

/**
 * Selector for TEX route descriptions.
 */
export const TEX_ROUTE_DESCRIPTION = /begin{adjustwidth}{.+}{}(.+)/;

/**
 * Selector for unknown grades.
 */
export const GRADE_UNKNOWN = /.*V\?.*/g;

/**
 * Selector for unknown grades.
 */
export const GRADE_IN_BETWEEN = /.*V([B0-9]+)\/([0-9]+).*/;

/**
 * Selector for unknown grades.
 */
export const GRADE_PARSER = /.*V([B0-9]+)([+-]*).*/;

/**
 * Undesired TEX file elements.
 */
export const TEX_UNDESIRED_ELEMENTS = [
  'raggedcolumns',
  'newpage',
];

/**
 * Ids for guidebooks.
 */
export const GUIDE_IDS = {
  'child': 'child',
  'old-guidebook-the-garden': 'ire510-ga',
  'old-guidebook-druid-stones': 'ire510-ds',
  'mountain-project': 'mp',
  'young': 'young',
};

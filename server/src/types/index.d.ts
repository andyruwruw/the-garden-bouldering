
/**
 * A date string of different levels of accuracy.
 */
type DateString = `${number}/${number}/${number}` | `${number}/${number}` | `${number}`;


/**
 * Overall data object.
 */
interface StaticData {
  /**
   * Version number.
   */
  version: `${number}.${number}.${number}`;

  /**
   * Author name of data collection.
   */
  author: string;

  /**
   * When this data file was last managed.
   */
  updated: DateString;

  /**
   * Name of the data file.
   */
  name: string;

  /**
   * Location of the data file.
   */
  location: Location;

  /**
   * State of the location of the data file.
   */
  state: string;

  /**
   * Unique locale to the data file.
   */
  locale: string;

  /**
   * What set of references were used in this data file.
   */
  references: Record<string, StaticReference>;

  /**
   * General schema of the data file.
   */
  schema: Record<string, StaticSchema>;

  /**
   * Areas within the location.
   */
  areas: StaticArea[];
}

/**
 * Schema of a data object.
 */
interface StaticSchema {
  /**
   * Some key as a schema item.
   */
  [key: string]: StaticSchemaItem;
}

/**
 * A typed schema item.
 */
interface StaticSchemaItem {
  /**
   * The type of the item.
   */
  type: string;

  /**
   * Description of the field.
   */
  description: string;

  /**
   * Options if limited of the schema item.
   */
  options: StaticSchemaItemOption[] | string[]
}

/**
 * A valid option for the value of a schema item.
 */
interface StaticSchemaItemOption {
  /**
   * The value of the item.
   */
  value: string | number;

  /**
   * A description of that value.
   */
  description: string;
}

/**
 * Data area object.
 */
interface StaticArea {
  /**
   * Index of the area as an arbutrary form of ordering.
   */
  index: number;

  /**
   * Determined unique identifier for the area.
   */
  id: string;

  /**
   * Determined name for the area.
   */
  name: string;

  /**
   * References to this area from other guides.
   */
  hrefs: StaticHref[];

  /**
   * Sub areas within this area.
   */
  areas: StaticArea[];

  /**
   * Boulders within this area.
   */
  boulders: StaticBoulder[];

  /**
   * Boulderless routes within this area.
   */
  routes: StaticRoute[];
}

/**
 * Type of reference.
 */
type StaticHrefType = 'link' | 'pdf' | 'book' | 'paid-app';

/**
 * Guide IDs referenced.
 */
type StaticReference = 'mountain-project' | 'a-child' | 'p-waters' | 'p-waters-2' | 'a-young' | 'c-doe' | 'e-browne' | 'sendage' | '8a';

/**
 * A pointer to a guide that speicifies a given object.
 */
interface StaticHref {
  /**
   * Index of the href as an arbutrary form of ordering.
   */
  index: number;

  /**
   * Type of reference.
   */
  type: StaticHrefType;

  /**
   * Reference used.
   */
  reference: StaticReference;

  /**
   * Date this reference was created or accessed.
   */
  date: DateString;

  /**
   * List of names this item was referred as, the first always being the name chosen for that particular guide.
   */
  names: string[];

  /**
   * A link if available.
   */
  href: string;

  /**
   * The ID of the item based on this reference's ID system.
   */
  id: string;

  /**
   * If applicable, the page this item can be found on.
   */
  page: number;
}

interface StaticRouteHref extends StaticHref {
  /**
   * The grade recommended by the author of this item.
   */
  grade?: StaticGrade;

  /**
   * The rating provided by the author.
   */
  rating?: StaticRating;

  /**
   * The danger suggested by the author.
   */
  danger?: StaticDanger;
}

/**
 * A suggested rating value.
 */
interface StaticRating {
  /**
   * Value of the rating. -1 for no rating provided.
   */
  value: number;

  /**
   * Max rating available.
   */
  max: number;
}

/**
 * A suggested danger rating.
 */
interface StaticDanger {
  /**
   * Level of danger.
   */
  value: number;

  /**
   * Max danger level for this reference.
   */
  max: number;
}

/**
 * Type of route.
 */
type StaticRouteType = 'boulder' | 'sport' | 'trad' | 'top-rope';

/**
 * Description object type.
 */
type StaticDescriptionSectionType = 'header' | 'text' | 'image' | 'video';

/**
 * Ascent logging object.
 */
interface StaticAscent {
  /**
   * Date of varying degrees of accuracy.
   */
  date: DateString;

  /**
   * Name of the ascentionist.
   */
  name: string;

  /**
   * Reference IDs this was found from.
   */
  references: string[];
}

/**
 * A description section.
 */
interface StaticDescriptionSection {
  /**
   * Type of section.
   */
  type: StaticDescriptionSectionType;

  /**
   * Contents of the section.
   */
  text: string;
}

/**
 * A suggested amount of protection.
 */
interface StaticPadCount {
  /**
   * How many pads.
   */
  count: number;
  
  /**
   * Add a + or - multiplier.
   */
  subCount: number;

  /**
   * How many spotters
   */
  spotter: number;

  /**
   * Add a + or - multiplier.
   */
  subSpotter: number;

  /**
   * Whether a rope should b eused.
   */
  rope: boolean;
}

/**
 * Static reference to a route.
 */
interface StaticRoute {
  /**
   * Index of the route as an arbutrary form of ordering.
   */
  index: number;

  /**
   * Type of route.
   */
  type: StaticRouteType;
  name: string;
  altNames: AltName[];
  hrefs: StaticHref[];
  grade: StaticGrade;
  rating: StaticRating;
  danger: StaticDanger;
  height: number;
  pads: StaticPadCount;
  description: StaticDescriptionSection[];
  fa: StaticAscent;
  sa: StaticAscent;
  project: boolean;
  contrived: boolean;
  variation: string;
  stand: string;
}

interface StaticRoute {

}

interface StaticGrade {
  value: number;
  subValue: number;
}

interface Location {
  longitude: number;
  latitude: number;
}
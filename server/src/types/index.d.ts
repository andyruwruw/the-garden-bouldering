
interface StaticData {
  areas: StaticArea[];
}

interface StaticArea {
  index: number;
  name: string;
  altNames?: AltName[];
  hrefs?: StaticHref[];
  areas?: StaticArea[];
  boulders?: StaticBoulder[];
  routes?: StaticRoute[];
}

type StaticHrefType = 'link' | 'pdf' | 'book';

type StaticReference = 'mountain-project' | 'andrew-child' | 'paul-waters' | 'cooper-doe' | 'e-browne' | 'sendage' | '8a';

interface StaticHref {
  index: number;
  type: StaticHrefType;
  reference: StaticReference;
  href?: string;
  id?: string;
  page?: number;
  grade?: StaticGrade;
  rating?: StaticRating;
  danger?: StaticDanger;
}

interface StaticRating {
  value: number;
  max: number;
}

interface StaticDanger {
  value: number;
  max: number;
}

interface AltName {
  name: string;
  reference: string;
  date: string;
}

type StaticRouteType = 'boulder' | 'sport' | 'trad' | 'top-rope';

type StaticDescriptionSectionType = 'header' | 'text' | 'image' | 'video';

interface StaticAscent {
  date: string;
  name: string;
  references: string;
}

interface StaticDescriptionSection {
  type: StaticDescriptionSectionType;
  text: string;
}

interface StaticPadCount {
  count: number;
  subCount: number;
  spotter: number;
  subSpotter: number;
}

interface StaticRoute {
  index: number;
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
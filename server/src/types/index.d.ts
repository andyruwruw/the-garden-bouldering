export interface HrefObject {
  mountainProject?: string;
}

export interface FAObject {
  name: string;
  date?: string;
}

export interface DangerObject {
  child?: number;
  mountainProject?: number;
  heartFlutters?: number;
  old?: number;
}

export interface RatingObject {
  child?: number;
  old?: number;
  mountainProject?: {
    average: number;
    votes: number;
  }
}

export interface GradeOpinion {
  grade: number;
  subgrade: number;
}

export interface GradeObject {
  child?: GradeOpinion;
  old?: GradeOpinion;
  mountainProject?: GradeOpinion;
}

export type ImageType = 'topo' | 'action' | 'historical' | 'overview';

export interface Image {
  description: string;
  href: string;
  type: ImageType;
}

export interface Area {
  href: HrefObject | null;
  lat: number;
  long: number;
  name: string;
  elevation: number;
  boulders: Boulder[];
}

export interface Boulder {
  href: HrefObject | null;
  lat: number;
  long: number;
  name: string;
  elevation: number;
  images: Image[];
  routes: Record<string, Route>;
}

export interface Route {
  id?: number;
  href: HrefObject | null;
  name: string;
  altNames: string[];
  grade: GradeObject;
  firstAscent: FAObject | null;
  rating: RatingObject;
  variationOf?: number;
  danger?: DangerObject;
}

export interface Coordinates {
  lat: number;
  long: number;
}

export interface MountainProjectItem {
  elevation: number | null;
  pageViews: number | null;
  fa: string | null;
  type: string | null;
  name: string | null;
  grade: string | null;
  rating: number | null;
  coords: Coordinates | null;
  url: string | null;
  isRoute: boolean;
  isArea: boolean;
}

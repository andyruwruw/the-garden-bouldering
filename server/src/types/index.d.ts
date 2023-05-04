export interface HrefObject {
  mountainProject?: string;
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
  firstAscent: string | null;
  rating: RatingObject;
  variationOf?: number;
}
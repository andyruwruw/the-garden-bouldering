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

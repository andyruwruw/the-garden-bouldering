/**
 * Old guidebook transcription.
 */
export interface OldGuide {
  /**
   * Name of the guidebook.
   */
  name: string;

  /**
   * Author of the guidebook.
   */
  author: string;

  /**
   * Suggested date the guidebook was written.
   */
  date: string;

  /**
   * Transcriptor of the guidebook to JSON.
   */
  transcriptor: string;

  /**
   * All items in guidebook.
   */
  children: Area[];
}

/**
 * Old guidebook area.
 */
export interface OldGuideArea {
  /**
   * Name of the climbing area.
   */
  name: string;

  /**
   * Alternate names provided by guidebook for area.
   */
  'alt-names'?: string[];

  /**
   * Description of the area.
   */
  'description'?: string | string[];

  /**
   * Transcriptor's notes about transcription choices made or questions.
   */
  'transcription-notes': string;

  /**
   * Items inside this area.
   */
  children: OldGuideBoulder[];
}

/**
 * Old guidebook bolder.
 */
export interface OldGuideBoulder {
  /**
   * Assigned ID of the boulder.
   */
  id: number;

  /**
   * Name of the boulder.
   */
  name: string;

  /**
   * Description of the boulder.
   */
  description?: string;

  /**
   * Transcriptor's notes about transcription choices made or questions.
   */
  'transcription-notes'?: string;

  /**
   * All items on the boulders, whether faces or routes.
   */
  children?: (OldGuideRoute | OldGuideBoulderFace)[];
}

/**
 * Grade for each boulder.
 * 
 * Grades are based on V-scale
 * 0-17 = V0-V17
 * -2 = Unknown
 *
 * Subgrades are edits on the base grade.
 * -1 = V0-
 * 1 = V0+
 * 2 = V0/V1
 * 3 = V0-V2
 * 
 * Some grades in the old guidebook are given a range of three.
 */
export interface OldGuideGrade {
  /**
   * Base grade of the route from the V-scale.
   */
  grade: number;

  /**
   * Subgrades are edits on the base grade.
   * -1 = V0-
   * 1 = V0+
   * 2 = V0/V1
   * 3 = V0-V2
   */
  'sub-grade'?: number;
}

/**
 * Object containing information about ascents.
 */
export interface OldGuideAscent {
  /**
   * Name of climber.
   */
  name?: string;

  /**
   * Date of ascent.
   */
  date?: string;
}

/**
 * Types of tags for routes.
 */
export type OldGuideTag = 'wet' | 'overhung' | 'cave' | 'eliminate' | 'traverse' | 'arête' | 'dyno' | 'bad-landing' | 'classic' | 'slopers' | 'crimps' | 'mantle' | 'high-ball' | 'steep' | 'slab' | 'project' | 'crack' | 'off-width' | 'warm-up' | 'short';

/**
 * Types of projects.
 */
export type OldGUidProjectStatus = 'open' | 'closed' | 'unknown';

/**
 * Old guidebook route information.
 */
export interface OldGuideRoute {
  /**
   * Given ID to the route.
   */
  id: number;

  /**
   * Name of the route.
   */
  name: string;

  /**
   * Grade of the route.
   */
  grade?: OldGuideGrade;

  /**
   * Description of the route.
   */
  description?: string;

  /**
   * Tags for the boulder problem for searchability.
   */
  tags?: OldGuideTag[];

  /**
   * First ascent.
   */
  fa?: OldGuideAscent;

  /**
   * Second ascent.
   */
  second?: OldGuideAscent;

  /**
   * An edited description omitting edits that were unable to be read.
   */
  'usable-description'?: string;

  /**
   * Transcriptor's notes about transcription choices made or questions.
   */
  'transcription-notes'?: string;

  /**
   * If the project is claimed open.
   */
  'project-status'?: OldGUidProjectStatus;

  /**
   * Whether this problem is a variant of another (sit, stand starts)
   */
  'variant'?: boolean;

  /**
   * Whether this problem is an eliminate of another.
   */
  'eliminate'?: boolean;
}

/**
 * Old guidebook distinction of faces on a boulder.
 */
export interface OldGuideBoulderFace {
  /**
   * Name of the face.
   */
  name: string;

  /**
   * All items on the face.
   */
  children?: OldGuideRoute[];

  /**
   * Transcriptor's notes about transcription choices made or questions.
   */
  'transcription-notes'?: string;
}

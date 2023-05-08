// Local Imports
import {
  GRADE_IN_BETWEEN,
  GRADE_PARSER,
  GRADE_UNKNOWN,
} from '../config';

// Types
import { GradeOpinion } from '../types';

/**
 * Parses a grade from string.
 *
 * @param {string} text Grade string.
 */
export const parseStringGrade = (text: string): GradeOpinion => {
  if (GRADE_UNKNOWN.test(text)) {
    return {
      grade: -2,
    };
  }

  if (GRADE_IN_BETWEEN.test(text)) {
    const [
      ,
      lower
    ] = text.match(GRADE_IN_BETWEEN) as string[];

    return {
      grade: parseInt(lower, 10),
      subGrade: 2,
    };
  }

  if (GRADE_PARSER.test(text)) {
    const [
      ,
      grade,
      subGrade,
    ] = text.match(GRADE_PARSER) as string[];

    if (subGrade && subGrade === '-') {
      return {
        grade: parseInt(grade, 10),
        subGrade: -1,
      };
    }

    if (subGrade && subGrade === '+') {
      return {
        grade: parseInt(grade, 10),
        subGrade: 1,
      };
    }

    return {
      grade: parseInt(grade, 10),
    };
  }

  return {
    grade: -2,
  };
}
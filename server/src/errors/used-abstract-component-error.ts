// Local Imports
import { MESSAGE_USED_ABSTRACT_COMPONENT_ERROR } from '../config/messages';

/**
 * Abstract Component Class Used Error.
 */
export class UsedAbstractComponentError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_COMPONENT_ERROR);
  }
}

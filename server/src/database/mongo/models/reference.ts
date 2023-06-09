// Packages
import mongoose from 'mongoose';

/**
 * Reference from guides to database items.
 */
const schema = new mongoose.Schema({
  of: {
    type: String,
    required: true,
  },

  ref: {
    type: String,
    required: true,
  },

  guide: {
    type: String,
    required: true,
  },

  version: {
    type: String,
    required: true,
  },

  id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    default: 'Unknown',
  },
});

export const Reference = mongoose.model('Reference', schema);

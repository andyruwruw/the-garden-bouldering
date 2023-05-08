// Packages
import mongoose from 'mongoose';

/**
 * Climbing crags.
 */
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Unknown',
  },

  altNames: {
    type: Array,
    of: String,
    default: [],
  },

  externalIds: {
    type: Object,
    default: {},
  },

  externalHrefs: {
    type: Object,
    default: {},
  },

  shape: {
    type: Array,
    of: String,
    default: [],
  },

  location: {
    lat: {
      type: Number,
      default: 0,
    },

    long: {
      type: Number,
      default: 0,
    },
  },
});

export const Crag = mongoose.model('Crag', schema);

// Packages
import mongoose from 'mongoose';

/**
 * Climbing routes.
 */
const schema = new mongoose.Schema({
  areas: {
    type: Array,
    of: String,
    default: [],
  },

  boulders: {
    type: Array,
    of: String,
    default: [],
  },

  guides: {
    type: Array,
    of: String,
    default: [],
  },

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

  location: {
    type: Number,
    default: 0,
  },

  grade: {
    type: Object,
    default: {},
  },

  rating: {
    type: Object,
    default: {},
  },

  tags: {
    type: Array,
    of: String,
    default: [],
  },

  ascents: {
    type: Array,
    of: Object,
    default: [],
  },
});

export const Route = mongoose.model('Route', schema);

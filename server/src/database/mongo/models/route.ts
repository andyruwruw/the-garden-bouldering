// Packages
import mongoose from 'mongoose';

/**
 * Climbing routes.
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

  crag: {
    type: String,
    required: true,
  },

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

  location: {
    type: Number,
    default: -1,
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

  danger: {
    type: Object,
    default: {},
  },

  images: {
    type: Array,
    of: String,
    default: [],
  },
});

export const Route = mongoose.model('Route', schema);

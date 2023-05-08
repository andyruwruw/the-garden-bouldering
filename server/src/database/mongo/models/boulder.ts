// Packages
import mongoose from 'mongoose';

/**
 * Climbing boulders.
 */
const schema = new mongoose.Schema({
  crag: {
    type: String,
    default: '',
  },

  areas: {
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

  danger: {
    type: Object,
    default: {},
  },
});

export const Boulder = mongoose.model('Boulder', schema);

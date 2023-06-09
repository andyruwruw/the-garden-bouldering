// Packages
import mongoose from 'mongoose';

/**
 * Climbing boulders.
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

  latitude: {
    type: Number,
    default: 0,
  },

  longitude: {
    type: Number,
    default: 0,
  },

  elevation: {
    type: Number,
    default: 0,
  },

  shape: {
    type: Array,
    of: String,
    default: [],
  },

  routes: {
    type: Number,
    default: 0,
  },

  updated: {
    type: Date,
    default: new Date(),
  },

  images: {
    type: Array,
    of: String,
    default: [],
  },
});

export const Boulder = mongoose.model('Boulder', schema);

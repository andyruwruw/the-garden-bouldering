// Packages
import mongoose from 'mongoose';

/**
 * Climbing crags.
 */
const schema = new mongoose.Schema({
  of: {
    type: String,
    default: '',
  },

  ref: {
    type: String,
    default: '',
  },

  href: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'boulder',
  },

  shapes: {
    type: Array,
    of: String,
    default: [],
  },

  topos: {
    type: Array,
    of: Object,
    default: [],
  },

  description: {
    type: String,
    default: '',
  },

  width: {
    type: Number,
    default: 0,
  },

  height: {
    type: Number,
    default: 0,
  },
});

export const Image = mongoose.model('Image', schema);

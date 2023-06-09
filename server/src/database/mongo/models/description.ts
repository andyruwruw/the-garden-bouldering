// Packages
import mongoose from 'mongoose';

/**
 * Climbing descriptions.
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

  type: {
    type: String,
    default: 'description',
  },

  text: {
    type: Array,
    of: String,
    default: [],
  },
  
  guide: {
    type: String,
    default: '',
  },

  version: {
    type: String,
    default: '',
  },

  author: {
    type: String,
    required: true,
  },

  created: {
    type: String,
    default: '',
  },

  updated: {
    type: Date,
    required: new Date(),
  },

  href: {
    type: String,
    default: '',
  },
});

export const Description = mongoose.model('Description', schema);

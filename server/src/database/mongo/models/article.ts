// Packages
import mongoose from 'mongoose';

/**
 * Climbing articles.
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
    default: 'history',
  },

  title: {
    type: String,
    default: 'Article',
  },

  content: {
    type: Array,
    of: Object,
    default: [],
  },

  author: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    default: new Date(),
  },

  updated: {
    type: Date,
    default: new Date(),
  },
});

export const Article = mongoose.model('Article', schema);

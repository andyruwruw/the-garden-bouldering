// Packages
import mongoose from 'mongoose';

/**
 * Climbing articles.
 */
const schema = new mongoose.Schema({
  link: {
    type: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      required: true,
    },
  },

  type: {
    type: String,
    default: 'history',
  },

  content: {
    type: Array,
    of: {
      text: {
        type: String,
      },
      href: {
        type: String,
      },
      type: {
        type: String,
        default: 'paragraph',
      },
    },
    default: [],
  },

  owner: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    default: Date.now(),
  },

  updated: {
    type: Date,
    default: Date.now(),
  },
});

export const Article = mongoose.model('Article', schema);

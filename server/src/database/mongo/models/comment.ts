// Packages
import mongoose from 'mongoose';

/**
 * Climbing comment.
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

  text: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    required: new Date(),
  },

  updated: {
    type: Date,
    required: new Date(),
  },

  removed: {
    type: Date,
    required: new Date(0),
  },
});

export const Comment = mongoose.model('Comment', schema);

// Packages
import mongoose from 'mongoose';

/**
 * Climbing comment.
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

  text: {
    type: String,
    required: true,
  },

  owner: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: new Date(),
  },

  updated: {
    type: Date,
    required: new Date(),
  },
});

export const Comment = mongoose.model('Comment', schema);

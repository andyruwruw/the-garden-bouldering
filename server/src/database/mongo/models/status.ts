// Packages
import mongoose from 'mongoose';

/**
 * Climbing status.
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
    default: 'conditions',
  },

  values: {
    type: Array,
    of: String,
  },

  author: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },
});

export const Status = mongoose.model('Status', schema);

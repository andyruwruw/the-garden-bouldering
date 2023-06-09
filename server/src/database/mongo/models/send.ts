// Packages
import mongoose from 'mongoose';

/**
 * Climbing sends.
 */
const schema = new mongoose.Schema({
  route: {
    type: String,
    required: true,
  },

  climber: {
    type: String,
    required: true,
  },

  attempts: {
    type: Number,
    default: 1,
  },

  laps: {
    type: Number,
    default: 1,
  },

  type: {
    type: String,
    default: 'redpoint',
  },

  notes: {
    type: String,
    default: '',
  },

  created: {
    type: String,
    default: '',
  },

  href: {
    type: String,
    default: '',
  },

  likes: {
    type: Array,
    of: String,
  },
});

export const Send = mongoose.model('Send', schema);

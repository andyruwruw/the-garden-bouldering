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

  type: {
    type: String,
    default: 'redpoint',
  },

  notes: {
    type: String,
    default: '',
  },

  date: {
    type: String,
    default: '',
  },
});

export const Attempt = mongoose.model('Attempt', schema);

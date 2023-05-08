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
    type: String,
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

export const Send = mongoose.model('Send', schema);

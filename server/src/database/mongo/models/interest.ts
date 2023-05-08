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

  type: {
    type: String,
    default: 'project',
  },

  date: {
    type: String,
    default: '',
  },
});

export const Interest = mongoose.model('Interest', schema);

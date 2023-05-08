// Packages
import mongoose from 'mongoose';

/**
 * Climbing sends.
 */
const schema = new mongoose.Schema({
  versions: {
    type: Object,
    default: {},
  },

  updated: {
    type: Date,
    default: new Date(),
  },
});

export const Process = mongoose.model('Process', schema);

// Packages
import mongoose from 'mongoose';

/**
 * Climbing status.
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
    default: 'description',
  },

  value: {
    type: Array,
    of: String,
  },

  owner: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },
});

export const Status = mongoose.model('Status', schema);

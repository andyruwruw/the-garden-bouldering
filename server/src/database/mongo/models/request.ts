// Packages
import mongoose from 'mongoose';

/**
 * Edit requests.
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
    default: 'description',
  },

  text: {
    type: String,
    required: true,
  },

  owner: {
    type: String,
    required: true,
  },

  created: {
    type: String,
    required: true,
  },

  approved: {
    type: String,
    required: true,
  },
});

export const Request = mongoose.model('Request', schema);

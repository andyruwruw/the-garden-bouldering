// Packages
import mongoose from 'mongoose';

/**
 * Edit requests.
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

  ref: {
    type: String,
    default: '',
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
    type: String,
    required: true,
  },
});

export const Request = mongoose.model('Request', schema);

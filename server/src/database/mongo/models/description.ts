// Packages
import mongoose from 'mongoose';

/**
 * Climbing descriptions.
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

  text: {
    type: String,
    required: true,
  },
  
  guide: {
    type: String,
    default: '',
  },

  owner: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  updated: {
    type: Date,
    required: new Date(),
  },

  href: {
    type: String,
    default: '',
  },
});

export const Description = mongoose.model('Description', schema);

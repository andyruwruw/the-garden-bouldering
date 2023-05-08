// Packages
import mongoose from 'mongoose';

/**
 * Climbing user.
 */
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: '',
  },

  birthday: {
    type: Date,
    default: new Date(0),
  },

  maxGrade: {
    grade: {
      type: Number,
      default: -1,
    },

    subGrade: {
      type: Number,
      default: 0,
    },
  },

  joined: {
    type: Date,
    default: Date.now(),
  },

  started: {
    type: Date,
    default: new Date(0),
  },

  banned: {
    type: Boolean,
    default: false,
  },

  admin: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model('User', schema);

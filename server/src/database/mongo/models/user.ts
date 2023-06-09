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

  bio: {
    type: String,
    default: '',
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
    type: Object,
    default: {},
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

  privacy: {
    type: String,
    default: 'public',
  },
});

export const User = mongoose.model('User', schema);

// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  reference: {
    type: String,
    required: true,
  },

  route: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'link',
  },

  href: {
    type: String,
    default: '',
  },

  page: {
    type: Number,
    default: 0,
  },

  id: {
    type: String,
    default: '',
  },

  grade: {
    type: Object,
    default: {
      value: -2,
      subValue: 0,
    },
  },

  rating: {
    type: Object,
    default: {
      value: -1,
      max: 5,
    },
  },

  danger: {
    type: Object,
    default: {
      value: 0,
      max: 5,
    },
  },
});

export const ReferenceRouteModel = model('ReferenceRoute', schema);

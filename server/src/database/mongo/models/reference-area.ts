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

  area: {
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
});

export const ReferenceAreaModel = model('ReferenceArea', schema);

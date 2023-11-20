// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'pdf',
  },

  name: {
    type: String,
    required: true,
  },
  
  author: {
    type: String,
    default: '',
  },

  date: {
    type: String,
    default: '',
  },

  href: {
    type: String,
    default: '',
  },
});

export const ReferenceModel = model('Reference', schema);

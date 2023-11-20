// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  type: {
    type: String,
    default: 'route',
  },

  name: {
    type: String,
    required: true,
  },

  reference : {
    type: String,
    required: true,
  },

  date: {
    type: String,
    default: '',
  },

  id: {
    type: String,
    default: '',
  },
});

export const RouteModel = model('Route', schema);

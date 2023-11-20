// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  index: {
    type: Number,
    default: 0,
  },

  type: {
    type: String,
    default: 'boulder',
  },

  name: {
    type: String,
    default: 'Unnamed',
  },
});

export const RouteModel = model('Route', schema);

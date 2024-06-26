const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OOASchema = new Schema({
  seed: {
    type: String,
    required: true
  },

  baseSeed: {
    type: String,
    required: true
  },

  patchData: {
    type: Object,
    required: true
  },

  options: {
    type: Object,
    required: true
  },

  spoiler: {
    type: Object,
    required: true
  },

  originalLog: {
    type: String,
    required: true,
  },

  locked: {
    type: Boolean,
    default: false,
  },

  // seconds since epoch
  genTime: {
    type: Number,
    default: Math.floor((new Date).valueOf()/1000),
  },

  timeout: {
    type: Number,
    default: 14400,
  },

  unlockTime: {
    type: Number,
    default: 0,
  },

  unlockCode: {
    type: String,
  },
});

module.exports = mongoose.model('ooas', OOASchema);

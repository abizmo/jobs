'use strict';

import mongoose from 'mongoose';

var JobSchema = new mongoose.Schema({
  title: String,
  desc: String,
  company: String,
  url: String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  _category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

export default mongoose.model('Job', JobSchema);

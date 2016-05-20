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
  }
});

export default mongoose.model('Job', JobSchema);

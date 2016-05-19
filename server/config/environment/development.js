'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/jobs-dev'
  },

  // Seed database on startup
  seedDB: true

};
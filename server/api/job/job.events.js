/**
 * Job model events
 */

'use strict';

import {EventEmitter} from 'events';
import Job from './job.model';
var JobEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
JobEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Job.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    JobEvents.emit(event + ':' + doc._id, doc);
    JobEvents.emit(event, doc);
  }
}

export default JobEvents;

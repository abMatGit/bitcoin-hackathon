'use strict'

var BitQueue = require('./bit_queue');
var BitQueueElement = require('./bit_queue_element');
var queue = new BitQueue([]);

['foo', 'bar', 'quux'].forEach(function(name) {
    new BitQueueElement(queue, name, 1);
});

module.exports = queue

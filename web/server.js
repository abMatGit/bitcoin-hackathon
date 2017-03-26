'use strict'

var BitQueue = require('./queue');
var BitQueueElement = require('./bit_queue_element');

var q = new BitQueue([]);
var elem = new BitQueueElement(q, 'new item', 1);

var express = require('express');
var router = express.Router();

var queue = require('../server');
var BitQueueElement = require('../bit_queue_element');

/* GET users listing. */
router.post('/', function(req, res, next) {
    new BitQueueElement(queue, req.body.bidName, 1);
    res.redirect('/');
});

module.exports = router;

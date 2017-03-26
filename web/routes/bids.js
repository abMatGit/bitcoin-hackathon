var express = require('express');
var router = express.Router();

var queue = require('../server');
var BitQueueElement = require('../bit_queue_element');

/* GET users listing. */
router.post('/', function(req, res, next) {
    new BitQueueElement(queue, req.body.bidName, 1);
    res.redirect('/');
});

router.post('/:value', function(req, res, next) {
    console.log(req.body);
    console.log(req.params);
    var element = queue.queue.find(function(el) {
        return el.value == req.params.value
    });

    element.addWorth(parseInt(req.body.bidWorth));
    res.redirect('/');
});

module.exports = router;

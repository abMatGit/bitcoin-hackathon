var express = require('express');
var router = express.Router();
var queue = require('../server');

/* GET home page. */
router.get('/', function(req, res, next) {
    var q = queue.queue.slice()
    res.render('index', {
        bids: q.reverse()
    });
});

module.exports = router;

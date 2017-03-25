'use strict';

var bcoin = require('bcoin');

var node = new bcoin.fullnode({
  network: 'simnet',
  db: 'memory',
  nodes: ['10.7.64.53', 'redsquad.dev.purse.io']
});

(async function() {
  await node.open();
  await node.connect();

  node.on('connect', function(entry, block) {
    console.log('%s (%d) added to chain.', entry.rhash(), entry.height);
  });

  node.on('tx', function(tx) {
    console.log('%s added to mempool.', tx.txid());
  });

  node.startSync();
})();

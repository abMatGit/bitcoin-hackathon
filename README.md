# Bcoin

## Setup

Setup bcoin by following the steps on their [bcoin git repo][bcoin_repo]

Install redis, [more info here][redis_post]
```
$ brew install redis
```

## Install
```
$ git clone git@github.com:abMatGit/bitcoin-hackathon.git
$ cd bitcoin-hackathon
```

## Run bcoin on simnet
```
bcoin --network simnet --nodes 10.7.64.53,redsquad.dev.purse.io --host '::' --public-host <insert your network ip>
```

## Run the app
```
$ npm install

$ npm start
```

[redis_post]: https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298
[bcoin_repo]: https://github.com/bcoin-org/bcoin

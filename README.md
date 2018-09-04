# databiz-website

<!-- [![Build Status](https://travis-ci.org/bitrock-frontend/basic-starter-kit.svg?branch=master)](https://travis-ci.org/bitrock-frontend/basic-starter-kit) -->

## Requisites
You need the following software installed in your machine in order to get started:
* [Node.js](https://nodejs.org/en/) latest stable
* [Yarn](https://yarnpkg.com/en/) package manager
Both can be installed via Homebrew on MacOS & Linux environments.

## Create a local development environment
Clone the repo locally
```bash
$ git clone git@github.com:bitrockteam/databiz-website.git
```

Move on the folder and install dependencies with Yarn
```bash
$ cd databiz-website && yarn
```

Start the development webserver on `localhost:8090`
```bash
$ yarn start
```

<!-- ## Development -->

## Branching policy
This project follows a simple branching policy:

* `master` contains only stable code, and should not be updated directly
* `development` where evolutive or experimental code is written
* `gh-pages` where the distrubutable static files are deployed

Do **NOT** merge directly `development` into `master`, always send a PR to have a review.

<!-- ## Update & deploy
Every time the `master` branch got updated (a direct commit or a merged PR) a new [Travis CI](https://travis-ci.org/bitrockteam/tech-radar) job is triggered and it composed basically of 2 steps:

1. create new build of static files
2. deploy the build folder into the related `gh-pages` branch -->


## Licenses
The Databiz Group, Bitrock and Radicalbit logos are registered trademarks.
Code is distributed under the [GNU AGPLv3 license](LICENSE).
Included stock photos have been [provided by Unsplash](https://unsplash.com/license).
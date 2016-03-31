# vile-eslint [![Circle CI](https://circleci.com/gh/brentlintner/vile-eslint.svg?style=svg&circle-token=30983c1276bcd5af3c68e487994c5a149393ede5)](https://circleci.com/gh/brentlintner/vile-eslint)

[![score-badge](https://vile.io/brentlintner/vile-eslint/badges/score?token=MSA5WLCjymNb3VvSBT3h)](https://vile.io/brentlintner/vile-eslint) [![security-badge](https://vile.io/brentlintner/vile-eslint/badges/security?token=MSA5WLCjymNb3VvSBT3h)](https://vile.io/brentlintner/vile-eslint) [![coverage-badge](https://vile.io/brentlintner/vile-eslint/badges/coverage?token=MSA5WLCjymNb3VvSBT3h)](https://vile.io/brentlintner/vile-eslint) [![dependency-badge](https://vile.io/brentlintner/vile-eslint/badges/dependency?token=MSA5WLCjymNb3VvSBT3h)](https://vile.io/brentlintner/vile-eslint)

A [vile](http://vile.io) plugin for [eslint](http://eslint.org).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i vile-eslint

## Config

The plugin uses ESLint's `CLIEngine` module to run analysis, so it will
automatically pickup your `.eslintrc` and `.eslintignore` files.

## Hacking

    cd vile-eslint
    npm install
    npm test

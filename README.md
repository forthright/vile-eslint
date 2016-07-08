# vile-eslint [![CircleCI](https://circleci.com/gh/forthright/vile-eslint.svg?style=svg&circle-token=30983c1276bcd5af3c68e487994c5a149393ede5)](https://circleci.com/gh/forthright/vile-eslint)

[![score-badge](https://vile.io/brentlintner/vile-eslint/badges/score?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/brentlintner/vile-eslint) [![security-badge](https://vile.io/brentlintner/vile-eslint/badges/security?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/brentlintner/vile-eslint) [![coverage-badge](https://vile.io/brentlintner/vile-eslint/badges/coverage?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/brentlintner/vile-eslint) [![dependency-badge](https://vile.io/brentlintner/vile-eslint/badges/dependency?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/brentlintner/vile-eslint)

A [vile](http://vile.io) plugin for [eslint](http://eslint.org).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i @forthright/vile --save-dev
    npm i @forthright/vile-eslint --save-dev

## Config

The plugin uses ESLint's `CLIEngine` module to run analysis, so it will
automatically pickup your `.eslintrc` and `.eslintignore` files.

## Ignoring Files

Along with any ignore patterns in `.eslintignore`, `vile.ignore`
and `eslint.ignore` data will be added to the CLIEngine call.

Example:

```yaml
eslint:
  ignore:
    - .test
```

## Allowing Files

You can set `vile.allow` or `eslint.allow` to allow certain files.

Example:

```yaml
eslint:
  allow:
    - src
```

## Hacking

    cd vile-eslint
    npm install

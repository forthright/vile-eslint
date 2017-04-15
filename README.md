# vile-eslint [![CircleCI](https://circleci.com/gh/forthright/vile-eslint.svg?style=shield&circle-token=30983c1276bcd5af3c68e487994c5a149393ede5)](https://circleci.com/gh/forthright/vile-eslint) [![score-badge](https://vile.io/api/v0/projects/vile-eslint/badges/score?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint) [![security-badge](https://vile.io/api/v0/projects/vile-eslint/badges/security?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint) [![coverage-badge](https://vile.io/api/v0/projects/vile-eslint/badges/coverage?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint) [![dependency-badge](https://vile.io/api/v0/projects/vile-eslint/badges/dependency?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint)

A [vile](http://vile.io) plugin for [eslint](http://eslint.org).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i -D vile vile-eslint

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

## TypeScript Support

If you are using something like [typescript-eslint-parser](https://www.npmjs.com/package/typescript-eslint-parser),
you might not see any issues reported unless you add a glob pattern to
your `src` path.

An example `.vile.yml` (taken from [vile's .eslintrc](https://github.com/forthright/vile/blob/master/.eslintrc.yml)):

```yaml
eslint:
  allow:
    - src/*
  ignore:
    - lib
```

## Hacking

    cd vile-eslint
    npm install

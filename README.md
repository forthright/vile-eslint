# vile-eslint [![CircleCI](https://circleci.com/gh/forthright/vile-eslint.svg?style=shield&circle-token=30983c1276bcd5af3c68e487994c5a149393ede5)](https://circleci.com/gh/forthright/vile-eslint) [![score-badge](https://vile.io/api/v0/projects/vile-eslint/badges/score?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint) [![coverage-badge](https://vile.io/api/v0/projects/vile-eslint/badges/coverage?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint) [![dependency-badge](https://vile.io/api/v0/projects/vile-eslint/badges/dependency?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-eslint)

A [Vile](http://vile.io) plugin for identifying common style
and maintainability issues in your JavaScript code (via [ESLint](http://eslint.org)).

## Requirements

- [Node.js](http://nodejs.org)

## Installation

    npm i -D vile vile-eslint

## Usage

If you don't have an ESLint config file create one first:

    npx eslint --init

Then:

    npx vile a -p eslint

Or:

    npx vile a -p eslint some/file.js some/path

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

An example `.vile.yml` (taken from [vile's](https://github.com/forthright/vile/blob/master/.vile.yml)):

```yaml
eslint:
  allow:
    - src/*
  ignore:
    - lib
```

## Versioning

This project uses [Semver](http://semver.org).

## Licensing

This project is licensed under the [MPL-2.0](LICENSE) license.

Any contributions made to this project are made under the current license.

## Contributions

Current list of [Contributors](https://github.com/forthright/vile-eslint/graphs/contributors).

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request](https://github.com/forthright/vile-eslint/pulls).

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub](https://github.com/forthright/vile-eslint/issues).

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

By participating in this project you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Maintainers

- Brent Lintner - [@brentlintner](http://github.com/brentlintner)

## Developing

    cd vile-eslint
    npm install

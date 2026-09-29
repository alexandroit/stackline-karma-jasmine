# @stackline/karma-jasmine

> A Karma plugin - adapter for Jasmine testing framework.

[![npm version](https://img.shields.io/npm/v/@stackline/karma-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/karma-jasmine)
[![license](https://img.shields.io/npm/l/@stackline/karma-jasmine.svg?style=flat-square)](https://github.com/alexandroit/stackline-karma-jasmine)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-karma-jasmine-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-karma-jasmine)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/karma-jasmine/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/karma-jasmine/)** | **[npm](https://www.npmjs.com/package/@stackline/karma-jasmine)** | **[Issues](https://github.com/alexandroit/stackline-karma-jasmine/issues)** | **[Repository](https://github.com/alexandroit/stackline-karma-jasmine)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/karma-jasmine` is the Stackline-maintained distribution of `karma-jasmine@5.1.0`. It is an independent continuation of [karma-jasmine](https://github.com/karma-runner/karma-jasmine); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/karma-jasmine@1.0.1` |
| API target | `karma-jasmine@5.1.0` |
| Supported Node.js | `>=12` |
| License | `MIT` |
| Main entry | `lib/index.js` |
| Runtime dependencies | `jasmine-core` |
| Peer dependencies | `karma ^6.0.0` |

## Installation

```bash
npm install @stackline/karma-jasmine
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install karma-jasmine@npm:@stackline/karma-jasmine
```

## Usage and API reference

### karma-jasmine


> Adapter for the [Jasmine](https://jasmine.github.io/) testing framework.

## Installation

```bash
npm install @stackline/karma-jasmine --save-dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '*.js'
    ]
  })
}
```

If you want to run only some tests whose name match a given pattern you can do this in the following way

```bash
$ karma start &
$ karma run -- --grep=<pattern>
```

where pattern is either a string (e.g `--grep=#slow` runs tests containing "#slow") or a Regex (e.g `--grep=/^(?!.*#slow).*$/` runs tests _not_ containing "#slow").

You can also pass it to `karma.config.js`:

```js
module.exports = function(config) {
  config.set({
    // ...
    client: {
      args: ['--grep', '<pattern>'],
      // ...
    }
  })
}
```

If you want to pass configuration options directly to jasmine you can do this in the following way

```js
module.exports = function(config) {
  config.set({
    client: {
      jasmine: {
        random: true,
        seed: '4321',
        oneFailurePerSpec: true,
        failFast: true,
        timeoutInterval: 1000
      }
    }
  })
}
```

## Debug by URL

Failing tests print a debug URL with `?spec=`. Use it with `--no_single_run`
and paste it into your browser to focus on a single failing test.

## Sharding

By setting `config.client.shardIndex` and `config.client.totalShards`, you can
run a subset of the full set of specs. Complete sharding support needs to be
done in the process that calls karma, and would need to support test result
integration across shards.

## Custom spec filter

Providing a [custom spec filter](https://jasmine.github.io/api/edge/Configuration#specFilter) is also supported.

Example:

```js
// Users are able to set a custom specFilter themselves

jasmine.getEnv().configure({
  specFilter: function (spec) {
    return spec.getFullName() === 'spec that succeeds'
  }
})

describe('spec', () => {
  it('that fails', () => {
    fail('This spec should not run!')
  })

  it('that succeeds', () => {
    expect(1).toBe(1)
  })
})
```

---

For more information on Karma see the [homepage](https://karma-runner.github.io/).

## Credits and original authors

- Original project: [karma-jasmine](https://github.com/karma-runner/karma-jasmine).
- Vojta Jina.
- Maksim Ryzhikov.
- johnjbarton.
- Jonathan Ginsburg.
- Mark Ethan Trostler.
- Friedel Ziegelmayer.
- XhmikosR.
- olegskl.
- semantic-release-bot.
- dependabot[bot].
- dignifiedquire.
- Cornelius Schmale.
- Arthur Thornton.
- Patrick McGuckin.
- Richard Park.
- Fernando Costa.
- Nico Jansen.
- Aaron Hartwig.
- Alesei N.
- Barry Fitzgerald.
- Dirk T.
- Dmitriy Tychshenko.
- Flavian Hautbois.
- Georgii Dolzhykov.
- Gregg Van Hove.
- Jacob Trimble.
- João Pereira.
- Keen Yee Liau.
- Limon Monte.
- Luis Aleman.
- Marek Vavrecan.
- Matthew Hill.
- Milan Lempera.
- Niels Dequeker.
- Robin Gloster.
- Sahat Yalkabov.
- Sampo Kivistö.
- Schaaf, Martin.
- Sergey Tatarintsev.
- Sid Vishnoi.
- Stefan Dragnev.
- Tobias Speicher.
- Todd Wolfson.
- Vladimir Belov.
- Yusuke Iinuma.
- jiverson.
- rpark.
- strille.
- Copyright (C) 2011-2013 Google, Inc.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-karma-jasmine).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.

# Upstream review

Source: [karma-jasmine@5.1.0, c3f702a2a567086e6069dd57b0308c2da1a90e37](https://github.com/karma-runner/karma-jasmine/commit/c3f702a2a567086e6069dd57b0308c2da1a90e37). Existing published runtime files match the integrity-checked upstream npm tarball byte-for-byte. Generated adapter files, where applicable, are built from original sources. License and authorship notices remain unchanged.

## Issue triage (2026-09-29)

- [#333: Jasmine5 support](https://github.com/karma-runner/karma-jasmine/issues/333): Preserve the upstream jasmine-core^4.1.0 runtime contract; do not silently upgrade to a different Jasmine major.
- [#331: Context window parent access](https://github.com/karma-runner/karma-jasmine/issues/331): Run the original adapter unit and browser suites using the packed plugin.
- [#339: Release notes links](https://github.com/karma-runner/karma-jasmine/issues/339): Document the exact upstream tag, commit and package version directly.

No upstream contact was made and no blanket issue-resolution claim is implied. Node24 is used for development only; published engine declarations remain unchanged.

## Verification

`npm ci --ignore-scripts`, `npm run build --if-present`, `npm test`, `npm run test:package`, `npm audit --audit-level=low`. Exact CI tarballs require successful CI and CodeQL before provenance-enabled publication.

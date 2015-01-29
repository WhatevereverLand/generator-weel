'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('weel:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        someOption: true
      })
      .on('end', done);
  });

  it('Creates base project files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.gitignore',
      'README.md'
    ]);
  });

  it('Creates gulp Scaffolding', function () {
    assert.file([
      'gulpfile.js',
      'gulp/build.js',
      'gulp/options.js',
      'gulp/linting.js',
      'gulp/test.js',
      'gulp/watch.js',
      'gulp/serve.js',
      'gulp/assets/fonts.js',
      'gulp/assets/images.js',
      'gulp/assets/index.js',
      'gulp/assets/partials.js',
      'gulp/scripts/core.js',
      'gulp/scripts/common.js',
      'gulp/scripts/features.js',
      'gulp/styles/core.js',
      'gulp/styles/common.js',
      'gulp/styles/features.js',
      'gulp/styles/themes.js',
      'gulp/test/unit.js',
      'gulp/test/e2e.js'
    ]);
  });
});

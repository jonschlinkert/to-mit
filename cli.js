#!/usr/bin/env node

try {
  var success = require('success-symbol');
  var green = require('ansi-green');
  var writeFile = require('write');
  var pkg = require('load-pkg');
  pkg.license = 'MIT';
  writeFile.sync('package.json', JSON.stringify(pkg, null, 2));
  console.log(green(success) + '  done. Converted package.json `license` to "MIT"');
} catch(err) {
  var error = require('error-symbol');
  var red = require('ansi-red');
  console.log(red(error) + '  Error parsing package.json.');
}

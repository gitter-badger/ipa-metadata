'use strict';

var assert = require('assert');
var ipaMetadataParser = require('./');

describe('should parse .ipa file', function(){
  it('should contain the correct data', function(done) {
    ipaMetadataParser('tests/fixtures/testApp.ipa', function(err, data) {
      assert.equal(err, void 0);

      assert.equal(data.metadata['CFBundleDisplayName'], 'Test App');
      assert.equal(data.metadata['CFBundleIdentifier'], 'io.mts.testapp');
      assert.equal(data.metadata['CFBundleName'], 'Test App');
      assert.equal(data.metadata['CFBundleShortVersionString'], '1.0.0');
      assert.equal(data.metadata['CFBundleVersion'], '1337');

      done();
    });
  });
});

// This file is processed by gulp-preprocess

var config = {
  isSandbox: function() {
    return this.ENV === 'sandbox';
  },
  isLocal: function() {
    return this.ENV ==='local';
  },
  isTest: function() {
    return this.ENV ==='test';
  }
};

// @if ENV = 'production'
config.ENV = 'production';
// @endif

// @if ENV = 'sandbox'
config.ENV = 'sandbox';
// @endif

// @if ENV = 'local'
config.ENV = 'local';
// @endif


// This should be the last option so that its the default
// @if ENV = 'test'
config.ENV = 'test';
// @endif

module.exports = config;
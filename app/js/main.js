/**
 * Filename: main.js
 *
 * Bootstrap the application through requirejs.
 */

'use strict';

require.config({
  paths: {
    // Libraries and Frameworks
    jquery: '../../node_modules/jquery/dist/jquery',
    underscore: '../../node_modules/underscore/underscore',
    backbone: '../../node_modules/backbone/backbone',
    // Helper libraries
    text: '../../node_modules/requirejs-text/text'
  }
});

require(['app'], function(App) {
  App.initialize();
});
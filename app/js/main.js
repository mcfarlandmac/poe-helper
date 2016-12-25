/**
 * Filename: main.js
 *
 * Bootstrap the application through requirejs.
 */

'use strict';

require.config({
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        underscore: '../lib/underscore/underscore',
        backbone: '../lib/backbone/backbone'
    }
});

require(['app'], function(App) {
    App.initialize();
});
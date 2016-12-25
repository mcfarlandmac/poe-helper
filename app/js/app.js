/**
 * Filename: app.js
 *
 * Initialize the application.
 */

'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var initialize = function initialize() {
        console.log('hello world');
    };

    return {
        initialize: initialize
    };
});
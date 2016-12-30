/**
 * Filename: app.js
 *
 * Initialize the application.
 */

'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/app'
], function($, _, Backbone, ApplicationView) {
  var initialize = function initialize() {
    var application = new ApplicationView();

    application.render();
  };

  return {
    initialize: initialize
  };
});
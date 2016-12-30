'use strict';

define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Search = Backbone.Model.extend({
    // Set attribute defaults
    defaults: {
      keywords: ''
    }
  });

  return Search;
});
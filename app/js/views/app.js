'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/search'
], function($, _, Backbone, SearchView) {
  var ApplicationView = Backbone.View.extend({
    el: '#application',

    // Initialize the view
    initialize: function initialize() {
      // This view will contain several child views.
      this.childViews = {
        searchView: new SearchView()
      };
    },

    // Render this view, and all children views
    render: function render() {
      // For new, render the child views in specified order
      this.childViews.searchView.render();
    }
  });

  return ApplicationView;
});
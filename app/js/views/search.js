'use strict';

define([
  'underscore',
  'backbone',
  'text!templates/search-form.html'
], function(_, Backbone, searchTemplate) {
  var SearchFormView = Backbone.View.extend({
    // Define the element
    tagName: 'form',
    id: 'search-form',
    className: 'search-form',

    template: _.template(searchTemplate),

    // Render the search form
    render: function render() {
      this.$el.html(this.template());
    }
  });

  return SearchFormView;
});
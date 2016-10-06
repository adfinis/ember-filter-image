/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-filter-image',

  included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/svg.js/dist/svg.min.js');
    app.import(app.bowerDirectory + '/svg.filter.js/dist/svg.filter.min.js');
  }
};

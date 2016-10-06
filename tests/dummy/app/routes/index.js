import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('filters', {
      contrast: 1,
      grayscale: 1,
      brightness: 0
    })
  }
});

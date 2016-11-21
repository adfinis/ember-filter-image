import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('filters', {
      contrast: 0,
      saturation: 0,
      brightness: 0
    })
  }
});

import Ember from 'ember'
import layout from './template'

const FILTER_DEFAULTS = {
    saturation: 1,
    contrast:   1,
    brightness: 0
}

export default Ember.Component.extend({
  layout,

  tagName: '',

  ieCheck: Ember.inject.service('ieCheck'),

  crop: false,

  lockAspectRatio: true,

  filters: FILTER_DEFAULTS,

  isIE: Ember.computed('ieCheck', function() {
    return this.get('ieCheck').isIE()
  })
})

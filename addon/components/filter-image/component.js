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

  isIE: !!document.documentMode,

  crop: false,

  lockAspectRatio: true,

  filters: FILTER_DEFAULTS
})

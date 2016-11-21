import Ember from 'ember'
import layout from './template'

const FILTER_DEFAULTS = {
    saturation: 1,
    contrast:   1,
    brightness: 1
}

export default Ember.Component.extend({
  tagName: 'img',

  attributeBindings: [ 'src', 'style' ],

  layout,

  crop: false,

  lockAspectRatio: true,

  filters: FILTER_DEFAULTS,

  saturation: Ember.computed('filters.saturation', function() {
    return this.get('filters.saturation') || FILTER_DEFAULTS.saturation
  }),

  contrast: Ember.computed('filters.contrast', function() {
    return this.get('filters.contrast') || FILTER_DEFAULTS.contrast
  }),

  brightness: Ember.computed('filters.brightness', function() {
    return this.get('filters.brightness') || FILTER_DEFAULTS.brightness
  }),

  objectFit: Ember.computed('crop,lockAspectRatio', function() {
    let { crop, lockAspectRatio } = this.getProperties('crop', 'lockAspectRatio')

    if (!crop && !lockAspectRatio) {
      return 'fill'
    }

    return crop ? 'cover' : 'contain'
  }),

  style: Ember.computed('filters.{saturation,contrast,brightness},objectFit', function() {
    let b = this.get('filters.brightness')
    let c = this.get('filters.contrast')
    let s = this.get('filters.saturation')
    let o = this.get('objectFit')


    return Ember.String.htmlSafe(`filter: contrast(${c}) saturate(${s}) brightness(${b});object-fit: ${o};`)
  })
})

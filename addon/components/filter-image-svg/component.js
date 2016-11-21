import Ember from 'ember'
import layout from './template'

const FILTER_DEFAULTS = {
    saturation: 1,
    contrast:   1,
    brightness: 0
}

export default Ember.Component.extend({
  tagName: 'svg',

  layout,

  attributeBindings: [ 'xmlns', 'version', 'viewBox', 'preserveAspectRatio', 'xmlnsXlink:xmlns:xlink' ],

  xmlns: 'http://www.w3.org/2000/svg',

  version: '1.1',

  xmlnsXlink: 'http://www.w3.org/1999/xlink',

  viewBox: Ember.computed('width', 'height', function() {
    return `0 0 ${this.get('width')} ${this.get('height')}`
  }),

  crop: false,

  lockAspectRatio: true,

  preserveAspectRatio: Ember.computed('crop', 'lockAspectRatio', function() {
    if (!this.get('lockAspectRatio')) {
      return 'none'
    }

    return this.get('crop') ? 'xMidYMid slice' : 'xMidYMid meet'
  }),

  filters: FILTER_DEFAULTS,

  width: 0,

  height: 0,

  saturation: Ember.computed('filters.saturation', function() {
    return this.get('filters.saturation') || FILTER_DEFAULTS.saturation
  }),

  contrast: Ember.computed('filters.contrast', function() {
    const contrast = this.get('filters.contrast') || FILTER_DEFAULTS.contrast

    return {
      type:      'linear',
      slope:     contrast,
      intercept: -(0.5 * contrast) + 0.5
    }
  }),

  brightness: Ember.computed('filters.brightness', function() {
    const brightness = this.get('filters.brightness') || FILTER_DEFAULTS.brightness

    return {
      type:  'linear',
      slope: brightness
    }
  }),

  didReceiveAttrs() {
    this._super(...arguments)

    let img = new Image()

    img.onload = () => {
      const { width, height } = img

      this.setProperties({ width, height })
    }

    img.src = this.get('src')
  }
})

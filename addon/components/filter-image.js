import Ember from 'ember'

export default Ember.Component.extend({
  style: 'width:100%; height: 100%;',
  attributeBindings: ['style'],

  filters: null,

  didInsertElement() {
    const drawing = SVG(this.$('')[0])
    const image = drawing.image(this.get('src'))
    image.native().setAttribute('height', '100%')
    image.native().setAttribute('width', '100%')
    const meetOrSlice = this.get('size') === 'cover' ? 'slice' : 'meet'
    image.native().setAttribute('preserveAspectRatio', 'xMidYMid ' + meetOrSlice)
    this.set('image', image)
    this.set('drawing', drawing)
  },

  didReceiveAttrs() {
    if (this.get('image')) {
      this.set('image', this.get('image').load(this.get('src')))
    }
  },

  didRender() {
    this.draw()
  },

  draw: Ember.observer('filters.{contrast,grayscale,brightness},image', function() {
    const { contrast, grayscale, brightness } = this.get('filters')
    this.get('image').unfilter(true)
    /* eslint-disable array-callback-return, no-magic-numbers */
    this.get('image').filter(add => {
      const contrastFilter = add.componentTransfer({
        rgb: { type: 'linear', slope: contrast, intercept: -(0.5 * contrast) + 0.5 }
      })
      const saturationFilter = add.colorMatrix('saturate', grayscale)
      const brightnessFilter = add.componentTransfer({
        rgb: { type: 'linear', slope: 1, intercept: brightness }
      })
      saturationFilter.in(contrastFilter)
      brightnessFilter.in(saturationFilter)
    })
  })

})

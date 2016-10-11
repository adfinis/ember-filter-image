import Ember from 'ember'

export default Ember.Component.extend({
  filters: {
    grayscale:  1,
    contrast:   1,
    brightness: 0
  },

  loadImage() {
    this.get('image').load(this.get('src'))

    return new Ember.RSVP.Promise(resolve => {
      let img = new Image()

      img.onload = () => {
        this.get('drawing').size(img.width, img.height)
        this.get('image').size(img.width, img.height)

        resolve()
      }

      img.src = this.get('src')
    })
  },

  didInsertElement() {
    this.set('drawing', SVG(this.get('element')))
    this.set('image', this.get('drawing').image(this.get('src')))
  },

  didReceiveAttrs() {
    Ember.run.once(this, () => {
      this.loadImage().then(() => {
        this.draw()
      })
    })
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

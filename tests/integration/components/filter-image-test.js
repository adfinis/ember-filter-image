import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-image', 'Integration | Component | filter image', {
  integration: true
});

test('it renders', function(assert) {
  this.set('filters', {
      contrast: 1,
      grayscale: 1,
      brightness: 0
  });
  this.render(hbs`{{filter-image src="construction.png" filters=filters}}`);

  assert.equal(this.$('svg > image').attr('href'), 'construction.png');
});


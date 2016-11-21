import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-image', 'Integration | Component | filter image', {
  integration: true
});

test('it renders', function(assert) {
  this.set('filters', {
    contrast: 1,
    saturation: 1,
    brightness: 1
  });
  this.render(hbs`{{filter-image src="construction.png" filters=filters}}`);

  assert.equal(this.$('img').attr('src'), 'construction.png');
});

test('it can handle missing filters', function(assert) {
  this.set('filters', {
  });
  this.render(hbs`{{filter-image src="construction.png" filters=filters}}`);

  assert.equal(this.$('img').attr('src'), 'construction.png');

  assert.ok(/contrast/.test(this.$('img').attr('style')));
  assert.ok(/brightness/.test(this.$('img').attr('style')));
  assert.ok(/saturate/.test(this.$('img').attr('style')));
});

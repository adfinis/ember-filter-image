import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-image', 'Integration | Component | filter image', {
  integration: true
});

test('it renders', function(assert) {
  this.set('filters', {
    contrast: 1,
    saturation: 1,
    brightness: 0
  });
  this.render(hbs`{{filter-image src="construction.png" filters=filters}}`);

  assert.equal(this.$('svg > image').attr('xlink:href'), 'construction.png');
  assert.notOk(this.$('svg > image').attr('href'));
});

test('it can handle missing filters', function(assert) {
  this.set('filters', {
  });
  this.render(hbs`{{filter-image src="construction.png" filters=filters}}`);

  const $ = this.$;
  assert.equal($('svg > image').attr('xlink:href'), 'construction.png');
  $('svg feFuncR').each(function(i, element) {
    assert.equal($(element).attr('slope'), 1);
    assert.equal($(element).attr('intercept'), 0);
  });
});

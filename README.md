[![npm version](https://badge.fury.io/js/ember-filter-image.svg)](https://badge.fury.io/js/ember-filter-image)
[![Ember Observer Score](http://emberobserver.com/badges/ember-filter-image.svg)](http://emberobserver.com/addons/ember-filter-image)
[![Build Status](https://travis-ci.org/adfinis-sygroup/ember-filter-image.svg?branch=master)](https://travis-ci.org/adfinis-sygroup/ember-filter-image)

# ember-filter-image

An [ember-cli](http://www.ember-cli.com) addon for cross-browser image filtering using SVG filters.

Just [take me to the demo!](https://adfinis-sygroup.github.io/ember-filter-image/)

## Usage

Just add the `filter-image` component to your template:
```
{{filter-image src="image.jpg" filters=filters}}
```
`src` should be pretty self-explanatory, and `filters` is an object containing the filter settings, e.g. (in your route):
```javascript
setupController(controller) {
  controller.set('filters', {
    contrast: 1,
    saturation: 1,
    brightness: 0
  })
}
```

### Scaling
By default, the rendered image will be scaled such that it is contained in the parent DOM element. If you'd prefer it to be cropped apply this:
```
{{filter-image src="image.jpg" filters=filters crop=true}}
```
If you don't want the aspect ratio to be locked, apply this:
```
{{filter-image src="image.jpg" filters=filters lockAspectRatio=false}}
```
### Options
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| src | `String` | N/A | The source of the image |
| filters | `Object` | `{ saturation: 1, contrast: 1, brightness: 0 }` | The values for the filters to apply |
| crop    | `Boolean` | `false` | Whether to crop the image on scaling (this is obviously ignored if the aspect ratio is not locked) |
| lockAspectRatio | `Boolean` | `true` | Whether to lock the aspect ratio on scaling |

## Why not use CSS filters?

Because [IE11 doesn't support them...](http://caniuse.com/#feat=css-filters)

## Supported filters
* [contrast](https://developer.mozilla.org/en/docs/Web/CSS/filter#contrast(amount))
* [saturation](https://developer.mozilla.org/en/docs/Web/CSS/filter#saturate(amount))
* [brightness](https://developer.mozilla.org/en/docs/Web/CSS/filter#brightness(amount))

Adding more filters just a matter of implementing the respective filter function, though.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-filter-image`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

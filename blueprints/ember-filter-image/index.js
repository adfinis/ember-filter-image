/*jshint node:true*/
module.exports = {
  afterInstall(options) {
    this.addAddonToProject({ name: 'ember-cli-ie-check', target: '0.0.2' })
  }
}

/*jshint node:true*/

module.exports = {
  afterInstall(options) {
    this.addBowerPackagesToProject({
      packages: [
        { name: 'svg.js',        target: '^2.3.4' },
        { name: 'svg.filter.js', target: '^2.0.2' }
      ]
    })
  }
}

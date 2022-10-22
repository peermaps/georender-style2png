var fs = require('fs')
var makePNG = require('fast-png')
var makeTex = require('../')
makeTex({
  stylesheet: require('./style.json'),
  features: require('georender-pack/features.json'),
  defaults: require('../defaults.json')
}, function (error, data) {
  if (error) return console.log(error)
  var png = makePNG.encode(data)
  fs.writeFileSync('texture.png', png)
})

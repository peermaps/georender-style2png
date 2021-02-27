var fs = require('fs')
var makePNG = require('fast-png')
var makeTex = require('../')
var data = makeTex({
  stylesheet: require('./style.json'),
  features: require('georender-pack/features.json'),
  defaults: require('../defaults.json')
})

var png = makePNG.encode(data)
fs.writeFileSync('texture.png', png)

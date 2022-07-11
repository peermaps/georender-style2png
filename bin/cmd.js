#!/usr/bin/env node
var fs = require('fs')
var minimist = require('minimist')
var makePNG = require('fast-png')
var makeTex = require('../index.js')

var args = minimist(process.argv.slice(2), {
  alias: {
    d: 'defaults',
    s: 'stylesheet',
    f: 'features',
    o: 'outfile'
  }
})

if (args.help) usage(0)
if (!args.outfile) usage(1)

var sfile = args.stylesheet || args._[0]
if (!sfile) usage(2)
var ffile = args.features || require.resolve('georender-pack/features.json')
var dfile = args.defaults || require.resolve('../defaults.json')

makeTex({
  stylesheet: JSON.parse(fs.readFileSync(sfile, 'utf8')),
  features: JSON.parse(fs.readFileSync(ffile, 'utf8')),
  defaults: JSON.parse(fs.readFileSync(dfile, 'utf8'))
}, function (err, tex) {
  if (err) return console.error(err)
  var png = makePNG.encode(tex)
  if (args.outfile === '-') { process.stdout.write(png) }
  else fs.writeFileSync(args.outfile, png)
})

function usage (code) {
  console.log(`
    usage: georender-style2png {OPTIONS} [stylesheet file]

    options:
      
      --stylesheet, -s  JSON file with an object specifying
                        georender styles.

      --features, -f    JSON file with OSM features mapped
                        to number values. default:
                        georender-pack/features.json
                        
      --defaults, -d    JSON file with default style settings.
                        default: defaults.json

      --outfile, -o     Write PNG data to this file.
  `.replace(/^ {4}/mg,''))
  process.exit(code)
}

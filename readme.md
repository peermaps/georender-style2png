# georender-style2png

create a texture png from a georender stylesheet

# example

```
var fs = require('fs')
var makePNG = require('fast-png')
var makeTex = require('georender-style2png')
var data = makeTex({
  stylesheet: require('./style.json'),
  features: require('georender-pack/features.json'),
  defaults: require('georender-style2png/defaults.json')
})

var png = makePNG.encode(data)
fs.writeFileSync('texture.png', png)
```

# usage

```
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
```

for example, to create a png image from a stylesheet called
style.json:

```
georender-style2png style.json -o style.png
```

# api

```
var makeTex = require('georender-style2png')
var settings = require('georender-style2png')
```

## var data = makeTex(opts)

create a Uint8Array of image texture `data` from `opts`:

* `opts.stylesheet` - rules for visual display of OSM features
* `opts.features` - OSM features mapped to number values
* `opts.defaults` - default style settings

## settings

* `settings.zoomStart` - lowest zoom level (eg: 1)
* `settings.zoomEnd` - highest zoom level (eg: 21)
* `settings.heights` - height of point, line, area sections in pixels
* `settings.ranges` - height of point, line, area sections in [0,1] space

# install

to get the command line version:

```
npm install -g georender-style2png
```

to get the library:

```
npm install georender-style2png
```

# license

MIT

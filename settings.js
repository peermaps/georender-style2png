module.exports = function () {
  var zoomStart = 1
  var zoomEnd = 21 //inclusive
  var zoomCount = zoomEnd - zoomStart + 1
  var heights = {
    point: 7*zoomCount,
    line: 8*zoomCount,
    area: 5*zoomCount,
    areaborder: 3*zoomCount,
    sprite: 10*zoomCount
  }
  var imageHeight = heights.point + heights.line + heights.area + heights.areaborder + heights.sprite
  var imageWidth = 1240

  return { 
    zoomStart,
    zoomEnd,
    heights,
    imageHeight,
    imageWidth
  }
}

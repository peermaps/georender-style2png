module.exports = function (spriteCount) {
  var zoomStart = 1
  var zoomEnd = 21 //inclusive
  var zoomCount = zoomEnd - zoomStart + 1
  var featureCount = 1240
  var fbHeights = {
    point: 7*zoomCount,
    line: 8*zoomCount,
    area: 6*zoomCount,
    areaborder: 3*zoomCount,
    spritemeta: 2*Math.ceil(spriteCount/featureCount)+1
  }
  var fbTotalHeight = fbHeights.point + fbHeights.line + fbHeights.area + fbHeights.areaborder + fbHeights.spritemeta
  var imageWidth = 1240

  return { 
    zoomStart,
    zoomEnd,
    fbHeights,
    fbTotalHeight,
    imageWidth
  }
}

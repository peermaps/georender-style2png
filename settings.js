module.exports = function () {
  var zoomStart = 1
  var zoomEnd = 21 //inclusive
  var zoomCount = zoomEnd - zoomStart + 1
  var heights = {
    point: 7*zoomCount,
    line: 8*zoomCount,
    area: 6*zoomCount,
    areaborder: 3*zoomCount
  }
  var totalHeight = heights.point + heights.line + heights.area + heights.areaborder
  var r0 = heights.point/totalHeight
  var r1 = (heights.point + heights.line)/totalHeight
  var r2 = (heights.point + heights.line + heights.area)/totalHeight
  var ranges = [
    [0, r0],
    [r0, r1],
    [r1, r2],
    [r2, 1]
  ]

  return { 
    zoomStart,
    zoomEnd,
    heights,
    totalHeight,
    ranges
  }
}

var map = L.map('map', {
  crs: L.CRS.Simple
});

var bounds = [[0, 0], [1000, 1000]];
var image = L.imageOverlay('/image/mymap.png', bounds).addTo(map);

alert('test');

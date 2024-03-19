// Reference: https://stackoverflow.com/questions/11652681/replacing-umlauts-in-js
const fixUmlauts = v => {
  v = v.replace(/ä/g, '&auml;');
  v = v.replace(/ö/g, '&ouml;');
  v = v.replace(/ü/g, '&uuml;');
  v = v.replace(/ß/g, '&szlig;');
  v = v.replace(/Ä/g, '&Auml;');
  v = v.replace(/Ö/g, '&Ouml;');
  v = v.replace(/Ü/g, '&Uuml;');
  return v;
}

// Magdeburg Hauptbahnhof
const origin = [52.130692, 11.626788];

var map = null;

const drawMap = _ => {
  if (map !== null) {
    map.remove();
  }
  map = L.map('map').setView(origin, 7);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const addCircle = (name, latlng, radius) => {
    var circle = L.circle(latlng, {
      color: '#3333ff',
      fillColor: '#2200aa',
      fillOpacity: 0.2,
      radius: radius
    }).addTo(map);
    circle.bindPopup(name);
  }

  places.forEach(p => {
    var name = fixUmlauts(p[0]);
    var latlng = p.slice(2, 4);
    var radius = Math.sqrt(p[1] * 15000000);
    addCircle(name, latlng, radius);
  });
}
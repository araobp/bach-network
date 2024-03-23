// Magdeburg Hauptbahnhof as an origin of the map
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
    var name = convUmlaut(p[0], reverse=false);
    var latlng = p.slice(2, 4);
    var radius = Math.sqrt(p[1] * 15000000);
    addCircle(name, latlng, radius);
  });

  map.on('popupopen', function (e) {
    const para = document.getElementById('paragraph');

    const pIdxs = []

    const selectedCity = convUmlaut(e.popup._content, reverse=true);
    for (const [pIdx, spans_] of Object.entries(spans)) {
      var match = false;
      for (const span of spans_) {
        //console.log(`${span[2]} ${selectedCity}`);
        if (span[2] === selectedCity) {
          match = true;
          break;
        }
      }
      if (match) {
        pIdxs.push(pIdx);
      }
    }

    showParagraphs(pIdxs, selectedCity, nerLabel='GPE');

  });
}
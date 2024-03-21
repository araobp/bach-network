// Reference: https://stackoverflow.com/questions/11652681/replacing-umlauts-in-js
const convUmlaut = (v, reverse = false) => {
  if (reverse) {
    v = v.replace(/&auml;/g, 'ä');
    v = v.replace(/&ouml;/g, 'ö');
    v = v.replace(/&uuml;/g, 'ü');
    v = v.replace(/&szlig;/g, 'ß');
    v = v.replace(/&Auml;/g, 'Ä');
    v = v.replace(/&Ouml;/g, 'Ö');
    v = v.replace(/&Uuml;/g, 'Ü');  
  } else {
    v = v.replace(/ä/g, '&auml;');
    v = v.replace(/ö/g, '&ouml;');
    v = v.replace(/ü/g, '&uuml;');
    v = v.replace(/ß/g, '&szlig;');
    v = v.replace(/Ä/g, '&Auml;');
    v = v.replace(/Ö/g, '&Ouml;');
    v = v.replace(/Ü/g, '&Uuml;');
  }
  return v;
}

const showParagraphs = (pIdxs, selectedEntity, nerLabel='PERSON') => {

  const para = document.getElementById('paragraph');
  var p = '';

  pIdxs.forEach(pIdx => {
    const paragraph = paragraphs[pIdx];
    var innerText = ''
    var lastEnd = 0;

    spans[pIdx].forEach(s => {
      const start = s[0];
      const end = s[1];
      const entity = s[2];
      const label = s[3];  // spaCy NER label
      const beforeText = paragraph.slice(lastEnd, start);
      const text = paragraph.slice(start, end);
      if (entity === selectedEntity) {
        innerText += `${beforeText}<span class="selected-node-in-paragraph">${text}</span>`;
      } else {
        if (label === nerLabel) {
          innerText += `${beforeText}<span class="node-in-paragraph">${text}</span>`;
        } else {
          innerText += `${beforeText}<span class="node-in-paragraph-sub">${text}</span>`;
        }
      }
      lastEnd = end;
    });
    if (lastEnd < paragraph.length) {
      innerText += paragraph.slice(lastEnd, paragraph.length);
    }

    p += `<a href="javascript:showModal(${pIdx});">${pIdx}</a>: ${innerText}</p>\n`
  });

  para.innerHTML = p;

}
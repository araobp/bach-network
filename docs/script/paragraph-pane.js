const showParagraphs = (pIdxs, spansArray, selectedEntity) => {

  const para = document.getElementById('paragraph');
  var p = '';

  pIdxs.forEach(pIdx => {
    const paragraph = paragraphs[pIdx];
    var innerText = ''
    var lastEnd = 0;

    spansArray[pIdx].forEach(s => {
      const start = s[0];
      const end = s[1];
      const selectedPerson = s[2];
      const beforeText = paragraph.slice(lastEnd, start);
      const text = paragraph.slice(start, end);
      if (selectedPerson == selectedEntity) {
        innerText += `${beforeText}<span class="selected-person">${text}</span>`;
      } else {
        innerText += `${beforeText}<span class="person">${text}</span>`;
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
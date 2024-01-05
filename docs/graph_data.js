var nodes = [{'key': 'Anna Magdalena Bach', 'attributes': {'value': 6, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Beethoven', 'attributes': {'value': 6, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 12, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Christoph Friedrich', 'attributes': {'value': 6, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Sebastian Bach', 'attributes': {'value': 40, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Regine Susanna Bach', 'attributes': {'value': 6, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Wilhelm Friedemann Bach', 'attributes': {'value': 10, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Bruhns', 'attributes': {'value': 11, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Buxtehude', 'attributes': {'value': 11, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Böhm', 'attributes': {'value': 11, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Fischer', 'attributes': {'value': 11, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Frescobaldi', 'attributes': {'value': 9, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Froberger', 'attributes': {'value': 11, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Johann Caspar Kerl', 'attributes': {'value': 8, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Johann Christoph Bach', 'attributes': {'value': 12, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Kerl', 'attributes': {'value': 9, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Pachelbel', 'attributes': {'value': 11, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Vivaldi', 'attributes': {'value': 9, 'group': 2, 'color': '#fbb4ae'}}, {'key': 'Couperin', 'attributes': {'value': 2, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Handel', 'attributes': {'value': 5, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Bernhard Bach', 'attributes': {'value': 3, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann G. Schübler', 'attributes': {'value': 3, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Johann Michael Bach', 'attributes': {'value': 3, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Elias Gottlieb Haussmann', 'attributes': {'value': 4, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Fritz Volbach', 'attributes': {'value': 4, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Haussmann', 'attributes': {'value': 4, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Peters', 'attributes': {'value': 4, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Georg Philipp Telemann', 'attributes': {'value': 3, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Görner', 'attributes': {'value': 3, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Johann Gottlieb Görner', 'attributes': {'value': 3, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Hasse', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Reinhard Keiser', 'attributes': {'value': 4, 'group': 0, 'color': '#f2f2f2'}}, {'key': 'Hoffmeister', 'attributes': {'value': 2, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Kühnel', 'attributes': {'value': 2, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'J. C. Gottsched', 'attributes': {'value': 4, 'group': 3, 'color': '#decbe4'}}, {'key': 'Johann Abraham Birnbaum', 'attributes': {'value': 4, 'group': 3, 'color': '#decbe4'}}, {'key': 'Johann Christian Hoffmann', 'attributes': {'value': 4, 'group': 3, 'color': '#decbe4'}}, {'key': 'Marianne von Ziegler', 'attributes': {'value': 4, 'group': 3, 'color': '#decbe4'}}, {'key': 'Johann Ambrosius Bach', 'attributes': {'value': 2, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Johann Heinrich Ernesti', 'attributes': {'value': 1, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Johann Matthias Gesner', 'attributes': {'value': 1, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Maria Amalia', 'attributes': {'value': 2, 'group': 1, 'color': '#e5d8bd'}}, {'key': 'Müller', 'attributes': {'value': 2, 'group': 1, 'color': '#e5d8bd'}}];

var edges = [{'key': 'Anna Magdalena Bach:Beethoven', 'source': 'Anna Magdalena Bach', 'target': 'Beethoven', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Anna Magdalena Bach:Carl Philipp Emanuel Bach', 'source': 'Anna Magdalena Bach', 'target': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Anna Magdalena Bach:Johann Christoph Friedrich', 'source': 'Anna Magdalena Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Anna Magdalena Bach:Johann Sebastian Bach', 'source': 'Anna Magdalena Bach', 'target': 'Johann Sebastian Bach', 'attributes': {'value': 3.0, 'pIdx': [36, 38, 56]}}, {'key': 'Anna Magdalena Bach:Regine Susanna Bach', 'source': 'Anna Magdalena Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Anna Magdalena Bach:Wilhelm Friedemann Bach', 'source': 'Anna Magdalena Bach', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Beethoven:Carl Philipp Emanuel Bach', 'source': 'Beethoven', 'target': 'Carl Philipp Emanuel Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Beethoven:Johann Christoph Friedrich', 'source': 'Beethoven', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Beethoven:Johann Sebastian Bach', 'source': 'Beethoven', 'target': 'Johann Sebastian Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Beethoven:Regine Susanna Bach', 'source': 'Beethoven', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Beethoven:Wilhelm Friedemann Bach', 'source': 'Beethoven', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Carl Philipp Emanuel Bach:Couperin', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Couperin', 'attributes': {'value': 1.0, 'pIdx': [64]}}, {'key': 'Carl Philipp Emanuel Bach:Handel', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Handel', 'attributes': {'value': 1.0, 'pIdx': [100]}}, {'key': 'Carl Philipp Emanuel Bach:Johann Bernhard Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Bernhard Bach', 'attributes': {'value': 1.0, 'pIdx': [4]}}, {'key': 'Carl Philipp Emanuel Bach:Johann Christoph Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [4]}}, {'key': 'Carl Philipp Emanuel Bach:Johann Christoph Friedrich', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Christoph Friedrich', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Carl Philipp Emanuel Bach:Johann G. Schübler', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann G. Schübler', 'attributes': {'value': 1.0, 'pIdx': [137]}}, {'key': 'Carl Philipp Emanuel Bach:Johann Michael Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Michael Bach', 'attributes': {'value': 1.0, 'pIdx': [4]}}, {'key': 'Carl Philipp Emanuel Bach:Johann Sebastian Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Johann Sebastian Bach', 'attributes': {'value': 8.0, 'pIdx': [18, 56, 61, 64, 100, 119, 121, 137]}}, {'key': 'Carl Philipp Emanuel Bach:Regine Susanna Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Carl Philipp Emanuel Bach:Wilhelm Friedemann Bach', 'source': 'Carl Philipp Emanuel Bach', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 4.0, 'pIdx': [18, 56, 119, 137]}}, {'key': 'Johann Christoph Friedrich:Johann Sebastian Bach', 'source': 'Johann Christoph Friedrich', 'target': 'Johann Sebastian Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Johann Christoph Friedrich:Regine Susanna Bach', 'source': 'Johann Christoph Friedrich', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Johann Christoph Friedrich:Wilhelm Friedemann Bach', 'source': 'Johann Christoph Friedrich', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Johann Sebastian Bach:Bruhns', 'source': 'Johann Sebastian Bach', 'target': 'Bruhns', 'attributes': {'value': 2.0, 'pIdx': [9, 81]}}, {'key': 'Johann Sebastian Bach:Buxtehude', 'source': 'Johann Sebastian Bach', 'target': 'Buxtehude', 'attributes': {'value': 2.0, 'pIdx': [9, 81]}}, {'key': 'Johann Sebastian Bach:Böhm', 'source': 'Johann Sebastian Bach', 'target': 'Böhm', 'attributes': {'value': 2.0, 'pIdx': [9, 81]}}, {'key': 'Johann Sebastian Bach:Couperin', 'source': 'Johann Sebastian Bach', 'target': 'Couperin', 'attributes': {'value': 2.0, 'pIdx': [15, 64]}}, {'key': 'Johann Sebastian Bach:Elias Gottlieb Haussmann', 'source': 'Johann Sebastian Bach', 'target': 'Elias Gottlieb Haussmann', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Johann Sebastian Bach:Fischer', 'source': 'Johann Sebastian Bach', 'target': 'Fischer', 'attributes': {'value': 2.0, 'pIdx': [9, 81]}}, {'key': 'Johann Sebastian Bach:Frescobaldi', 'source': 'Johann Sebastian Bach', 'target': 'Frescobaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Johann Sebastian Bach:Fritz Volbach', 'source': 'Johann Sebastian Bach', 'target': 'Fritz Volbach', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Johann Sebastian Bach:Froberger', 'source': 'Johann Sebastian Bach', 'target': 'Froberger', 'attributes': {'value': 2.0, 'pIdx': [9, 81]}}, {'key': 'Johann Sebastian Bach:Georg Philipp Telemann', 'source': 'Johann Sebastian Bach', 'target': 'Georg Philipp Telemann', 'attributes': {'value': 1.0, 'pIdx': [27]}}, {'key': 'Johann Sebastian Bach:Görner', 'source': 'Johann Sebastian Bach', 'target': 'Görner', 'attributes': {'value': 2.0, 'pIdx': [27, 49]}}, {'key': 'Johann Sebastian Bach:Handel', 'source': 'Johann Sebastian Bach', 'target': 'Handel', 'attributes': {'value': 4.0, 'pIdx': [14, 97, 100, 130]}}, {'key': 'Johann Sebastian Bach:Hasse', 'source': 'Johann Sebastian Bach', 'target': 'Hasse', 'attributes': {'value': 2.0, 'pIdx': [130, 131]}}, {'key': 'Johann Sebastian Bach:Haussmann', 'source': 'Johann Sebastian Bach', 'target': 'Haussmann', 'attributes': {'value': 3.0, 'pIdx': [55, 57, 58]}}, {'key': 'Johann Sebastian Bach:Hoffmeister', 'source': 'Johann Sebastian Bach', 'target': 'Hoffmeister', 'attributes': {'value': 1.0, 'pIdx': [87]}}, {'key': 'Johann Sebastian Bach:J. C. Gottsched', 'source': 'Johann Sebastian Bach', 'target': 'J. C. Gottsched', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'Johann Sebastian Bach:Johann Abraham Birnbaum', 'source': 'Johann Sebastian Bach', 'target': 'Johann Abraham Birnbaum', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'Johann Sebastian Bach:Johann Ambrosius Bach', 'source': 'Johann Sebastian Bach', 'target': 'Johann Ambrosius Bach', 'attributes': {'value': 1.0, 'pIdx': [8]}}, {'key': 'Johann Sebastian Bach:Johann Caspar Kerl', 'source': 'Johann Sebastian Bach', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Johann Sebastian Bach:Johann Christian Hoffmann', 'source': 'Johann Sebastian Bach', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'Johann Sebastian Bach:Johann Christoph Bach', 'source': 'Johann Sebastian Bach', 'target': 'Johann Christoph Bach', 'attributes': {'value': 2.0, 'pIdx': [8, 9]}}, {'key': 'Johann Sebastian Bach:Johann G. Schübler', 'source': 'Johann Sebastian Bach', 'target': 'Johann G. Schübler', 'attributes': {'value': 1.0, 'pIdx': [137]}}, {'key': 'Johann Sebastian Bach:Johann Gottlieb Görner', 'source': 'Johann Sebastian Bach', 'target': 'Johann Gottlieb Görner', 'attributes': {'value': 1.0, 'pIdx': [27]}}, {'key': 'Johann Sebastian Bach:Johann Heinrich Ernesti', 'source': 'Johann Sebastian Bach', 'target': 'Johann Heinrich Ernesti', 'attributes': {'value': 1.0, 'pIdx': [39]}}, {'key': 'Johann Sebastian Bach:Johann Matthias Gesner', 'source': 'Johann Sebastian Bach', 'target': 'Johann Matthias Gesner', 'attributes': {'value': 1.0, 'pIdx': [48]}}, {'key': 'Johann Sebastian Bach:Kerl', 'source': 'Johann Sebastian Bach', 'target': 'Kerl', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Johann Sebastian Bach:Kühnel', 'source': 'Johann Sebastian Bach', 'target': 'Kühnel', 'attributes': {'value': 1.0, 'pIdx': [87]}}, {'key': 'Johann Sebastian Bach:Maria Amalia', 'source': 'Johann Sebastian Bach', 'target': 'Maria Amalia', 'attributes': {'value': 1.0, 'pIdx': [52]}}, {'key': 'Johann Sebastian Bach:Marianne von Ziegler', 'source': 'Johann Sebastian Bach', 'target': 'Marianne von Ziegler', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'Johann Sebastian Bach:Müller', 'source': 'Johann Sebastian Bach', 'target': 'Müller', 'attributes': {'value': 1.0, 'pIdx': [52]}}, {'key': 'Johann Sebastian Bach:Pachelbel', 'source': 'Johann Sebastian Bach', 'target': 'Pachelbel', 'attributes': {'value': 3.0, 'pIdx': [9, 81, 138]}}, {'key': 'Johann Sebastian Bach:Peters', 'source': 'Johann Sebastian Bach', 'target': 'Peters', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Johann Sebastian Bach:Regine Susanna Bach', 'source': 'Johann Sebastian Bach', 'target': 'Regine Susanna Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Johann Sebastian Bach:Reinhard Keiser', 'source': 'Johann Sebastian Bach', 'target': 'Reinhard Keiser', 'attributes': {'value': 2.0, 'pIdx': [97, 130]}}, {'key': 'Johann Sebastian Bach:Vivaldi', 'source': 'Johann Sebastian Bach', 'target': 'Vivaldi', 'attributes': {'value': 2.0, 'pIdx': [81, 152]}}, {'key': 'Johann Sebastian Bach:Wilhelm Friedemann Bach', 'source': 'Johann Sebastian Bach', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 9.0, 'pIdx': [18, 56, 70, 119, 130, 131, 137, 141, 143]}}, {'key': 'Regine Susanna Bach:Wilhelm Friedemann Bach', 'source': 'Regine Susanna Bach', 'target': 'Wilhelm Friedemann Bach', 'attributes': {'value': 1.0, 'pIdx': [56]}}, {'key': 'Wilhelm Friedemann Bach:Handel', 'source': 'Wilhelm Friedemann Bach', 'target': 'Handel', 'attributes': {'value': 1.0, 'pIdx': [130]}}, {'key': 'Wilhelm Friedemann Bach:Hasse', 'source': 'Wilhelm Friedemann Bach', 'target': 'Hasse', 'attributes': {'value': 2.0, 'pIdx': [130, 131]}}, {'key': 'Wilhelm Friedemann Bach:Johann G. Schübler', 'source': 'Wilhelm Friedemann Bach', 'target': 'Johann G. Schübler', 'attributes': {'value': 1.0, 'pIdx': [137]}}, {'key': 'Wilhelm Friedemann Bach:Reinhard Keiser', 'source': 'Wilhelm Friedemann Bach', 'target': 'Reinhard Keiser', 'attributes': {'value': 1.0, 'pIdx': [130]}}, {'key': 'Bruhns:Buxtehude', 'source': 'Bruhns', 'target': 'Buxtehude', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Bruhns:Böhm', 'source': 'Bruhns', 'target': 'Böhm', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Bruhns:Fischer', 'source': 'Bruhns', 'target': 'Fischer', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Bruhns:Frescobaldi', 'source': 'Bruhns', 'target': 'Frescobaldi', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Bruhns:Froberger', 'source': 'Bruhns', 'target': 'Froberger', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Bruhns:Johann Caspar Kerl', 'source': 'Bruhns', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29, 'pIdx': [9]}}, {'key': 'Bruhns:Johann Christoph Bach', 'source': 'Bruhns', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Bruhns:Kerl', 'source': 'Bruhns', 'target': 'Kerl', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Bruhns:Pachelbel', 'source': 'Bruhns', 'target': 'Pachelbel', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Bruhns:Vivaldi', 'source': 'Bruhns', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Buxtehude:Böhm', 'source': 'Buxtehude', 'target': 'Böhm', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Buxtehude:Fischer', 'source': 'Buxtehude', 'target': 'Fischer', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Buxtehude:Frescobaldi', 'source': 'Buxtehude', 'target': 'Frescobaldi', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Buxtehude:Froberger', 'source': 'Buxtehude', 'target': 'Froberger', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Buxtehude:Johann Caspar Kerl', 'source': 'Buxtehude', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29, 'pIdx': [9]}}, {'key': 'Buxtehude:Johann Christoph Bach', 'source': 'Buxtehude', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Buxtehude:Kerl', 'source': 'Buxtehude', 'target': 'Kerl', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Buxtehude:Pachelbel', 'source': 'Buxtehude', 'target': 'Pachelbel', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Buxtehude:Vivaldi', 'source': 'Buxtehude', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Böhm:Fischer', 'source': 'Böhm', 'target': 'Fischer', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Böhm:Frescobaldi', 'source': 'Böhm', 'target': 'Frescobaldi', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Böhm:Froberger', 'source': 'Böhm', 'target': 'Froberger', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Böhm:Johann Caspar Kerl', 'source': 'Böhm', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29, 'pIdx': [9]}}, {'key': 'Böhm:Johann Christoph Bach', 'source': 'Böhm', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Böhm:Kerl', 'source': 'Böhm', 'target': 'Kerl', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Böhm:Pachelbel', 'source': 'Böhm', 'target': 'Pachelbel', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Böhm:Vivaldi', 'source': 'Böhm', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Fischer:Frescobaldi', 'source': 'Fischer', 'target': 'Frescobaldi', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Fischer:Froberger', 'source': 'Fischer', 'target': 'Froberger', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Fischer:Johann Caspar Kerl', 'source': 'Fischer', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29, 'pIdx': [9]}}, {'key': 'Fischer:Johann Christoph Bach', 'source': 'Fischer', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Fischer:Kerl', 'source': 'Fischer', 'target': 'Kerl', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Fischer:Pachelbel', 'source': 'Fischer', 'target': 'Pachelbel', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Fischer:Vivaldi', 'source': 'Fischer', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Frescobaldi:Froberger', 'source': 'Frescobaldi', 'target': 'Froberger', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Frescobaldi:Kerl', 'source': 'Frescobaldi', 'target': 'Kerl', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Frescobaldi:Pachelbel', 'source': 'Frescobaldi', 'target': 'Pachelbel', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Frescobaldi:Vivaldi', 'source': 'Frescobaldi', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Froberger:Johann Caspar Kerl', 'source': 'Froberger', 'target': 'Johann Caspar Kerl', 'attributes': {'value': 0.29, 'pIdx': [9]}}, {'key': 'Froberger:Johann Christoph Bach', 'source': 'Froberger', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Froberger:Kerl', 'source': 'Froberger', 'target': 'Kerl', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Froberger:Pachelbel', 'source': 'Froberger', 'target': 'Pachelbel', 'attributes': {'value': 0.54, 'pIdx': [9, 81]}}, {'key': 'Froberger:Vivaldi', 'source': 'Froberger', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Johann Caspar Kerl:Johann Christoph Bach', 'source': 'Johann Caspar Kerl', 'target': 'Johann Christoph Bach', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Johann Caspar Kerl:Pachelbel', 'source': 'Johann Caspar Kerl', 'target': 'Pachelbel', 'attributes': {'value': 0.29, 'pIdx': [9]}}, {'key': 'Johann Christoph Bach:Johann Ambrosius Bach', 'source': 'Johann Christoph Bach', 'target': 'Johann Ambrosius Bach', 'attributes': {'value': 1.0, 'pIdx': [8]}}, {'key': 'Johann Christoph Bach:Johann Bernhard Bach', 'source': 'Johann Christoph Bach', 'target': 'Johann Bernhard Bach', 'attributes': {'value': 1.0, 'pIdx': [4]}}, {'key': 'Johann Christoph Bach:Johann Michael Bach', 'source': 'Johann Christoph Bach', 'target': 'Johann Michael Bach', 'attributes': {'value': 1.0, 'pIdx': [4]}}, {'key': 'Johann Christoph Bach:Pachelbel', 'source': 'Johann Christoph Bach', 'target': 'Pachelbel', 'attributes': {'value': 1.0, 'pIdx': [9]}}, {'key': 'Kerl:Pachelbel', 'source': 'Kerl', 'target': 'Pachelbel', 'attributes': {'value': 0.25, 'pIdx': [81]}}, {'key': 'Kerl:Vivaldi', 'source': 'Kerl', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Pachelbel:Vivaldi', 'source': 'Pachelbel', 'target': 'Vivaldi', 'attributes': {'value': 1.0, 'pIdx': [81]}}, {'key': 'Handel:Hasse', 'source': 'Handel', 'target': 'Hasse', 'attributes': {'value': 0.67, 'pIdx': [130]}}, {'key': 'Handel:Reinhard Keiser', 'source': 'Handel', 'target': 'Reinhard Keiser', 'attributes': {'value': 1.67, 'pIdx': [97, 130]}}, {'key': 'Johann Bernhard Bach:Johann Michael Bach', 'source': 'Johann Bernhard Bach', 'target': 'Johann Michael Bach', 'attributes': {'value': 1.0, 'pIdx': [4]}}, {'key': 'Elias Gottlieb Haussmann:Fritz Volbach', 'source': 'Elias Gottlieb Haussmann', 'target': 'Fritz Volbach', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Elias Gottlieb Haussmann:Haussmann', 'source': 'Elias Gottlieb Haussmann', 'target': 'Haussmann', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Elias Gottlieb Haussmann:Peters', 'source': 'Elias Gottlieb Haussmann', 'target': 'Peters', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Fritz Volbach:Haussmann', 'source': 'Fritz Volbach', 'target': 'Haussmann', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Fritz Volbach:Peters', 'source': 'Fritz Volbach', 'target': 'Peters', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Haussmann:Peters', 'source': 'Haussmann', 'target': 'Peters', 'attributes': {'value': 1.0, 'pIdx': [55]}}, {'key': 'Georg Philipp Telemann:Görner', 'source': 'Georg Philipp Telemann', 'target': 'Görner', 'attributes': {'value': 1.0, 'pIdx': [27]}}, {'key': 'Georg Philipp Telemann:Johann Gottlieb Görner', 'source': 'Georg Philipp Telemann', 'target': 'Johann Gottlieb Görner', 'attributes': {'value': 1.0, 'pIdx': [27]}}, {'key': 'Görner:Johann Gottlieb Görner', 'source': 'Görner', 'target': 'Johann Gottlieb Görner', 'attributes': {'value': 1.0, 'pIdx': [27]}}, {'key': 'Hasse:Reinhard Keiser', 'source': 'Hasse', 'target': 'Reinhard Keiser', 'attributes': {'value': 0.67, 'pIdx': [130]}}, {'key': 'Hoffmeister:Kühnel', 'source': 'Hoffmeister', 'target': 'Kühnel', 'attributes': {'value': 1.0, 'pIdx': [87]}}, {'key': 'J. C. Gottsched:Johann Abraham Birnbaum', 'source': 'J. C. Gottsched', 'target': 'Johann Abraham Birnbaum', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'J. C. Gottsched:Johann Christian Hoffmann', 'source': 'J. C. Gottsched', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 0.67, 'pIdx': [53]}}, {'key': 'J. C. Gottsched:Marianne von Ziegler', 'source': 'J. C. Gottsched', 'target': 'Marianne von Ziegler', 'attributes': {'value': 0.67, 'pIdx': [53]}}, {'key': 'Johann Abraham Birnbaum:Johann Christian Hoffmann', 'source': 'Johann Abraham Birnbaum', 'target': 'Johann Christian Hoffmann', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'Johann Abraham Birnbaum:Marianne von Ziegler', 'source': 'Johann Abraham Birnbaum', 'target': 'Marianne von Ziegler', 'attributes': {'value': 1.0, 'pIdx': [53]}}, {'key': 'Johann Christian Hoffmann:Marianne von Ziegler', 'source': 'Johann Christian Hoffmann', 'target': 'Marianne von Ziegler', 'attributes': {'value': 0.67, 'pIdx': [53]}}, {'key': 'Maria Amalia:Müller', 'source': 'Maria Amalia', 'target': 'Müller', 'attributes': {'value': 1.0, 'pIdx': [52]}}];
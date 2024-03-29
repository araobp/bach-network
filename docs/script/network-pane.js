// 選択ノード
var selectedNode = null;
const setSelectedNode = (text) => {
  selectedNode = text;
  p = document.getElementById("selectedNode");
  if (text === null) {
    p.innerText = `...`;
  } else {
    p.innerText = `${selectedNode}`;
  }
}

// Weightを閾値としてEdgeをフィルターしたグラフを生成
const filterGraphByWeight = _ => {

  const g = G.copy();

  // Weightを閾値としてEdgeをフィルター
  g.forEachEdge(key => {
    if (G.getEdgeAttribute(key, 'value') < WEIGHT_THRESHOLD) {
      g.dropEdge(key);
    }
  });

  // エッジがないノードを削除
  g.forEachNode(key => {
    if (g.degree(key) === 0) {
      g.dropNode(key);
    }
  });

  return g;
}

const filterGraph = option => {
  WEIGHT_THRESHOLD = option.value;
  lastOperation();
}

// 選択されたノードに隣接するノードのみを含むグラフを生成
const showNeighbors = () => {
  if (selectedNode !== null) {
    graph = filterGraphByWeight();
    neighbors = graph.neighbors(selectedNode);
    neighbors.push(selectedNode);
    const sub = graphologyLibrary.operators.subgraph(graph, neighbors);
    createVisNetwork(sub);
    lastOperation = showNeighbors;
  }
}

// グループメンバーのみのグラフを生成
// 注意）Edge weight threshold を大きな値にした時、エッジなしノードが表示される場合がある。
// これは、他のグループのノードへエッジがあるためで、正常な動作。
const showGroupMembersOnly = () => {
  if (selectedNode !== null) {
    graph = filterGraphByWeight();
    groupNum = graph.getNodeAttribute(selectedNode, 'group')
    const groupMembers = graph.filterNodes(key => graph.getNodeAttribute(key, 'group') === groupNum);
    const sub = graphologyLibrary.operators.subgraph(graph, groupMembers);
    createVisNetwork(sub);
    lastOperation = showGroupMembersOnly;
  }
}

// 選択されたノードからトラバーサル
/*
const showBFS = () => {
  if (selectedNode !== null) {
    bfsNodes = [];
    graph = filterGraphByWeight();
    graphologyLibrary.traversal.bfsFromNode(graph, selectedNode, (node, attr, depth) => {
      console.log(node);
      bfsNodes.push(node);
      return depth >= 1;
    });
    const sub = graphologyLibrary.operators.subgraph(graph, bfsNodes);
    createVisNetwork(sub);
    lastOperation = showBFS;
  }
}
*/

// 隣接ノード選択条件をクリアしグラフ再描画
const showAll = () => {
  setSelectedNode(null);
  // Filter edges with weight threshold
  graph = filterGraphByWeight();
  createVisNetwork(graph);
  lastOperation = showAll;
}

var lastOperation = showAll;

const showModal = pIdx => {
  const dialog = document.getElementById('web-version-dialog');
  const iframe = document.getElementById('web-version-file');
  iframe.setAttribute('src', `${WEB_VERSION_FILE}#p_${pIdx}`);
  dialog.showModal();
}

const closeModal = _ => {
  const dialog = document.getElementById('web-version-dialog');
  dialog.close();
}

// Graph visualization with vis.js
const createVisNetwork = graph => {

  // Export graph data from graphology.js to vis.js
  const node_list = graph.mapNodes((node, attr) => {
    return { id: node, label: node, value: attr.value, color: attr.color };
  });
  const edge_list = graph.mapEdges((edge, attr, source, target) => {
    return { from: source, to: target, value: attr.value, pIdx: attr.pIdx };
  });
  var nodes = new vis.DataSet(node_list);
  var edges = new vis.DataSet(edge_list);

  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {
      shape: "dot",
      scaling: {
        customScalingFunction: function (min, max, total, value) {
          return value / total;
        },
        min: 7,
        max: 200,
      },
    },
    interaction: {
      hover: true
    }
  };

  var container = document.getElementById('network');
  var network = new vis.Network(container, data, options);

  if (selectedNode !== null) {
    network.setSelection({
      nodes: [selectedNode]
    });
  }

  network.on('click', properties => {
    if (properties.nodes !== undefined && properties.nodes.length > 0) {
      const nodeId = properties.nodes[0];
      setSelectedNode(nodeId);
    }
    if (properties.edges !== undefined) {

      var pIdxs = new Set();
      properties.edges.forEach(edgeId => {
        const edge = edges.get(edgeId);
        //const from = edge.from;
        //const weight = edge.value;
        //const to = edge.to;
        const pIdx = edge.pIdx;
        pIdx.forEach(pIdx => pIdxs.add(pIdx));
      });

      // Sort elements numerically.
      // Reference: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
      pIdxs = Array.from(pIdxs).sort(function (a, b) {  return a - b;  });

      showParagraphs(pIdxs, selectedNode);      
    }
  });

  network.on('doubleClick', properties => {
    var nodeId = properties.nodes[0];

    node = network.body.nodes[nodeId];
    node.setOptions({
      font: {
        size: 20,
        color: "#ff7f50"
      },
      color: {
        highlight: "#ff7f50",
        background: "#ff8f70"
      }
    });

    var url = 'https://en.wikipedia.org/wiki/' + nodeId
    window.open(url, '_blank').focus();
  });

  const dialogInit = document.getElementById('initializing');
  network.once("stabilizationIterationsDone", _ => {
    dialogInit.close();
  });   
  dialogInit.showModal();  

}

createVisNetwork(G.copy());
setSelectedNode(null);

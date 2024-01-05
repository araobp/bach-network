# Bach network

<img src="docs/bach_network.jpg" width=800>

https://araobp.github.io/bach-network/bach_network.html

## Processing pipeline

```
<------------------- spaCy ---------->  <--- networkx ---->  <-------------------- graphology.js ------------>  <-- vis.js --->
[Original Text]=>[Tokenization]=>[NER]=>[Network Formation]=>[In-Memory Graph Database]=>[Subgraph Extraction]=>[Visualization]
<------------------ Jupyter Notebook --------------------->  <---------------- Browser (HTML/CSS/JavaScript) ----------------->
```

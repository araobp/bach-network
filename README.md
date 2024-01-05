# Bach network

<img src="docs/bach_network.jpg" width=800>

https://araobp.github.io/bach-network/bach_network.html

## Processing pipeline

```
<------------------- spaCy ---------->  <--- networkx ---->  <-------------- graphology.js ------------>  <-- vis.js --->
[Original Text]=>[Tokenization]=>[NER]=>[Network Formation]=>[In-Memory Graph DB]=>[Subgraph Extraction]=>[Visualization]
<------------------ Jupyter Notebook --------------------->  <------------ Browser (HTML/CSS/JavaScript) --------------->
```

## Grouping of Personal Names

The following is a famous passage also found in the book:

"The most renowned Clavier composers of that day were Froberger,50 Fischer,51 Johann Caspar Kerl,52 Pachelbel,53 Buxtehude,54 Bruhns,55 [pg 11]and Böhm.56 Johann Christoph possessed a book containing several pieces by these masters, and Bach begged earnestly for it, but without effect. Refusal increasing his determination, he laid his plans to get the book without his brother's knowledge. It was kept on a book-shelf which had a latticed front. Bach's hands were small. Inserting them, he got hold of the book, rolled it up, and drew it out. As he was not allowed a candle, he could only copy it on moonlight nights, and it was six months before he finished his heavy task. As soon as it was completed he looked forward to using in secret a treasure won by so much labour. But his brother found the copy and took it from him without pity, nor did Bach recover it until his brother's death soon after."

Regarding the above passage, it is necessary to create a network that is conscious of listing names, as follows:

```
Froberger ---------------+---------+--------- Johann Christoph Bach ------- Johann Sebastian Bach
                         |         |                                                 |
Fischer -----------------+         +-------------------------------------------------+
                         |
Johann Caspar Kerl ------+
                         |
Pachelbel ---------------+
                         |
Buxtehude ---------------+
                         |
Bruhns ------------------+
                         |
Böhm --------------------+
```


How can we accurately perform relation extraction? When names are listed, it might be beneficial to consider them as groups of nodes and connect them with edges to describe relationships between names (nodes) that are mentioned a little apart:

- Named Entity extraction within a paragraph.
- If Named Entities are enumerated, perceive them as a group, and adjust the edge weights between Named Entities within the group to be weaker.

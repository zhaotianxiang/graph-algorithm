# 图的数据结构表示

**G=(V,E)，V代表图中节点的合集，E代表图中边或是关系的合集**

### 1. 邻接表

> 1. 图节点的数据表示 **VNode**:

```node
class VNode
{
	constructor(name)
	{
		this.name = name;  // 节点名称
		this.index = 0;    // 当前节点的位置
		this.in    = 0;    // 入度
		this.out   = 0;    // 出度
		this.pre   = [];   // 单链表 - 存放指向本节点的节点的: index
		this.next  = [];   // 单链表 - 存放邻接节点的: index
		this.func  = null; // 指向节点的函数
	}
}
```

> 2. 图边数据表示 **ENode**:

```node
class ENode
{
	constructor(v,w)
	{
		this.startNode = v;   // 边的开始节点
		this.endNode   = w;   // 边的结束节点
	}
}
```

> 3. 有向无环图的数据结构 **DAG**

```js
class DAG
{
	constructor()
	{
		this.vertices = []; // 图节点数组, 邻接表表示
		this.vexNum = 0;    // 节点数
		this.edgNum = 0;    // 边数
		this.graphType = 'DAG';
	}
	
	addVNode(vNode) {}

	addENode(eNode) {}

	topologicalSort() {}

	travel(vNode) {}
}
```

### 2. 邻接矩阵
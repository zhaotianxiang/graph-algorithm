# 图结构与算法

**G=(V,E)，V代表图中节点的合集，E代表图中边或是关系的合集**

#### 1. 邻接表 

  > 数组存放顶点,链表存储每个节点的邻接节点连接关系

###### 1. 图节点的数据表示 **VNode**:

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

###### 2. 图边数据表示 **ENode**:

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

###### 3. 有向无环图的数据结构 **DAG**

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

## 2. DAG 拓扑排序

###### 1. 拓扑排序删边法

> 1. 找到所有入度为 0 的节点， 将以此节点出发的边删除.
> 2. 访问度为 0 的节点，并更新图的度
> 3. 重复 1

###### 2. 测试的图结构

<p align="center">
  <a href="https://github.com/zhaotianxiang/graph-algorithm">
    <img alt="Node.js" src="https://github.com/zhaotianxiang/graph-algorithm/blob/master/test.graph.PNG" width="400"/>
  </a>
</p>

###### 3. 代码构造图结构

```js
const G = require('../datastruct/adjlist');

let A = new G.VNode('A');
let B = new G.VNode('B');
let C = new G.VNode('C');
let D = new G.VNode('D');
let E = new G.VNode('E');
let F = new G.VNode('F');

let g = new G.DAG();

g.addVNode(A);
g.addVNode(B);
g.addVNode(C);
g.addVNode(D);
g.addVNode(E);
g.addVNode(F);

g.addENode(new G.ENode(A,B));
g.addENode(new G.ENode(A,C));
g.addENode(new G.ENode(B,C));
g.addENode(new G.ENode(C,D));
g.addENode(new G.ENode(D,E));
g.addENode(new G.ENode(D,F));

/** DAG拓扑排序 **/
g.topologicalSort();
```


###### 4. 拓扑排序输出结果

<p align="left">
  <a href="https://github.com/zhaotianxiang/graph-algorithm">
    <img alt="Node.js" src="https://github.com/zhaotianxiang/graph-algorithm/blob/master/test_dag_result.PNG" width="400"/>
  </a>
</p>

## 3. DFS 深度优先搜索

> 非递归：

```js
（1）栈S初始化;visited[n]=0;
（2）访问顶点v;visited[v]=1;顶点v入栈S
（3）while(栈S非空)
            x=栈S的顶元素(不出栈);
            if(存在并找到未被访问的x的邻接点w)
                    访问w;visited[w]=1;
                    w进栈;
            else
                    x出栈;
```

## 4. BFS 广度优先搜索

> 利用队列： 先入队一个节点， 队列不为空，出队（访问）此节点的同时将其所有临界点入队， 出队直到为空。


## 5. 最小生成树

> **连通网**: 所有生成树中，所有边的代价和最小的生成树，称为**最小生成树**。 
> **连通图**: 若图的边具有一定的意义，每一条边都对应着一个数，称为权；权代表着连接连个顶点的代价，称这种连通图叫做连通网。
> **无向图**: 若任意两个顶点vivi与vjvj都有路径相通，则称该无向图为连通图。

###### 1. Prim 算法

 > 1. 图的所有顶点集合为VV；初始令集合u={s},v=V−uu={s},v=V−u;
 > 2. 在两个集合u,vu,v能够组成的边中，选择一条代价最小的边(u0,v0)(u0,v0)，加入到最小生成树中，并把v0v0并入到集合u中。
 > 3. 重复上述步骤，直到最小生成树有n-1条边或者n个顶点为止。

###### 2. Kruskal 算法

 > 1. 把图中的所有边按代价从小到大排序； 
 > 2. 把图中的n个顶点看成独立的n棵树组成的森林； 
 > 3. 按权值从小到大选择边，所选的边连接的两个顶点ui,viui,vi,应属于两颗不同的树，则成为最小生成树的一条边，并将这两颗树合并作为一颗树。 
 > 4. 重复(3),直到所有顶点都在一颗树内或者有n-1条边为止。

## 6. 最短路径

**计算一个节点到其他所有节点的最短路径**

###### 1. Dijkstra算法
###### 2. SPFA算法\Bellman-Ford算法
###### 3. Floyd算法\Floyd-Warshall算法
###### 4. Johnson算法
###### 5. A\*算法

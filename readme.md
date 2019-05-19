# 图的表示及相关算法的实现

#### 1. 邻接表 

  > 数组存放顶点,链表存储每个节点的邻接节点连接关系

#### 2. 邻接矩阵

> N个节点的连接图： 用 N*N 矩阵表示

#### 3. DFS 深度优先搜索

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

#### 4. BFS 广度优先搜索

> 利用队列： 先入队一个节点， 队列不为空，出队（访问）此节点的同时将其所有临界点入队， 出队直到为空。

#### 5. DAG 拓扑排序

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

###### 3. 拓扑排序输出结果

<p align="left">
  <a href="https://github.com/zhaotianxiang/graph-algorithm">
    <img alt="Node.js" src="https://github.com/zhaotianxiang/graph-algorithm/blob/master/test_dag_result.PNG" width="400"/>
  </a>
</p>

###### 4. [实现代码](https://github.com/zhaotianxiang/graph-algorithm/tree/master/datastruct)

#### 6. 最小生成树
#### 7. 最短路径

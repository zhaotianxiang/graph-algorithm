/**
 * 
 *  图的邻接表表示法, 分为三部分: 图节点, 边, 各种的图结构
 *  图结构: **DAG** 有向无环图.
 *
 **/

class VNode {
	constructor(name) {
		this.name = name; // 节点名称
		this.index = 0; // 当前节点的位置
		this.in = 0; // 入度
		this.out = 0; // 出度
		this.pre = []; // 单链表 - 存放指向本节点的节点的: index
		this.next = []; // 单链表 - 存放邻接节点的: index
		this.func = null; // 指向节点的函数
	}
}

/** 弧/边 **/
class ENode {
	constructor(v, w) {
		this.startNode = v; // 边的开始节点
		this.endNode = w; // 边的结束节点
	}
}

/** 有向无环图, 应该说有环也可以 **/
class DAG {
	constructor() {
		this.vSet = new Set();
		this.eSet = new Set();

		this.vertices = []; // 图节点数组, 邻接表表示
		this.vexNum = 0; // 节点数
		this.edgNum = 0; // 边数
		this.graphType = 'DAG';
	}


	addVNode(vNode) {
		if (this.isHasVNode(vNode.name)) {
			return;
		}
		this.vexNum++;
		vNode.index = this.vertices.length;
		this.vertices.push(vNode);
		this.vSet.add(vNode);
	}

	isHasVNode(name) {
		for (let node of this.vSet) {
			if (node.name === name)
				return true;
		}
		return false;
	}

	getVNodeByName(name) {
		for (let node of this.vSet) {
			if (name === node.name)
				return node;
		}
		return new Error('Graph do not has eNode:'+name);
	}

	addENode(eNode) {
		this.edgNum++;

		this.vertices[eNode.startNode.index].next.push(eNode.endNode.index);
		this.vertices[eNode.endNode.index].pre.push(eNode.startNode.index);

		this.vertices[eNode.startNode.index].out++;
		this.vertices[eNode.endNode.index].in++;
	}

	addRelation(source, taget) {

		let eNode = new ENode(this.getVNodeByName(source), this.getVNodeByName(taget));

		this.edgNum++;

		this.vertices[eNode.startNode.index].next.push(eNode.endNode.index);
		this.vertices[eNode.endNode.index].pre.push(eNode.startNode.index);

		this.vertices[eNode.startNode.index].out++;
		this.vertices[eNode.endNode.index].in++;
	}


	/**
	 * {[source:'a', target:'b']}
	 **/
	buildDAG(options) {
		options.forEach(it => {
			for (let key in it) {
				this.addVNode(new VNode(it[key]));
			}
			this.addENode(new ENode(this.getVNodeByName(it.source), this.getVNodeByName(it.target)));
		});
	}

	/** 拓扑排序算法: 必须是有向无环图 **/
	topologicalSort() {
		let queue = []; // 辅助队列

		for (let i = 0; i < this.vertices.length; ++i) {
			if (this.vertices[i].in === 0) { // 入度为0加入队列
				queue.push(this.vertices[i]);
			}
		}

		// 删除入度为 0 的边.
		while (queue.length) {
			for (let cur = 0; cur < queue.length; ++cur) {
				if (queue[cur].in === 0) {
					this.travel(queue[cur]);
					queue[cur].next.forEach(i => {
						if (queue.indexOf(this.vertices[i]) === -1) {
							queue.push(this.vertices[i]);
						}
						queue[cur].out--;
						this.vertices[i].in--;
					});
					queue.splice(cur, 1);
				}
			}
		}
	}

	travel(vNode) {
		console.log(`${vNode.name}(${vNode.pre.map(i=>this.vertices[i].name).join()})`);
	}
}

module.exports = {
	VNode: VNode,
	ENode: ENode,
	DAG: DAG
}
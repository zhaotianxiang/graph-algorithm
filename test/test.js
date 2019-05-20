var G = require('../datastruct/adjlist');

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

g.addENode(new G.ENode(A, B));
g.addENode(new G.ENode(A, C));
g.addENode(new G.ENode(B, C));
g.addENode(new G.ENode(C, D));
g.addENode(new G.ENode(D, E));
g.addENode(new G.ENode(D, F));

/** DAG拓扑排序 **/
g.topologicalSort();

console.log('\n\n*********************我是分割线*****************\n\n');

let g2 = new G.DAG();

g2.build([{
	source: 'a',
	target: 'b'
}, {
	source: 'b',
	target: 'c'
}, {
	source: 'a',
	target: 'c'
}, {
	source: 'c',
	target: 'd'
}, {
	source: 'c',
	target: 'e'
}, {
	source: 'c',
	target: 'f'
}]);

/** DAG拓扑排序 **/
g2.topologicalSort();
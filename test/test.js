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

g.addENode(new G.ENode(A,B));
g.addENode(new G.ENode(A,C));
g.addENode(new G.ENode(B,C));
g.addENode(new G.ENode(C,D));
g.addENode(new G.ENode(D,E));
g.addENode(new G.ENode(D,F));

/** DAG拓扑排序 **/
g.topologicalSort();
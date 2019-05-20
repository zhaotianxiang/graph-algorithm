var G = require('../datastruct/adjlist');

let g = new G.DAG();

g.build([{
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
g.topologicalSort();
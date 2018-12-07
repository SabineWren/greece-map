/*
	@license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt
	
	Copyright (C) 2018 SabineWren
	https://github.com/SabineWren
	
	GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
	https://www.gnu.org/licenses/agpl-3.0.html
	
	@license-end
*/
import { Roads } from "./roads.js";
import { Sites } from "./sites.js";
export { Search };

//split each road into two paths (one-directional)
const appendPaths = function(graph) {
	const positions = {};
	Sites.forEach(function(site) {
		positions[site.name] = {
			"x": site.x,
			"y": site.y,
		};
	});
	
	Roads.forEach(function(road) {
		const distance = getDistance(positions[road.a], positions[road.b]);
		const cost = road.multiplier * distance;
		graph[road.a].paths.push({
			"cost": cost,
			"distance": distance,
			"target": road.b,
		});
		graph[road.b].paths.push({
			"cost": cost,
			"distance": distance,
			"target": road.a,
		});
	});
};

const compareCostAscending = function(a, b) {
	return a.heuristic + a.routeCost > b.heuristic + b.routeCost ? 1 : -1;
};

const createGraph = function(start, goal) {
	const goalNode = Sites.filter(node => node.name === goal)[0];
	const nodes = {};
	Sites.forEach(function(site) {
		nodes[site.name] = {
			"bestCost": Number.MAX_SAFE_INTEGER + 1,
			"heuristic": getDistance(goalNode, {"x": site.x, "y": site.y}),
			"name": site.name,
			"paths": [],
		};
	});
	nodes[start].bestCost = 0;
	appendPaths(nodes);
	return nodes;
};

const getDistance = function(a, b) {
	const x = b.x - a.x;
	const y = b.y - a.y;
	return Math.sqrt(x * x + y * y);
};

const expandFrontier = function(frontier, graph, state) {
	const currentNode = state.routePath[state.routePath.length - 1];
	
	currentNode.paths.forEach(function(path) {
		const g = state.routeCost + path.cost;
		const h = graph[path.target].heuristic;
		//if new best path
		if(g < graph[path.target].bestCost) {
			graph[path.target].bestCost = g;
			frontier.push({
				"heuristic": h,
				"routeCost": g,
				"routePath": state.routePath.concat([graph[path.target]]),
			});
		}
	});
};

const Search = function(start, goal) {
	const graph = createGraph(start, goal);
	let frontier = [
		{
			"heuristic": graph[start].heuristic,
			"routeCost": graph[start].bestCost,
			"routePath": [graph[start]],
		},
	];
	
	for(;;) {
		//failure
		if(frontier.length === 0) { return []; }
		
		const state = frontier[0];
		frontier = frontier.slice(1);
		
		//if we're at dest.
		if(state.routePath[state.routePath.length - 1].name === goal) {
			return state.routePath;
		}
		
		//expand
		expandFrontier(frontier, graph, state);
		frontier.sort(compareCostAscending);
	}
};


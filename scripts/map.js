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
export { CreateOverlay };

const SVG = "http://www.w3.org/2000/svg";
const Overlay = document.getElementById("overlay");

const positions = {};
Sites.forEach(function(site) {
	positions[site.name] = {
		"x": site.x,
		"y": site.y,
	};
});
const appendRoad = function(road) {
	const p1 = positions[road.a];
	const p2 = positions[road.b];
	const id = road.a.replace(/ /g, "-") + "-" + road.b.replace(/ /g, "-");
	
	const line = document.createElementNS(SVG, "line");
	line.setAttributeNS(null, "x1", p1.x);
	line.setAttributeNS(null, "y1", p1.y);
	line.setAttributeNS(null, "x2", p2.x);
	line.setAttributeNS(null, "y2", p2.y);
	line.id = id;
	Overlay.append(line);
};

const appendSite = function(site) {
	const group = document.createElementNS(SVG, "g");

	const circle = document.createElementNS(SVG, "circle");
	circle.setAttributeNS(null, "cx", site.x);
	circle.setAttributeNS(null, "cy", site.y);
	circle.setAttributeNS(null, "r", 3);
	circle.id = site.name;
	group.append(circle);
	
	const text = document.createElementNS(SVG, "text");
	text.setAttributeNS(null, "x", site.x + 4.0);
	text.setAttributeNS(null, "y", site.y + 4.0);
	text.textContent = site.name;
	group.append(text);
	
	Overlay.append(group);
};

const CreateOverlay = function() {
	Roads.forEach(appendRoad);
	Sites.forEach(appendSite);
	return Overlay;
};


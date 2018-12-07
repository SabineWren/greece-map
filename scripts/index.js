import { CreateOverlay } from "./map.js";
import { Search } from "./search.js";

const TABLE = document.getElementById("output");

const addRow = function(cell1, cell2) {
	const row = document.createElement("tr");
	
	const site = document.createElement("td");
	site.innerHTML = cell1;
	row.appendChild(site);
	const cost = document.createElement("td");
	cost.innerHTML = cell2;
	row.appendChild(cost);
	
	TABLE.appendChild(row);
};

const addTitleRow = function() {
	const titleRow = document.createElement("tr");

	const site = document.createElement("th");
	site.innerHTML = "Site Name";
	titleRow.appendChild(site);
	const cost = document.createElement("th");
	cost.innerHTML = "Weighted Distance";
	titleRow.appendChild(cost);

	TABLE.appendChild(titleRow);
};

let isNextStart = true;
const start       = document.getElementById("start");
const destination = document.getElementById("destination");
const overlay = CreateOverlay();

const clearUI = function() {
	while(TABLE.hasChildNodes()) { TABLE.removeChild(TABLE.lastChild); }
	Array
		.from(overlay.getElementsByClassName("active"))
		.forEach(function(e) { e.classList.remove("active"); });
};

const updateUI = function(start, destination) {
	clearUI();
	const result = Search(start, destination);
	addTitleRow();
	if(result.length === 0) {
		addRow(start, "0");
		addRow(destination, "Infinity");
	}
	
	const sitesHit = [];
	result.forEach(function(step) {
		addRow(step.name, Math.round(step.bestCost).toString());
		sitesHit.push(step.name);
	});
	
	for(let i = 0; i < sitesHit.length - 1; i++) {
		const points = [sitesHit[i], sitesHit[i + 1]];
		points.sort();
		const id = points[0].replace(/ /g, "-") + "-" + points[1].replace(/ /g, "-");
		document.getElementById(id).classList.add("active");
	}
};

overlay.onclick = function(event) {
	const parent = event.target.parentElement;
	if(parent.tagName !== "g") { return; }
	
	const clickedSite = parent.childNodes[1].innerHTML;
	if(start.innerHTML       === clickedSite) { return; }
	if(destination.innerHTML === clickedSite) { return; }
	if(isNextStart) {
		start.innerHTML       = clickedSite;
		isNextStart = false;
	} else {
		destination.innerHTML = clickedSite;
		isNextStart = true;
	}
	
	updateUI(start.innerHTML, destination.innerHTML);
};

updateUI("Sparta", "Athens");


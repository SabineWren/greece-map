/*
	@license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt
	
	Copyright (C) 2018 SabineWren
	https://github.com/SabineWren
	
	GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
	https://www.gnu.org/licenses/agpl-3.0.html
	
	@license-end
*/
export { Roads };

const Roads = Object.freeze([
	{
		"a": "Argos",
		"b": "Elis",
		"multiplier": 1.3,
	},
	{
		"a": "Argos",
		"b": "Epidaurus",
		"multiplier": 1.1,
	},
	{
		"a": "Argos",
		"b": "Korinth",
		"multiplier": 1.1,
	},
	{
		"a": "Argos",
		"b": "Olympia",
		"multiplier": 1.3,
	},
	{
		"a": "Argos",
		"b": "Sparta",
		"multiplier": 1.2,
	},
	{
		"a": "Argos",
		"b": "Sykyon",
		"multiplier": 1.2,
	},
	{
		"a": "Athens",
		"b": "Eretria",
		"multiplier": 1.4,
	},
	{
		"a": "Athens",
		"b": "Leuktra",
		"multiplier": 1.3,
	},
	{
		"a": "Athens",
		"b": "Marathon",
		"multiplier": 1.3,
	},
	{
		"a": "Athens",
		"b": "Megara",
		"multiplier": 1.3,
	},
	{
		"a": "Athens",
		"b": "Pireas",
		"multiplier": 1.0,
	},
	{
		"a": "Athens",
		"b": "Thebes",
		"multiplier": 1.2,
	},
	{
		"a": "Delphi",
		"b": "Echinus",
		"multiplier": 1.6,
	},
	{
		"a": "Delphi",
		"b": "Leuktra",
		"multiplier": 1.3,
	},
	{
		"a": "Delphi",
		"b": "Megara",
		"multiplier": 1.3,
	},
	{
		"a": "Delphi",
		"b": "Thebes",
		"multiplier": 1.3,
	},
	{
		"a": "Dyme",
		"b": "Elis",
		"multiplier": 1.1,
	},
	{
		"a": "Dyme",
		"b": "Sykyon",
		"multiplier": 1.4,
	},
	{
		"a": "Echinus",
		"b": "Leuktra",
		"multiplier": 1.5,
	},
	{
		"a": "Epidaurus Limera",
		"b": "Sparta",
		"multiplier": 1.1,
	},
	{
		"a": "Eretria",
		"b": "Marathon",
		"multiplier": 2.0,
	},
	{
		"a": "Eretria",
		"b": "Thebes",
		"multiplier": 1.3,
	},
	{
		"a": "Korinth",
		"b": "Megara",
		"multiplier": 1.1,
	},
	{
		"a": "Korinth",
		"b": "Sykyon",
		"multiplier": 1.2,
	},
	{
		"a": "Leuktra",
		"b": "Megara",
		"multiplier": 1.2,
	},
	{
		"a": "Leuktra",
		"b": "Thebes",
		"multiplier": 1.1,
	},
	{
		"a": "Marathon",
		"b": "Thebes",
		"multiplier": 1.4,
	},
	{
		"a": "Megara",
		"b": "Thebes",
		"multiplier": 1.4,
	},
	{
		"a": "Olympia",
		"b": "Pylos",
		"multiplier": 1.4,
	},
	{
		"a": "Olympia",
		"b": "Sparta",
		"multiplier": 1.2,
	},
	{
		"a": "Pylos",
		"b": "Sparta",
		"multiplier": 1.2,
	},
].map(function(road, index) {
	road.id = index;
	return road;
}));


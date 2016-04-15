var fs = require('fs');

function createHaiku(structure, sylArray) {
	var haiku = "";
	structure.forEach(function (nestArr) {
		nestArr.forEach(function (num) {
			var index = Math.round(Math.random() * sylArray[num - 1].length);
			haiku += sylArray[num-1][index] + " "
		});
		haiku += "\n"; 
	});
	return haiku;
}

function syllabelDictionary (data) {
	var lines = fs.readFileSync(data).toString().split('\n'),
		sylObj = {},
		sylArr = [],
		lineSplit
	lines.forEach(function (line) { 
		lineSplit = line.split("  ");
		if (lineSplit[1] !== undefined && lineSplit[1].match(/\d/g) !== null ) {
			var syllabels = lineSplit[1].match(/\d/g).length
			if (sylObj[syllabels] !== undefined) {
				sylObj[syllabels].push(lineSplit[0]);
			}
			else {
				sylObj[syllabels] = [lineSplit[0]];
			}
		}
	});
	var mostSyl = +Object.keys(sylObj)[Object.keys(sylObj).length - 1]
	for (var i = 1 ; i <= mostSyl ; i++) {
		if (sylObj.hasOwnProperty(i.toString())) {
			sylArr.push(sylObj[i]);
		}
		else {
			sylArr.push([]);
		}
	}
	return sylArr;
}

module.exports = {
	createHaiku: createHaiku,
	syllabelsArr: syllabelDictionary,
};
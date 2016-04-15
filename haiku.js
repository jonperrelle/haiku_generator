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
		arr = [],
		sylArr = [],
		lineSplit
	lines.forEach(function (line) { 
		lineSplit = line.split("  ");
		if (lineSplit[1] !== undefined && lineSplit[1].match(/\d/g) !== null ) {
			arr.push([lineSplit[0], lineSplit[1].match(/\d/g).length]);
		}
	});
	arr.sort(function (a,b) {return a[1] - b[1]});
	for (var i = 0 ; i < arr[arr.length-1][1] ; i++) {
		sylArr.push([]);
	}
	arr.forEach(function (wordArr) {
		sylArr[wordArr[1] - 1].push(wordArr[0]);
	});
	return sylArr;
}

module.exports = {
	createHaiku: createHaiku,
	syllabelsArr: syllabelDictionary,
};
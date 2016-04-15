var fs = require('fs');

module.exports = function syllabelDictionary (data) {
	var lines = fs.readFileSync(data).toString().split('\n'),
		sylObj = {},
		lineSplit
	lines.forEach(function (line) { 
		lineSplit = line.split("  ");
		if (lineSplit[1] !== undefined && lineSplit[1].match(/\d/g) !== null ) {
			sylObj[lineSplit[0]] = lineSplit[1].match(/\d/g).length;
		}
	});
	return sylObj;
}
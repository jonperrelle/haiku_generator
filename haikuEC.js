var fs = require('fs');

function createHaiku(sylObj, structure, textfile) {
	var haiku = "";
	var haikuArray = [];
	var finalHaikus = ""
	var newWords = [];
	var syllabels = 0;
	var words = fs.readFileSync(textfile).toString().split("\r\n").join(" ").split(" ");
	words.forEach(function (word) {
		if (word.match(/\w+/) !== null) {
			var newWord = word.match(/\w+('s)?/)[0];
			newWords.push(newWord);
		}
	});
	var flatStructure = structure.reduce(function (a,b) {return a.concat(b)});
	for (var i = 0 ; i < newWords.length ; i++) {
		if (newWords[i] !== undefined && sylObj[newWords[i].toUpperCase()] === flatStructure[0]) {
			haiku += newWords[i] + " ";
			syllabels += flatStructure[0];
			for (var j = 1 ; j < flatStructure.length ; j++) {
				if (newWords[i+j] !== undefined && sylObj[newWords[i+j].toUpperCase()] === flatStructure[j]) {
					haiku += newWords[i+j] + " ";
					syllabels += flatStructure[j];
					if (syllabels === 5 || syllabels === 12) {
						haiku += "\n";
					}
				}
				else {
					syllabels = 0;
					haiku = "";
					break; 
				}
			}
			if (haiku.length > 1 ) {
				haikuArray.push(haiku);
				haiku = '';
				syllabels = 0;
			}
		}
	}
	if (haikuArray.length > 0) {
		haikuArray.forEach(function(h) {
			finalHaikus += h + "\n\n";
		});
		return finalHaikus;
	}
	else {
		return "There are no haikus with this structure in the book!";
	}	
}

module.exports = {
	createHaiku: createHaiku,
};

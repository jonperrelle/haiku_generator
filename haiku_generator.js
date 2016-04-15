var haiku = require('./haiku'); 
var structure = JSON.parse(process.argv[2]); //haiku structure is first CL argument
var syllabelsArr = haiku.syllabelsArr(process.argv[3]); //cmu file should be second CL argument
console.log(haiku.createHaiku(structure, syllabelsArr));
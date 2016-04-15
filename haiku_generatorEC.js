var haiku = require('./haikuEC');
var dictionary = require('./dictionary');  //placed Syllabel dictionary in separate module, created Syllabels Object rather than Array
var structure = JSON.parse(process.argv[2]); //haiku structure is the first CL argument
var textfile = process.argv[3]; //book textfile is second CL argument
var syllabelsObj = dictionary(process.argv[4]); //cmudict file is third CL argument
console.log(haiku.createHaiku(syllabelsObj, structure, textfile));
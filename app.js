const fs = require('fs') // require function to Load in modules
fs.writeFileSync('notes.txt', 'My name is Roshan.')

//naming convention in the documentation (best practice)!!

fs.appendFileSync('notes.txt', "I am 21 years old")
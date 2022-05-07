// code to capitilize the first letter of a name and ensure all other letters are lowercase. This should print a name how it would commonly be viewed when written, such as Rebekah
// Meant to be run in Chrome browser
var name = prompt("What is your name?");
var totalCharacters = name.length
var firstCharacterName = name.slice(0, 1)
var restCharacterName = name.slice(1, (name.length))
name = firstCharacterName.toUpperCase() + restCharacterName.toLowerCase()
alert(`Hello ${name}`)
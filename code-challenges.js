// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// declare function that accepts a temperature as argument
const boilingPoint = (temp) => {
  // declare a variable that is equal to boiling point (212 degrees F)
  let actualBoilingPt = 212
  // if statement that checks if input temp is a number
  if (typeof temp === "number") {
    // if input temp is below BP, return string that states temp is below BP
    if (temp < actualBoilingPt) {
      return `${temp} is below boiling point`
    // if input temp is above BP, return string that states temp is above BP
    } else if (temp > actualBoilingPt) {
      return `${temp} is above boiling point`
    // if input temp is same as BP, return string that states temp is at BP
    } else if (temp === actualBoilingPt) {
      return `${temp} is at boiling point`
    }
    // catch all error message if input is not a number
  } else {
    return "Invalid input type. Try again."
  }
}

// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// declare a function that accepts an array as argument
const multiplyBy5Ver1 = (array) => {
  // make for loop that goes through each index of array
  for (let i = 0; i < array.length; i++) {
    // multiply each value of the array by 5 and set that value to that index
    array[i] *= 5
  }
  // return the array with the modified values
  return array
}

//console.log(multiplyBy5Ver1(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// declare function that accepts an array as an argument
const multiplyBy5Ver2 = (array) => {
  // use map function look at all values of in the array
  // condition is multiply all values by 5
  // return an array with the result of value * 5
  return array.map(value => value * 5)
}

//console.log(multiplyBy5Ver2(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// declare a function that accepts a string as an argument
const noVowelsVer1 = (string) => {
  // first split string into array and use a filter to go through all letters in the array
  return string.split("").filter(value => {
    // return array with the condition that it will only keep consonants--NO VOWELS (a, e, i, o u (sorry 'y'))
    // join all the values of array to form the word
    return value !== "a" && value !== "A" && value !== "e" && value !== "E" && value !== "i" && value !== "I" && value !== "o" && value !== "O" && value !== "u" && value !== "U"}).join("")
}

//console.log(noVowelsVer1(stringWithVowels1))
//console.log(noVowelsVer1(stringWithVowels2))



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

// declare a function that accepts a string as an argument
const noVowelsVer2 = (string) => {
  // if statement that checks if user's input is a stringToArray
  if (typeof string === "string") {
    // first split string into an array and use filter to go through all letters in the array
    return string.split("").filter(value => {
      // return array with the condition that it will only keep consonants--NO VOWELS (a, e, i, o, u (sorry 'y'))
      // join all the values of array to form the word
      return value !== "a" && value !== "A" && value !== "e" && value !== "E" && value !== "i" && value !== "I" && value !== "o" && value !== "O" && value !== "u" && value !== "U"}).join("")
  // else if not a string, give an error message
  } else {
    return `${string} is not a string`
  }
}

// console.log(noVowelsVer2(notAString1))
// console.log(noVowelsVer2(notAString2))



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// declare a function that accepts an object as an argument
const onlyCats = (object) => {
  // return the result of filtering for only toonimals that are cats
  return object.filter(value => value.animal === "cat")
}

//console.log(onlyCats(toonimals))



// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

//declare a function that accepts an object as an argument
const nameOfNonCat = (object) => {
  // save and filter non-cats into a variable that contains no cat toonimals
  let nonCats = object.filter(value => value.animal !== "cat")
  // return only the names of all non cat toonimals
  return nonCats.map(value => value.name).join(" ")
}

//console.log(nameOfNonCat(toonimals))

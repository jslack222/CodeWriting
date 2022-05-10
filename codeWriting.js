let subZeroHealth = 10 

let textVersion = subZeroHealth.toString()

console.log(subZeroHealth)
console.log(textVersion)

let boolVersion = Boolean(subZeroHealth);
let theWinnerIs = "Finish Himmmmmm Sub Zero"
let newWinner = theWinnerIs.replace("Sub Zero", "Scoripion")

console.log(theWinnerIs); 
console.log(newWinner); 


if (newWinner.includes("Scorpion")) {
    console.log("Scorpion has vanguished his foe, Sub Zero loses!")
} else {
    console.log("Error rematch imminent")
}

console.log(theWinnerIs);
console.log(newWinner);

if (newWinner.includes("Scorpion")) {
    console.log("replaced Sub Zero with Scorpion inside of newWinner variable")
} else {
    console.log("ERROR")
}

console.log({ newWinner })

let newWinnerLover = newWinner.toLowerCase()

console.log({ newWinnerLover })

var words = newWinnerLover.split(" "); 
console.log({ words })

let newWinnerKebab = words.join("-")
console.log({ words })

// Following along with notes from 5/9/22

// let herimoneScore = 44 
// herimoneScore += 5
// herimoneScore *= 2

// console.log(herimoneScore)

function calculateScore(studentScore) {
    studentScore += 5 
    studentScore *= 2
    return studentScore
}

let herimoneScore = calculateScore(44)
let harryScore = calculateScore(41)

console.log(harryScore)
console.log(herimoneScore)

// just because you invoke a function does not mean that it will show up in the terminal. Many times when you invoke a function nothing will appear until you console.log the change by calling out the variables.

function logMyName(name) {
    console.log(name)
}
logMyName('Jonathan')

function sumNumbers(num1, num2) {
    console.log(num1 / num2)
}

sumNumbers(3, 9)
sumNumbers(-3, 120)
sumNumbers(34, 67)

let purse = 20 

function calculateTotal(item1, item2) {
    return item1 + item2
}
purse -= calculateTotal(6.59, 9.99)

console.log(purse)

let age = 21 

function logDetails() {
    let name = 'Tyler'
    console.log(`My name is ${name} and I am ${age}.`)
}

console.log(logDetails())


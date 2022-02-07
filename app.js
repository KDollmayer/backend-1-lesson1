

const arguments = process.argv.slice(2)

let[number, math, number2] = arguments

number = parseFloat(number)
number2 = parseFloat(number2)



function mathCal(number, math, number2) {


    if (math === '+') {
        return number + number2
    } else if (math === '-') {
        return number - number2
    } else if ( math === 'C:/Program Files/Git' || math === '/'){
            return number / number2
    } else if (math === '*') {
        return number * number2
    } else {
        return "Mata in rätt"
    }
}
console.log(mathCal(number, math, number2))

console.log(math)


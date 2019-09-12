
function fizzBuzz(num) {
    if (typeof(num) != "number"){
        return String("error")
    }

    // num ? num % 3: 'Fizz'  num % 5: 'Buzz'

    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"
    }
    else if(num % 3 === 0){
        return "Fizz"
    }
    else {
        if(num % 5 === 0){
            return "Buzz"
        }
    }

    return num;
}

module.exports = fizzBuzz;
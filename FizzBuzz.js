/*
Write a function that takes one number, if that number is divisible by 3 it returns "fizz",
 if it is divisible by 5 it returns "buzz", if it divisible by both then "fizzbuzz"

*/ 

function fizzBuzz(num){
    if (num % 3){
        return "fizz";
    } else if (num % 5){
        return "buzz";
    } else if (num % 3 ===0 && num % 5 ===0){
        return "FizzBuzz"
    }
}
console.log(fizzBuzz(3)); //expected (buzz)
console.log(fizzBuzz(5)); //expected  (fizz)
console.log(fizzBuzz(15)); //expected  (FizzBuzz)
 //Write a function named biggerNumber that takes 2 arguments, both numbers returns whichever number is the greater (higher) number, so if you give 2, 3 then it should 3. 

function biggerNumber(num,num1) {
    if (num > num1) {
        return num;
    } else if (num < num1){
        return num1
    }
}

console.log(biggerNumber(2,3));
console.log(biggerNumber(1,0));
console.log(biggerNumber(1,5));
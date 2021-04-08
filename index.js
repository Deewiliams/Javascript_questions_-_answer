//Write a JavaScript function to check whether a string is blank or not.

function is_Blank(blank) {
    return !blank.length;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));



//Write a JavaScript function to split a string and convert it into an array of words.

let senstence = "my name is Desire";
let words = sentence.split('');
console.log('words')

//Write a JavaScript function to remove specified number of characters from a string.

function truncate_string (str1, length) {
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }};
    console.log(truncate_string("Robin Singh",4));

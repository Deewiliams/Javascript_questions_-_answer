//Write a JavaScript function to check whether a string is blank or not.

function is_Blank (blank){
    if (blank.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(is_Blank (''));
console.log(is_Blank ('abc'));




//Write a JavaScript function to split a string and convert it into an array of words.

function sentence (str) {
    return str.split(" ");

}

console.log(sentence('my name is Desire'));

//Write a JavaScript function to remove specified number of characters from a string.

function truncate_string (str1, length) {
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }};
    console.log(truncate_string("Robin Singh",4));

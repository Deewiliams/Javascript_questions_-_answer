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



 // check if employee worked for more than 10 years :criteria
        // if true increase there salary by 100
        // get the employee
        // check if they meet criteria



    let empl = [
        {
          id: "e123",
          name: "Berry",
          postion: "Developer",
          salary: 100,
          years: 24,
        },
        {
          id: "e123",
          name: "Terry",
          postion: "Developer",
          salary: 100,
          years: 12,
        },
        {
          id: "e123",
          name: "jerry",
          postion: "Developer",
          salary: 100,
          years: 50,
        },
        {
          id: "e123",
          name: "doe",
          postion: "Developer",
          salary: 100,
          years: 100,
        },
      ];
      for (let index = 0; index < empl.length; index++) {
       if (empl[index].years >= 10) {
        // increment salary by 100
        empl[index].salary = empl[index].salary + 100;
      }
        }
      
      // Print updated list
      console.log(empl);
    

      //Write a function named biggerNumber that takes 2 arguments, both numbers returns whichever number is the greater (higher) number, so if you give 2, 3 then it should 3. 
      
      function biggerNumber(num) {
        if (num < 2 && num > 3) {
            return "2";
        }
        return "3"
    }
     
    console.log(biggerNumber(2,3));
// classic fizz buzz problem
// Prints fizz for every number divisible by 3
// prints buzz for every number divicible by 5
// prints fizzbuzz for every number divisible by both 3 and 5 
// counts to 100 and then stops
// used to understand while loops 

var output = []; 
var count = 1;

function fizzBuzz() {

    while (count <= 100) {
        
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzBuzz");    
        } else if (count % 3 === 0) {
            output.push("fizz");     
        } else if (count % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(count);
        }
        
        count++;

    }
        
    console.log(output);
        
}

fizzBuzz()
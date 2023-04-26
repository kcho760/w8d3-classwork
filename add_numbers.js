const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {

    if ( numsLeft > 0 ) {
        let answer = rl.question('What is the number? ', function(answer){
        let parsed = parseInt(answer);
        sum += parsed;
        console.log(sum);
        addNumbers(sum, numsLeft-1, completionCallback) //this was called using the completionCallback function we declared up there
        });
    }else{ //we need an else statement to close out the final loop
        completionCallback(sum);
        rl.close(); //this goes here to represent our base case
    };
    
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
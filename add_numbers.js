const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


    // let response = rl.question('What do you think of JavaScript? ', answer => answer);

    // if (response) {
    //     console.log(`Thank you for your valuable feedback: ${response}`)
    //     asking = false;
    //     rl.close();
    // }


function addNumbers(sum, numsLeft, completionCallback) {

    if ( numsLeft > 0 ) {
        let answer = rl.question('What is the number? ', answer => answer);
        let parsed = parseInt(answer);
        sum += parsed;
        console.log(sum);
        addNumbers(sum, numsLeft-1, sum => console.log(`Total Sum: ${sum}`))
        
    }
rl.close();
    
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
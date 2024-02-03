function getFactorial(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}


const number = parseInt(prompt("Enter a number:"));
let message;

isNaN(number) ?
    message = 'Please, enter a number...' :
    message = `${number}! = ` + getFactorial(number);


alert(message);


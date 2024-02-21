//console.log('Test');

for (let n = 1; n <= 100; n++) {
    //console.log(n); //generate numbers from 1 to 100

    if (n % 3 == 0 && n % 5 == 0) {
        console.log('FizzBuzz'); //'FizzBuzz'

    } else if (n % 3 == 0) {
        console.log('Fizz'); //'Fizz'

    } else if (n % 5 == 0) {
        console.log('Buzz'); //'Buzz'

    } else {
        console.log(n); //Number
    }

}
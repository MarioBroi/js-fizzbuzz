//console.log('Test');

const ulElement = document.querySelector('.list')
let result;

for (let n = 1; n <= 100; n++) {
    //console.log(n); //generate numbers from 1 to 100
    /*     const markUpListItem = `<li>${n}</li>`
        console.log(markUpListItem);
        ulElement.insertAdjacentHTML('beforeend', markUpListItem) */

    if (n % 3 == 0 && n % 5 == 0) {
        console.log('FizzBuzz'); //'FizzBuzz'
        result = 'FizzBuzz'
        const markUpListItem = `<li>${result}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else if (n % 3 == 0) {
        console.log('Fizz'); //'Fizz'
        result = 'Fizz'
        const markUpListItem = `<li>${result}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else if (n % 5 == 0) {
        console.log('Buzz'); //'Buzz'
        result = 'Buzz'
        const markUpListItem = `<li>${result}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else {
        console.log(n); //Number
        const markUpListItem = `<li>${n}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)
    }

}
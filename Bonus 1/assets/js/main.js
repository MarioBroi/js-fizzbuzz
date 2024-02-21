//console.log('Test');

const ulElement = document.querySelector('.list');
let result = '';


for (let n = 1; n <= 100; n++) {
    //console.log(n); //generate numbers from 1 to 100

    if (n % 3 == 0 && n % 5 == 0) {
        //console.log('FizzBuzz'); //'FizzBuzz'
        result = 'FizzBuzz';
        const markUpListItem = `<li class = "box fizzbuzz">${result}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else if (n % 3 == 0) {
        //console.log('Fizz'); //'Fizz'
        result = 'Fizz';
        const markUpListItem = `<li class = "box fizz">${result}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else if (n % 5 == 0) {
        //console.log('Buzz'); //'Buzz'
        result = 'Buzz';
        const markUpListItem = `<li class = "box buzz">${result}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else {
        //console.log(n); //Number
        const markUpListItem = `<li class = "box">${n}</li>`
        ulElement.insertAdjacentHTML('beforeend', markUpListItem)
    }

}

//--DOESN'T WORK--//
/* const ul = document.querySelector('ul.list');
const li = document.createElement('li');
let result = '';


for (let n = 1; n <= 100; n++) {

    if (n % 3 == 0 && n % 5 == 0) {
        result = 'FizzBuzz';
        li.append(result);
        ul.append(li);

    } else if (n % 3 == 0) {
        result = 'Fizz';
        li.append(result);
        ul.append(li);

    } else if (n % 5 == 0) {
        result = 'Buzz';
        li.append(result);
        ul.append(li);

    } else {
        li.append(n);
        ul.append(li);
    }

} */
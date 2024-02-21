//console.log('Test');

//const ulElement = document.querySelector('.list');
let result;
const ul = document.querySelector("ul.list");
const li = document.createElement('li');


for (let n = 1; n <= 100; n++) {
    //console.log(n); //generate numbers from 1 to 100

    if (n % 3 == 0 && n % 5 == 0) {
        console.log('FizzBuzz'); //'FizzBuzz'
        result = 'FizzBuzz';
        li.append(result);
        ul.append(li)
        //const markUpListItem = `<li>${result}</li>`
        //ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else if (n % 3 == 0) {
        console.log('Fizz'); //'Fizz'
        result = 'Fizz';
        li.append(result);
        ul.append(li)
        //const markUpListItem = `<li>${result}</li>`
        //ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else if (n % 5 == 0) {
        console.log('Buzz'); //'Buzz'
        result = 'Buzz';
        li.append(result);
        ul.append(li)
        //const markUpListItem = `<li>${result}</li>`
        //ulElement.insertAdjacentHTML('beforeend', markUpListItem)

    } else {
        console.log(n); //Number
        li.append(n);
        ul.append(li)
        //const markUpListItem = `<li>${n}</li>`
        //ulElement.insertAdjacentHTML('beforeend', markUpListItem)
    }

}
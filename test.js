console.log('Hello world');

let hello = function () {
  return 'hello '
}

let myName = function (itname) {
  return itname;
}

let nameSet = hello() + myName('On');

console.log(nameSet);



const arr = ['apple', 'banana', 'grape', 'kiwi'];

function list(data) {
  return `${data} + ' is nice'`
}

for (let i = 0; i < arr.length; i++) {
  list(arr[i]);
}
console.log('Hello world');

let hello = function(){
  return 'hello '
}

let myName = function(itname) {
  return itname;
}

let nameSet = hello() + myName('On');

console.log(nameSet);
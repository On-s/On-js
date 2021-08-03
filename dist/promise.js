'use strict'; // Promise 는 자바스크립트의 비동기처리 오브젝트이다.
// state :: pending => fulfiied or rejected
// Producer vs Consumer
// 원하는 기능을 비동기적으로 실행시키는 Promise Ex
//  프로미스가 언제 실행되는지 , 자동으로 시작되는지

var promise = new Promise(function (resolve, reject) {
  console.log('doing something');
  setTimeout(function () {
    resolve('on'); // reject(new Error('no data'));
  }, 2000);
}); // 

promise.then(function (value) {
  console.log(value);
})["catch"](function (error) {
  console.log(error);
})["finally"](function () {
  console.log('finally');
});
var fetchNumber = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
fetchNumber.then(function (num) {
  return num * 2;
}).then(function (num) {
  return num * 3;
}).then(function (num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(num - 1);
    }, 1000);
  });
}).then(function (num) {
  return console.log(num);
}); // ---------------------------------------------------------------------------------

var getHen = function getHen() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('hen');
    }, 500);
  });
};

var getEgg = function getEgg(hen) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve(`${hen} => Egg`)
      reject(new Error("error! ".concat(hen, " => egg")));
    }, 500);
  });
};

var cook = function cook(egg) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("".concat(egg, " => meal"));
    }, 500);
  });
}; // getHen().then(hen => getEgg(hen)).then(egg => cook(egg)).then(meal => console.log(meal));
// 매개변수를 호출할 때에는 간단하게 표현이 가능하다. 한가지만 받아서 그대로 전달하는 경우에는 생략이가능하다 (두가지이상도 받을수있다?)


getHen().then(getEgg) // 에러가 났을때 빵으로 대체해라.
["catch"](function (error) {
  return 'braed';
}).then(cook).then(console.log) // 캐치로 가져올수 있다.
["catch"](console.log);
'use strict';

// Promise 는 자바스크립트의 비동기처리 오브젝트이다.
// state :: pending => fulfiied or rejected
// Producer vs Consumer

// 원하는 기능을 비동기적으로 실행시키는 Promise Ex

//  프로미스가 언제 실행되는지 , 자동으로 시작되는지
const promise = new Promise((resolve, reject) => {
  console.log('doing something');
  setTimeout(() => {
    resolve('on');
    // reject(new Error('no data'));
  }, 2000);
});
// 
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })



const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1)
      }, 1000);
    });
  })
  .then(num => console.log(num));

// ---------------------------------------------------------------------------------

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hen')
    }, 500);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${hen} => Egg`)
      reject(new Error(`error! ${hen} => egg`))
    }, 500);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => meal`)
    }, 500);
  });

// getHen().then(hen => getEgg(hen)).then(egg => cook(egg)).then(meal => console.log(meal));
// 매개변수를 호출할 때에는 간단하게 표현이 가능하다. 한가지만 받아서 그대로 전달하는 경우에는 생략이가능하다 (두가지이상도 받을수있다?)

getHen()
  .then(getEgg)
  // 에러가 났을때 빵으로 대체해라.
  .catch(error => {
    return 'braed'
  })
  .then(cook)
  .then(console.log)
  // 캐치로 가져올수 있다.
  .catch(console.log);
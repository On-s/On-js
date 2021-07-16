'use strict';
/* strict 모드란?
엄격모드 = 
 기존에는 조용히 무시되던 에러들을 throwing합니다.
 JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

엄격모드를 전체 스크립트에 적용하기 위해, 정확한 구문 "use strict";(또는 'use strict';) 을 다른 구문 작성 전에 삽입합니다.
*/ 


// 자바스크립트는 동기적이다.
// 자바스크립트는 호이스팅 후 순서대로 코드블록 실행한다.
// 호이스팅? : var , funtion declaration(함수선언)한것이 가장먼저 실행되버린다.

// 동기적인 실행예시 결과 1 2 3 결과예측이 가능하다.
console.log(1);
console.log(2);
console.log(3);

function printImmediately(print) { //호이스팅 함수먼저 실행
    print();
}
function printWithDelay(print , timeout){
    setTimeout(print , timeout);
}

console.log(1); //동기
setTimeout(()=>console.log(2),1000); //비동기 요청
console.log(3); //동기
// 동기적인 callback
printImmediately (()=> console.log('hello')); //동기
// 비동기적인 callback
printWithDelay(()=> console.log('async callback'), 2000 ); //비동기


// 무분별하게 콜백을 사용하다보면 콜백지옥이나타남 콜백안에 또 콜백이나오고 ~ 

// Callback Hell example 
class UserStorage {
    loginUser (id, password , onSuccess , onError){
        setTimeout(()=> {
            if(
                (id === 'on' && password === 's') || 
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles (user , onSuccess , onError){
        setTimeout(() => {
            if (user === 'on') {
                onSuccess({name : 'on', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser (
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)
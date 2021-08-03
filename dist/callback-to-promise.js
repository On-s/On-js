"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var UserStorage = /*#__PURE__*/ function () {
  function UserStorage() {
    _classCallCheck(this, UserStorage);
  }

  _createClass(UserStorage, [{
    key: "loginUser",
    value: function loginUser(id, password) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (id === 'on' && password === 's' || id === 'coder' && password === 'academy') {
            resolve(id);
          } else {
            reject(new Error('not found'));
          }
        }, 2000);
      });
    }
  }, {
    key: "getRoles",
    value: function getRoles(user) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (user === 'on') {
            resolve({
              name: 'on',
              role: 'admin'
            });
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
    }
  }]);

  return UserStorage;
}();

var userStorage = new UserStorage();
var id = prompt('enter your id');
var password = prompt('enter your password');
userStorage.loginUser(id, password).then(userStorage.getRoles).then(function (user) {
  return alert("Hello ".concat(user.name, ", You have a ").concat(user.role, " role"));
})["catch"](console.log); // userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {
//         console.log(error);
//     }
// )
// const loginUser = new Promise((resolve, reject) => {
//     let id, password;
//     setTimeout(() => {
//         if ((id === 'on' && password === 's') ||
//             (id === 'coder' && password === 'academy')) {
//             resolve(id)
//         } else {
//             reject(new Error('not found in Data'));
//         }
//     }, 500);
// });
// loginUser.then(console.log);
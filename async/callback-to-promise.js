class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'on' && password === 's') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
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
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(
    `Hello ${user.name}, You have a ${user.role} role`
))
.catch(console.log)

// userStorage.loginUser(
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










const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Promise trigger");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    // console.log("Promise fulfilled");
}).catch(function () {
    // console.log("Promise rejected");
})


new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Promise 2 trigger");
        resolve()
    }, 1000)
}).then(() => console.log('Promise 2 fulfilled'))




const promiseThree = new Promise((resolve) => {
    setTimeout(() => {
        resolve({username:"rahul", class: "upper"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user.username, user.class);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username:"rahul", class: "upper"})
        }
        else {
            reject("Something wrong")
        }
        
    }, 1000)
}).then((data) => {
    console.log(data.username);
}).catch((error)=> {
    console.log(`${error} is went wrong`);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(`${error} went wrong javascript`);
        
    }
}

consumePromiseFive();


// async function getAllUsers(params) {
//     try {
//         const url = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = url.json();
//         console.log(typeof url, url);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getAllUsers();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data)=> {
//     return data.json()
// }).then((response) => {
//     console.log(response);
// }).catch((error) => console.log(error)
// )
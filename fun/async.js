
// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A Promise can be in one of three states: pending, fulfilled, or rejected.

// const myPromise = new Promise ((res, rej) => {
//     let success = true;
//     setTimeout(() => {
//         if (success) {
//             res("Promise resolved successfully");
//         } else {
//             rej("Promise rejected");
//         }
//     }, 2000);
// })

// myPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });


// Async/Await is a syntactic sugar built on top of Promises. It allows you to write asynchronous code in a more synchronous manner, making it easier to read and understand. The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until the Promise is resolved or rejected.


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
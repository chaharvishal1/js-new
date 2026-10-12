
// Get fetch API

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));


// Post fetch API

// const postData = {
//         title: 'My Post',
//         body: 'This is the post content',
//         userId: 1
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// Error handling with fetch API

fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
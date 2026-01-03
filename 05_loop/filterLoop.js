const language = ["Javascript", "Python", "Java", "C++", "Ruby"];

// const validLanguages = language.filter( (item) => {
//     return item.length > 4;
// })

// console.log(validLanguages);


const newLanguage = []

language.filter( (item) => {
    if(item.length > 4) {
        newLanguage.push(item);
    }
})

// console.log(newLanguage);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const publishedBooks = books.filter( (book) => book.publish >= 1990 );

const publishedBooks = books.filter( (book) => {
    return book.publish >= 1990 && book.genre === 'History'
})

//   console.log(publishedBooks);


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumArr = numArr.map( (val) => val * 10 )
                    .map( (val) => val + 1 )
                    .filter( (val) => val > 50 )

console.log(newNumArr);




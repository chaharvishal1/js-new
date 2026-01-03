const language = ["Javascript", "Python", "Java", "C++", "Ruby"];

// language.forEach( function(item){
//     console.log(item);
// })

// language.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

language.forEach(printLanguage)

function printLanguage(item, index) {
    // console.log(item, index);
}


const languageDtails = [
    {name: "Javascript", year: 1995},
    {name: "Python", year: 1991},
    {name: "Java", year: 1995},
    {name: "C++", year: 1985},
    {name: "Ruby", year: 1995},
]

languageDtails.forEach( (item)=> {
    console.log(item.name, item.year);
})
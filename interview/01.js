//#1 Find longest word

const findLongestWord = (str) => {
    if(str.trim() === 0){
        return false
    }

    let wordArr = str.split(" ");
    let longWord = ""
    for (const ele of wordArr) {
        if(ele.length > longWord.length){
            longWord = ele
        }
    }
    console.log(longWord);
}


findLongestWord('Watch chair aur code youtube channel for hitghyuijn technical javascript');




// #2 Write a fucntion generateHashtag which takes a string and turns it into a hashtag. 
// If the final result is longer than 140 characters it should return false. If the input or the result is an empty string it should return false.


const generateStringHash = (str) => {
    if(str.trim().length === 0 || str.length > 139 || str.split(" ").length === 0){
        return false
    }

    // let wordArr = str.split(" ").map( ele => ele.charAt(0).toUpperCase() + ele.slice(1) );
    let wordArr = str.split(" ").map( ele => ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase()) );
    // let hashTag = "#"
    // for (const ele of wordArr) {
    //     hashTag = hashTag + ele
    // }
    // console.log(hashTag);

    wordArr = `#${wordArr.join("")}`;
    console.log(wordArr);
}



generateStringHash('Watch chair aur code youtube channel for hitghyuijn technical javascript');



// #3 Write a function that takes an string of words and returns that word how much times in string.


const wordCountInString = (str, ch) => {
    if(str.trim().length === 0){
        return false
    }

    let wordArr = str.toLowerCase();
    let chLower = ch.toLowerCase();

    wordArr = str.split("").reduce((acc, ele) => {
        if(ele === chLower) {
            acc ++
        }
        return acc;
    }, 0)
    console.log(wordArr);
    
}


wordCountInString('javascript', 'a')
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

    let wordArr = str.split(" ").map( ele => ele.charAt(0).toUpperCase() + ele.slice(1) );
    // let hashTag = "#"
    // for (const ele of wordArr) {
    //     hashTag = hashTag + ele
    // }
    // console.log(hashTag);

    wordArr = `#${wordArr.join("")}`;
    console.log(wordArr);
}



generateStringHash('Watch chair aur code youtube channel for hitghyuijn technical javascript');
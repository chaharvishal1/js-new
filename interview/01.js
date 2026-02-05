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



// #5 Write a function that sort an array of string in alphabetical order.


const assendingSort = (arr) => {
    if(arr.length === 0) {
        return false
    }
    // arr.sort((a,b) => a-b);
    arr.sort().reverse();
    console.log(arr);
}

// assendingSort([1, 11, 31, 4, 5])

assendingSort(["javascript", "python", "c++", "java", "ruby"])



// #6 Write a function that show isPalindrome or not.


const isPalindrome = (str)=> {
    if(str.trim().length === 0) {
        return false
    }

    str = str.toLowerCase();
    let r_str = str.split("").reverse().join("");

    if(str === r_str) {
        console.log("It is a palindrome");
    } else {
        console.log("It is not a palindrome");
    }
}

isPalindrome('racecar');



// #7 Write a function that find max number in array without using Math.max() method.

const findMaxNum = (arr) => {
    if(arr.length === 0) {
        return false
    }

    // let maxNum = arr[0];
    // for (const ele of arr) {
    //     if(ele > maxNum) {
    //         maxNum = ele
    //     }
    // }
    let maxNum = Math.max(...arr);
    console.log(maxNum);
}

findMaxNum([1, 11, 31, 4, 5])
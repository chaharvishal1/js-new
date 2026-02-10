// #11 Write a function that count the digit of a number

const countDigit = (num) => {
    if(num < 0) return false;

    let arr = Array.from(num.toString(), Number);
    let total = arr.reduce((acc, ele) => acc+ele, 0);
    console.log(`Total: ${total}`);
}

countDigit(12345)


// #12 Write a function that remove duplicate from array

const removeDuplicate = (arr) => {
    if(!Array.isArray(arr)) return false;

    // let result = arr.reduce((acc, ele) => {
    //     if(!acc.includes(ele)) {
    //         acc.push(ele);
    //     }
    //     return acc;
    // }, [])

    // console.log(result);

    let result = new Set(arr);
    // console.log(result);
    console.log(Array.from(result));
    
}


removeDuplicate([1,2,3,4,5,1,2,3])


// #13 Write a function that count the vowels of a string

const countVowels = (str) => {

    if(typeof str !== 'string' || str.length === 0) return false;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    const result = str.split("").reduce((acc, ele) => {
        if(vowels.includes(ele.toLowerCase())) {
            acc++;
        }
        return acc;
    }, 0)

    console.log(`Total Vowels: ${result}`);

}


countVowels('heloow world')


// #14 Write a function that isPowerOfTwo or not


const isPowerOfTwo = (num) => {
    if(num < 1) return false;
    
    let opt = false;

    for(let i = 1; i < num; i++) {
        if(2 ** i === num) {
            opt = true;
            break;
        }
    }
    
    console.log(opt);
    

}

isPowerOfTwo(5)


// #15 Write a function that calculate sum of the square of each number in array


const sumOfSquare = (arr) => {
    if(!Array.isArray(arr)) return false;

    const result = arr.reduce((acc, ele) => acc + ele ** 2, 0);
    console.log(`Total: ${result}`);
}

sumOfSquare([1,2,3,4])



// #16 Write a function that find minimum number in array without using Math.min() method.


const getMinNum = (arr) => {
    if(arr.length === 0) return false;

    let minNum = arr[0]

    for (const ele of arr) {
        if(ele < minNum) {
            minNum = ele;
        }
    }

    console.log(`Minimum num: ${minNum}`);
}

getMinNum([5, 3, 4, 6, 7, 8])


// #17 Write a function that convert a string to camel case

const convertToCamelCase = (str) => {
    if(typeof str !== 'string' || str.length === 0) return false;

    const result = str.trim().split(" ").map((ele, index) => {
        if(index === 0) {
            return ele.toLowerCase();
        } else {
            // return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
            return ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase());
        }
    }).join("");
    console.log(`Camel Case String is: ${result}`);
    
}

convertToCamelCase("Hello world this is a test")


// #18 Write a function that find letter is toUpperCase or not

const isUpperCase = (char) => {
    if(typeof char !== 'string' || char.length === 0) return false;

    const result = char === char.toUpperCase();
    console.log(result);
}

isUpperCase('A')


// #19 Write a function to get given string start from sub string or not


const getStatusString = (str, subStr) => {
    if(str.length === 0 || subStr.length === 0) return false

    // const result = str.split(" ").map((itm, index) => {
    //     if(itm.toLowerCase() === subStr.toLowerCase()){
    //         return true
    //     }
    //     return false
    // })
    const result = str.toLowerCase().startsWith(subStr.toLowerCase())
    console.log(`Status of give string is: ${result}`);
    
}

getStatusString("Hello world", "hello")


// #20 Write a function to revert string without using javascript predefined method

const getReverseString = (str) => {
    if(str.length === 0) return false

    let newStr = ''

    const result = str.toLowerCase();
    for (let i = result.length-1; i >= 0 ; i--) {
        newStr = newStr + result[i]
    }
    console.log(`reverse string is: ${newStr}`);
    
}

getReverseString("vishal")
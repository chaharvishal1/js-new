
// #21 Write a program to get mode of a number of arrays


const getMode =(arr) => {
    if(arr.length === 0) return false
    let defaultEle = {}
    let maxNm = 0;
    let mod;
    for (const ele of arr) {
        defaultEle[ele] = (defaultEle[ele] || 0) + 1
        if(defaultEle[ele] > maxNm){
            maxNm = defaultEle[ele]
            mod = ele
        }
    }
    return mod
    
}

console.log(getMode([2,4,1,5,3,5,6]));



// #22 Write a program to get median of a number of arrays


const getMedian = (arr)=> {
    if(arr.length === 0) return false

    const result = arr.sort((a,b)=> a-b)  
    
    if(result.length % 2 === 0){
        const med = Math.ceil(result.length/2)
        const finalResult = (result[med-1] + result[med])/2
        console.log(`Median of even array: ${finalResult}`);
    }
    else {
        const med = Math.ceil(result.length/2)
        console.log(`Median of odd array: ${result[med-1]}`);
    }
}

getMedian([2,4,1,5,3,5,6])


// #23 Write a program to find factorial using recursive function


const recursiveFactorial = (val)=> {
    if(val === 1){
        return 1
    }
    else{
        return val * recursiveFactorial(val-1)
    }

}

console.log(recursiveFactorial(5));


// #24 Write a program to get fabonacci series of n number


const getFabonacci = (val)=> {
    if(val <= 1){
        return val
    }
    else {
        return getFabonacci(val-1) + getFabonacci(val-2)
    }
}

console.log(getFabonacci(8));


// #25 Write a function that repeat string as per giver argument


const repeatString =(str, nm) => {
    if(nm === 0) return false
    let result='';
    for (let i = 0; i <= nm; i++) {
       result = result + str
    }
    console.log(`Repeated string is : ${result}`);
    
}

repeatString("abc", 4)


// #26 Write a function for truncate String as per giver argument length


const truncateString = (str, count) => {
    if(str.length > count) {
        const result = str.slice(0, count)
        console.log(`Truncate string is: ${result}`);
        
    }
}

truncateString("Hellow worldoufnh shjiydldn", 8)


// #27 Write a program that show consecutive number between argument range


const getConsecutiveNumber = (a, b)=> {
    if(a > b) return false
    let result=[]
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    console.log('Consecutive numbers are:', result);
    
}

getConsecutiveNumber(0, 6)


// #28 Write a program that show consecutive number between argument range with recursion

const getConsecutiveNumberRecursion = (a, b, result = [])=> {
    if(a <= b) {
        result.push(a)
        return getConsecutiveNumberRecursion(a+1, b, result)
    }
    // return result
    console.log('Consecutive numbers are:', result);
    
}
getConsecutiveNumberRecursion(4, 23)

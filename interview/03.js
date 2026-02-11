
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

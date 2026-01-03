
const arr = ["Super", "Bat", "Spider", "Hunk"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(`Super hero is ${element}`);
}

for (let i = 0; i < 5; i++) {
    // console.log(`Outer loop value is ${i}`);
    for (let j = 0; j < 5; j++) {
        // console.log(`Inner loop value is ${j} and Outer loop value is ${i}`);
    }
}


for (let i = 0; i < 5; i++) {
    if(i === 2) {
        // console.log("Detected 2");
        break
    }
    // console.log(`Value is ${i}`);
}


for (let i = 0; i < 10; i++) {
    if(i === 4) {
        console.log("Detected 4");
        continue
    }
    console.log(`Value is ${i}`);
}
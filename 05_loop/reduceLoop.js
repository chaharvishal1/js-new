const numArr = [1, 2, 3, 4, 5];

// const sum = numArr.reduce( function(acc, currVal) {
//     return acc + currVal;
// }, 0)

const sum = numArr.reduce( (acc, currVal) => acc + currVal, 0);

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalCose = shoppingCart.reduce( (acc, currVal) => acc + currVal.price, 0);

console.log(totalCose);
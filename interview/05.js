// # 41 WAP for currency converter and base currency is USD

const currencyConverter = (amt, fc, tc) => {
    const exchangeRates = {
        'USD': 1,
        'INR': 82.5,
        'EUR': 0.85,
        'GBP': 0.75,
        'JPY': 110
    }

    if (!exchangeRates[fc] || !exchangeRates[tc]) {
        console.log('Invalid currency code');
        return;
    }

    // const convertedAmt = (amt / exchangeRates[fc]) * exchangeRates[tc]
    // console.log(`${amt} ${fc} is equal to ${convertedAmt.toFixed(2)} ${tc}`);

    let amtInUSD = 0;
    if(fc !== 'USD'){
        amt = amt / exchangeRates[fc]
    }
    else {
        amtInUSD = amt;
    }

    let convertedAmt = 0;
    if(tc !== 'USD'){
        convertedAmt = amt * exchangeRates[tc]
    }
    else {
        convertedAmt = amtInUSD
    }
    console.log(`${amt} ${fc} is equal to ${convertedAmt.toFixed(2)} ${tc}`);
}

currencyConverter(1.21, 'USD', 'INR')

// #42 WAP for validate credit card number using Luhn algorithm

// 1. reverse,
// 2. double of second digit
// 3. minus 9 if double is greater than 9
// 4. sum all the digits
// 5. if sum is divisible by 10 then valid else invalid



const validCreditCardNumber= (val) => {
    const cleanVal = val.replace(/\s/g, '');
    let sum = '';
    for(let i = cleanVal.length - 1; i >= 0; i--){
        sum = sum + cleanVal[i];
    }

    const doubleDigit = sum.split('').map((digit, index) => {
        if(index % 2 !== 0){
            digit = digit * 2;
            if(digit > 9) {
                digit = digit - 9;
            }
            else {
                digit = digit;
            }
        }
        return digit;
    }).reduce((acc, curr) => acc + Number(curr), 0);
    console.log(doubleDigit);
    if(doubleDigit % 10 === 0){
        console.log('Valid credit card number');
    }
    else {
        console.log('Invalid credit card number');
    }
    
}

validCreditCardNumber('4539 1488 0343 6467')




// #43 WAP for fizz buzz array concept

const fizzBuzz = (sNm, eNm) => {
    const arr = [];
    for(let i = sNm; i <= eNm; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('FizzBuzz');
        }
        else if(i % 3 === 0){
            arr.push('Fizz');
        }
        else if(i % 5 === 0){
            arr.push('Buzz');
        }
        else {
            arr.push(i);
        }
    }
    console.log(arr);
}

fizzBuzz(1, 15)


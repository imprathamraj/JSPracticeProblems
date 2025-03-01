const prompt = require("prompt-sync")();

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(n) {
    let originalNum = n 
    let reversed = 0;

    while (n > 0) {
        let digit = n % 10;      
        reversed = reversed * 10 + digit; 
        n = Math.floor(n / 10);
    }

    return originalNum === reversed; 
}

// Taking input from user
let num =process.argv[2];

if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
    let palindrome = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindrome}.`);

    if (isPrime(palindrome)) {
        console.log(`Palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`Palindrome ${palindrome} is not a prime number.`);
    }
} else {
    console.log(`${num} is not a prime number.`);
}

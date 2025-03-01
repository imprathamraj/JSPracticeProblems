function isPalindrome(num) {
    let originalNum = num;  
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;      
        reversed = reversed * 10 + digit; 
        num = Math.floor(num / 10);
    }

    return originalNum === reversed;  
}

let num = 124;
if (isPalindrome(num)) {
    console.log("true");
} else {
    console.log("false");
}

const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Enter a number greater than 1.");
} else {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${num} is ${isPrime ? "a Prime" : "not a Prime"} number.`);
}

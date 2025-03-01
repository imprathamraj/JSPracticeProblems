const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
    console.log("Enter a non-negative integer.");
} else {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    console.log(`${num}! = ${fact}`);
}

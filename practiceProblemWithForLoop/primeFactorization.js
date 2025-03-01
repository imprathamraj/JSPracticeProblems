const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Enter an integer greater than 1.");
} else {
    console.log(`Prime factors of ${num}:`);
    
    while (num % 2 === 0) {
        console.log(2);
        num /= 2;
    }

    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            console.log(i);
            num /= i;
        }
    }

    if (num > 1) console.log(num);
}

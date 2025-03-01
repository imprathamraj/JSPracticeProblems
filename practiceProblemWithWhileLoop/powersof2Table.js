const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a non-negative integer.");
} else {
    console.log(`Powers of 2 up to 2^${n} (max 256):`);
    let power = 1;
    for (let i = 0; i <= n && power <= 256; i++) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
    }
}

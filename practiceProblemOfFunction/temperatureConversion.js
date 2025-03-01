const prompt = require("prompt-sync")();

let choice = prompt("Choose conversion: 1 for °C to °F, 2 for °F to °C: ");
let temp = parseFloat(prompt("Enter temperature: "));

switch (choice) {
    case "1":
        if (temp >= 0 && temp <= 100) {
            let degF = (temp * 9/5) + 32;
            console.log(`Temperature in Fahrenheit: ${degF}°F`);
        } else {
            console.log("Temperature out of range (0°C - 100°C).");
        }
        break;
    case "2":
        if (temp >= 32 && temp <= 212) {
            let degC = (temp - 32) * 5/9;
            console.log(`Temperature in Celsius: ${degC}°C`);
        } else {
            console.log("Temperature out of range (32°F - 212°F).");
        }
        break;
    default:
        console.log("Invalid choice.");
}

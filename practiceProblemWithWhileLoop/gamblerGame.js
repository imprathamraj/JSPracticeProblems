let money = 100, goal = 200, bets = 0, wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5; // 50% chance to win

    if (betResult) {
        money++;
        wins++;
    } else {
        money--;
    }

    console.log(`Bet ${bets}: ${betResult ? "Win" : "Lose"} (Money: Rs ${money})`);
}

console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);

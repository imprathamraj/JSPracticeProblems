let numbers=[];
let sum=0;
for(let i=0;i<5;i++){
    let number=Math.floor(Math.random()*99)+10;
    numbers.push(number);
    sum+=number;
}

let average=sum/numbers.length;

console.log("sum", sum,  " Average ", average)
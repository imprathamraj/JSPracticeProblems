let numbers=[]
for(let i=0;i<5;i++){
    let number=Math.floor(Math.random()*999)+100
    numbers.push(number);
}
let minimum=numbers[0];
let maximum=numbers[0];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]<minimum){
        minimum=numbers[i];
    }
    if(numbers[i]>maximum){
        maximum=numbers[i];
    }
}
console.log(numbers)
console.log("minmum number",minimum);
console.log("maximum number",maximum);

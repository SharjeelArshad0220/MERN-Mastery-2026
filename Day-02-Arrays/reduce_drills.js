let prices=[200, 450, 300, 50];
let total=prices.reduce((sum,price)=>{
    return sum+price;
})
console.log(total);

let chars=["M", "E", "R", "N"];
let word=chars.reduce((box,char)=>{
    return box+char;
})
console.log(word);
let numbers=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens=numbers.filter(even=>{
    return even%2==0;
})
console.log(evens);

let names=["Ali", "Sharjeel", "Saad", "Humayun", "Asad"];
let vips=names.filter(vip=>{
    return vip.length>=7;
})
console.log(vips);
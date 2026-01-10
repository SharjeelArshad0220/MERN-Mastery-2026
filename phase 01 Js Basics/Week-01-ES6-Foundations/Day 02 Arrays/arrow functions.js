// const calculateTotal=(price,isMember)=>{
//     if(isMember){
//         price=price-((price/100)*20);
//         return price;
//     }
//     else if(!isMember){
//         return price;
//     }
// }
// console.log(calculateTotal(1000,true));
// // we can also take input from user and pass those variables as parameters 
// const calculateTotal=(price,isMember)=>{
// if(isMember){
//     price=price*0.80;//20% discount subtracted
//     return price;
// }
// return price;
// }
// console.log(calculateTotal(1200,false));
// ===================================
// const calculateTotal=(price,isMember)=>{
//     if(isMember){return price=price*0.80}
//     return price;
// }
// console.log(calculateTotal(1500,false));
// =====================
// const calculateTotal=(price,isMember)=>{
//     if(isMember){return price*0.80;}
//     return price;
// }
// console.log(calculateTotal(1300,true));

// =======================================

const checkPass=(marks)=> marks>50 ? "passed" : "fail";
console.log(checkPass(100));
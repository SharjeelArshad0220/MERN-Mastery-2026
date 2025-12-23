// const students = [{ name: "Ali", score: 90 }, { name: "Zara", score: 45 }, { name: "Bilal", score: 72 }, { name: "Sara", score: 33 }];
// const clean=students.filter(student=> student.score >= 50).map(student=> `<h1>${student.name} : ${student.score}</h1>`)
// console.log(clean)
// const eidi = [500, 1000, 200];
// const totalEidi=eidi.reduce((t,i)=>t+i);
// console.log(totalEidi);
// const cart = [
//   { item: "Burger", price: 500 },
//   { item: "Fries", price: 200 },
//   { item: "Coke", price: 100 }
// ];
// const total=cart.reduce((t_price,product)=>{return t_price+product.price},0);
//  console.log(total);
// const userProfile = {
//   name: "Sharjeel",
//   age: 20,
//   city: "Lahore",
//   skills: ["HTML", "CSS"]
// };
// const update=(profile_data,new_language)=>{
//     const {name,city,skills}=profile_data;
//     const newSkills=[...skills,new_language];
//     return {
//         name,
//         city,
//         isStudent:true,
//         skills:newSkills
//     }
// }
// console.log(update(userProfile,"python"));

// const order = {
//   id: 999,
//   customer: "Sharjeel",
//   food: ["Pizza", "Coke"],
//   price: 1500,
//   status: "Cooking",
//   estimatedTime: "30 mins"
// };

// const rainDelay=(order_object)=>{
//     return {
//         ...order_object,status:"delayed",estimatedTime:"60 mins",rainSurcharge:200
// }}
// console.log(rainDelay(order));
// const ride = {
//   rideId: "LEA-9090",
//   driver: "Safdar",
//   car: "Cultus",
//   rating: 4.8,
//   status: "Arriving",
//   location: "Kalma Chowk"
// };
// const startRide=(ride_object)=>{return {...ride_object,status:"In Progress",location:"Ferozepur Road",pickupTime: "8:15 PM"}}

const captain = {
  name: "Safdar",
  totalEarnings: 0,
  rides: [
    { id: 1, fare: 500, status: "Completed" },
    { id: 2, fare: 300, status: "Cancelled" },
    { id: 3, fare: 800, status: "Completed" },
    { id: 4, fare: 200, status: "Completed" }
  ]
};

const day_report=(driver)=>{
   const new_list= driver.rides.filter(ride=>ride.status=="Completed").map(ride=>ride.fare+20);
    const grand_total=new_list.reduce((total,fare)=>total+fare,0);
    return {
        ...driver,
        totalEarnings:grand_total,
        dailyStatus: "Closed"
    }
}
console.log(day_report(captain));
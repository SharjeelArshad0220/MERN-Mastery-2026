//Day 08 for....of and forEach practice 
const cart = [
  { item: "Biryani", price: 300, qty: 2 },
  { item: "Cold Drink", price: 100, qty: 3 },
  { item: "Raita", price: 50, qty: 1 }
];

let grandTotal = 0;

console.log("----Bill----");

cart.forEach(item => {
    // Logic: Purane total mein naya add karo
    grandTotal += (item.price * item.qty);
    
    // Receipt Line Print karo
    console.log(`Item: ${item.item} | Cost: ${item.price * item.qty}`);
});

console.log("----------------");
console.log("Grand Total:", grandTotal);


//.sort() practice 
const missions = [
  { id: 1, title: "Rescue Hostages", dangerLevel: 80, status: "Pending" },
  { id: 2, title: "Defuse Bomb", dangerLevel: 100, status: "Critical" },
  { id: 3, title: "Clean Base", dangerLevel: 10, status: "Done" },
  { id: 4, title: "Spy on Enemy", dangerLevel: 50, status: "Pending" }
];

// MISSION A: Find the "Critical" mission
// Yahan .find() ka code likho jo mission ko dhoond kar 'criticalMission' mein save kare
const criticalMission =missions.find((mission) => mission.status === "Critical");

// MISSION B: Sort by Danger Level (High to Low)
// Yahan .sort() ka code likho jo 'missions' array ko khatarnaak se asaan tertib de
const sortedMissions = [...missions].sort((a,b)=>b.dangerLevel-a.dangerLevel);
// Print Results
console.log("Critical Mission:", criticalMission);
console.log("Sorted Missions:",sortedMissions);

//Day 09 .map()
const prices = [100, 200, 300, 400];
const discountedPrices=prices.map((item) => item=item*0.5);
console.log(`Discounted Prices:${discountedPrices}`);
console.log(`Original prices:${prices}`);

const users = [
  { id: 1, name: "Agent Ali", role: "Sniper" },
  { id: 2, name: "Agent Sara", role: "Hacker" },
  { id: 3, name: "Agent Bilal", role: "Driver" }
];
const nameList=users.map((user) =>`${user.name}\n`);
console.log(`users are\n${nameList}`);

const activeUsers = users.map((user) =>({...user,isActive: true}));
console.log(`Active Users are`,activeUsers);

const inventory = [
  { id: 1, name: "Gaming Mouse", price: 25, category: "Electronics" },
  { id: 2, name: "Mechanical Keyboard", price: 60, category: "Electronics" },
  { id: 3, name: "Monitor", price: 150, category: "Electronics" },
  { id: 4, name: "Mouse Pad", price: 10, category: "Accessories" }
];
const pakistaniInventory=inventory.map((item) => ({
  ...item,
price :item.price*278,
  name:item.name.toUpperCase(),
  isSale:true
})); 
console.log(`pakistani inventory`,pakistaniInventory);

//Day 10 .filters()
const numbers=[500, 1500, 300, 4000, 2500, 100];
const cheapPrices=numbers.filter((item) => item<1000);
console.log(`Cheap Prices Available are:`,cheapPrices);

const agents = [
  { name: "Ali", status: "Active" },
  { name: "Sara", status: "Inactive" },
  { name: "Bilal", status: "Active" }
];
const activeAgents=agents.filter((item) => item.status==="Active");
console.log(`Active agents are :\n`,activeAgents);

const emails = [
  { from: "boss@company.com", subject: "Meeting Update", isSpam: false, isStarred: true },
  { from: "offer@scam.com", subject: "You won 1 Million!", isSpam: true, isStarred: false },
  { from: "ali@friends.com", subject: "Dinner tonight?", isSpam: false, isStarred: false },
  { from: "netflix@updates.com", subject: "New Show Alert", isSpam: false, isStarred: false },
  { from: "prince@nigeria.com", subject: "Business Proposal", isSpam: true, isStarred: false }
];
const inboxEmails=emails.filter((email) => !email.isSpam);
const starredEmails=emails.filter((email) => email.isStarred);
console.log(`inbox emails are`,inboxEmails);
console.log(`starred emails are`, starredEmails);

//Day 11 chaining methods
const students = [
  { name: "Ali", marks: 40 },
  { name: "Sara", marks: 80 },
  { name: "Bilal", marks: 90 },
  { name: "Zara", marks: 30 }
];
const passedStudents =students.filter((student) => student.marks>=50).map((student) => ({
  ...student,
  name: `${student.name} - passed`
}));

console.log(`passed students are`, passedStudents);

const products = [
  { name: "Laptop", price: 1000, available: true },
  { name: "Mouse", price: 50, available: true },
  { name: "Tablet", price: 500, available: false },
  { name: "Phone", price: 1200, available: true }
];
const premiumProducts=
products.filter((product)=> product.available && product.price>=1000).map((item) => `${item.name} is a premium product ($${item.price})`);
console.log(premiumProducts);

const employees = [
  { name: "Ali", salary: 50000, rating: 3.5 }, // Fail
  { name: "Sara", salary: 80000, rating: 4.8 }, // Pass + Bonus
  { name: "Bilal", salary: 60000, rating: 4.2 }, // Pass + Bonus
  { name: "Zara", salary: 45000, rating: 2.0 }  // Fail
];
const bonusWinners=employees.filter((employee) => employee.rating>=4).map((object) => ({name:object.name,salary:object.salary*1.10}));
console.log(bonusWinners);

const cartNew = [
  { item: "Biryani", price: 300, qty: 2 }, // 600
  { item: "Cold Drink", price: 100, qty: 3 }, // 300
  { item: "Raita", price: 50, qty: 1 } // 50
];
const Total=cartNew.reduce((total,object)=>total=total+(object.price* object.qty),0);
console.log(Total);

//Project work starts here 
let expenses=[];
const addExpense=(desc, amount)=>{expenses.push({id:Date.now()+Math.random(),description :desc,
amount: amount
 });
     console.log(`Expense added:${desc}`);                            }

const deleteExpense=(id)=>{expenses =expenses.filter((expense) =>expense.id!==id);
     console.log(`Expense deleted`);}

function showSummary()
{
  const summaryExpenses=expenses.map((expense) =>`ID:${expense.id}|${expense.description} - ${expense.amount}PKR\n`).join("");
  const totalExpenses=expenses.reduce((acc,obj)=>
    acc+obj.amount
    ,0);
  console.log(summaryExpenses+"----------------\n",totalExpenses);
}

// 1. Kuch kharchay add karo
addExpense("Chaye", 50);
addExpense("Petrol", 500);
addExpense("Burger", 300);

// 2. Summary dekho (Total 850 hona chahiye)
console.log("\n--- Initial List ---");
showSummary();

// 3. Koi ek item delete karo (Manually ID copy mat karna, bas logic check karna)
// Filhal test ke liye array ke pehle item ki ID utha lena code mein
deleteExpense(expenses[0].id);

// 4. Dobara Summary dekho (Kam hona chahiye)
console.log("\n--- After Deletion ---");
showSummary();


//Advance practice problems Check karo agar acc[party] pehle se hai toh +1 karo, agar nahi hai toh =1 set karo.
const votes = ["PTI", "PMLN", "PTI", "PPP", "PTI", "PMLN"];
//const votes = ["PTI", "PMLN", "PTI"];
const result = votes.reduce((acc, party) => {
    if (acc[party]) {
        acc[party] = acc[party] + 1; 
    } 
    else {
        acc[party] = 1;
    }
    return acc;
}, {});
console.log(result);
const list=["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];
const numberOfFruits=list.reduce((acc,fruit)=>{
  if (acc[fruit]) {
    console.log(`when condition is true the acc[fruit]:${acc[fruit]}\nparty is:${fruit}`);
    acc[fruit]=acc[fruit]+1;
  } else {
     acc[fruit]=1;
  }
  return acc;
},{});
console.log(numberOfFruits);
//hardcore drills
//practice of reduce
const studentsForReduce = [
  { name: "Ali", marks: 40 },
  { name: "Sara", marks: 80 },
  { name: "Zara", marks: 30 }
];
const newObject=studentsForReduce.reduce((object,term)=>
  {
    const key=term.marks>=50?"pass":"fail";
    if(!object[key]){
      object[key]=[];
      }
    object[key].push(term);
    return object;
  }
,{});
console.log(newObject);

//3 tier leetcode scenarios
//first task
const books = [
  { title: "Harry Potter", genre: "Fantasy" },
  { title: "Steve Jobs", genre: "Biography" },
  { title: "The Hobbit", genre: "Fantasy" },
  { title: "Elon Musk", genre: "Biography" }
];
//target is to get output structured wrt genre
//output:{Fantasy: [ {title: "Harry Potter"...}, {title: "The Hobbit"...} ],Biography: [ {title: "Steve Jobs"...}, {title: "Elon Musk"...} ]}

const genreObjects=books.reduce((acc,item)=>{
  const key=item.genre;
  if(!acc[key])
    {
      acc[key]=[];
    }
  acc[key].push(item);
  return acc;
},{});
console.log(genreObjects);
//second task
const people = [
  { name: "Ali", age: 17 },
  { name: "Simran", age: 22 },
  { name: "Faizan", age: 15 },
  { name: "Kamran", age: 30 }
];
//separate peoples based on their eligibility to vote
//output expected :{Eligible: [ {name: "Simran"...}, {name: "Kamran"...} ],NotEligible: [ {name: "Ali"...}, {name: "Faizan"...} ]}
const peopleEligibilty=people.reduce((acc,item)=>
  {
    const key=item.age>=18?"Eligible":"notEligible";//created key on which we will base our separation
    if (!acc[key]) {
       acc[key]=[];//created an array for a key which previously is not available 
    }
    acc[key].push(item);//pushed itrm after making sure the key has an array value
    return acc;//returned accumulator for next item sorting 
  }                           ,{}//set base value as object because we want get an object as return
);
//third task
//count the number of occurrences of elements 
const fruits = ["Apple", "Banana", "Apple", "Orange", "Apple", "Banana"];
//expected output { Apple: 3, Banana: 2, Orange: 1 }
const countObject=fruits.reduce((acc, item)=>{
  acc[item]=(acc[item]||0)+1
  return acc;
},{});
console.log(countObject);
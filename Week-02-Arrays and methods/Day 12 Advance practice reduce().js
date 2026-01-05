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
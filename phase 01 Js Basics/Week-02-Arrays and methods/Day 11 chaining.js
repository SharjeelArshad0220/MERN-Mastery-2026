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
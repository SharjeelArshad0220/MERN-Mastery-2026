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
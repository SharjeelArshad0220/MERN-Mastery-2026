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
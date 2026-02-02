// const karachiRestaurants = [
//   { name: "Burns Road Food Street", rating: 4.8, speciality: "Biryani" },
//   { name: "Kaybees", rating: 4.5, speciality: "BBQ" }
// ];
// console.time();
// for (let index = 0; index <=1000; index++) {
//     // console.table(karachiRestaurants)
//     // console.log(index);
// }
// console.timeEnd();
// // Like organizing files in folders
// console.group('User Registration Flow');
// console.log('1. Form submitted');
// console.log('2. Validating email...');
// console.log('3. Checking username availability...');
// console.groupEnd()
// // 🐛 BUGGY FUNCTION - Can you spot the issue?
// function calculateTotalWithTax(price, quantity, taxPercentage) {
//   const subtotal = price * quantity;
//   const taxAmount = subtotal * taxPercentage; // Line 3 - SUSPICIOUS!
//   const total = subtotal + taxAmount;
//   return total;
// }

// // Test case: Book costs Rs.500, buying 2 copies, 17% GST
// console.log(calculateTotalWithTax(500, 2, 17)); 
// // Expected: 500*2 = 1000 + 170 tax = 1170
// // Actual: 500*2 = 1000 + 17000 = 18000 😱
// function calculateTotalWithTax(price, quantity, taxPercentage) {
//   const subtotal = price * quantity;
//   // TODO: Click on line number 3 in Sources tab
//   const taxAmount = subtotal * (taxPercentage / 100);
//   const total = subtotal + taxAmount;
//   return total;
// }
// calculateTotalWithTax(500, 2, 17)
// TODO: Open Network tab before running this
// async function getWeather(city) {
//   // Simulating API call with setTimeout
//   console.time(`fetchWeather_${city}`);
//   console.log(city);
//   setTimeout(() => {
//     console.timeEnd(`fetchWeather_${city}`);
//     return { city, temp: 28, condition: "Sunny" };
//   }, Math.random() * 2000); // Random delay 0-2 seconds
// }
// // Run these one by one and watch Network tab:
// getWeather("Karachi");
// getWeather("Lahore");
// getWeather("Islamabad");

// // Observe in Network tab:
// // 1. Each "request" appears
// // 2. Different completion times
// // 3. No actual network call? That's okay - same principles!
// async function testAPIMonitoring() {
//   // TODO: Before running, open Network tab and check "Preserve log"
  
//   const responses = await Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/posts/2'),
//     fetch('https://jsonplaceholder.typicode.com/posts/3')
//   ]);
  
//   // In Network tab, you'll see:
//   // 1. Three separate requests
//   // 2. Status codes (should be 200)
//   // 3. Response sizes
//   // 4. Timing information
// }
// testAPIMonitoring();

// function calculateCartTotal(cartItems) {
//   let total = 0;
  
//   // TODO: Add debugger here - when should it pause?
//   // Answer: Every time function runs
//   debugger;
  
//   cartItems.forEach(item => {
//     total += item.price * item.quantity;
    
//     // TODO: Add conditional debugger - when should it pause?
//     // Answer: Only for expensive items
//     if (item.price > 10000) {
//       debugger; // Pause only for items > Rs.10,000
//     }
//   });
  
//   return total;
// }

// // Test with different carts
// const smallCart = [
//   { name: "Book", price: 500, quantity: 2 },
//   { name: "Pen", price: 50, quantity: 5 }
// ];

// const bigCart = [
//   { name: "Laptop", price: 150000, quantity: 1 },
//   { name: "Mouse", price: 2000, quantity: 2 }
// ];

// console.log(calculateCartTotal(smallCart))
// console.log(calculateCartTotal(bigCart))


// ============================================================
// THREE TIER TASKS
// ============================================================
// TASK 01 
// ======================================
// // BUGGY CODE - Instructor demonstrates debugging
// function calculateStudentGrade(marks) {
//   let total = 0;

//   for (let i = 0; i < marks.length; i++) { // Bug: <= instead of <
//     total += marks[i];
//   }

//   const average = total / marks.length;

//   if (average >= 80) return "A";
//   if (average >= 70) return "B";
//   if (average >= 60) return "C";
//   return "Fail";
// }

//   // Instructor will:
//   // 1. Set breakpoint at line 3
//   // 2. Run with marks = [85, 90, 78]
//   // 3. Step through each iteration
//   // 4. Identify the bug

//   const marks=[85,90,78];
//   calculateStudentGrade(marks);

// ==========================================

// TASK 02 

// ==========================================

// async function processOrder(orderId) {
//   // TODO: Work together to debug this
//   const order = await fetchOrder(orderId);

//   // Set breakpoint here
//   const items = order.items;

//   let total = 0;
//   items.forEach(item => {
//     // TODO: What's wrong here?
//     total += item.price; // Should be +=
//   });

//   // TODO: Add GST calculation
//   const totalWithTax = total + total * 0.17; // Missing tax calculation

//   return totalWithTax;
// }

// // Helper function (simplified)
// async function fetchOrder(id) {
//   return {
//     items: [
//       { name: "Biryani", price: 450 },
//       { name: "Karahi", price: 1200 }
//     ]
//   };
// }

// console.log(processOrder(123));
// TASK 03
// ==================================
// // 🐛 MULTIPLE BUGS - Find and fix using DevTools
// function calculateRideFare(distanceKm, timeMinutes, vehicleType) {
//   // Base rates
//   const rates = {
//     'bike': { perKm: 20, perMinute: 2, base: 50 },
//     'car': { perKm: 50, perMinute: 3, base: 100 },
//     'auto': { perKm: 30, perMinute: 2.5, base: 70 }
//   };

//   // TODO: Debug issue 1 - vehicleType not found
//   const rate = rates[vehicleType];
//   if (!rate) {
//     return 0;
//   }

//   // TODO: Debug issue 2 - Incorrect calculation
//   const distanceCharge = distanceKm * rate.perKm;
//   const timeCharge = timeMinutes * rate.perMinute;
//   let total = distanceCharge + timeCharge + rate.base; // Missing base fare!

//   // TODO: Debug issue 3 - Peak hours surcharge
//   const isPeakHour = new Date().getHours() >= 17 && new Date().getHours() <= 20;
//   if (isPeakHour) {
//     total += total *0.25; // 25% surge  
//   }

//   return Math.round(total);
// }

// // Test cases to verify:
// console.log(calculateRideFare(5, 15, 'car')); // Should be ~Rs.415
// console.log(calculateRideFare(2, 10, 'bike')); // Should be ~Rs.110
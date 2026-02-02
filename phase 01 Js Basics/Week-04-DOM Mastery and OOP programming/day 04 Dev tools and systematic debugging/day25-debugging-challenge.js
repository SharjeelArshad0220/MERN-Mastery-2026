/*
=== DEBUGGING LOG ===
Date: _________
Developer: _________

FUNCTION 1: getLastThreeItems
--------------------------------
BUG TYPE: Off-by-one error
HOW FOUND: 
1. Set breakpoint at line 2
2. Tested with array [1,2,3,4,5]
3. Hovered over arr.length (5)
4. Calculated arr.slice(5-4) = slice(1) = [2,3,4,5]
5. Realized should be -3 not -4
TIME TO FIX: 3 minutes
FIX APPLIED: Changed -4 to -3
--------------------------------
*/

// ===== FUNCTION SKELETONS =====
// Complete these function implementations

// 1. ARRAY SLICE ERROR
// function getLastThreeItems(arr) {
//   // TODO: Fix the off-by-one error
//   return arr.slice(arr.length - 3);
// }
// console.log(getLastThreeItems([1,2,3,4,5]));


// // 2. COMPARISON LOGIC ERROR
// function isEligibleForDL(age) {
//   // TODO: Fix comparison for driving license eligibility
//   // Age >= 18 for cars, >= 16 for motorcycles
//   let result=""
//   if (age>=18) {
//     result ="eligible for cars"
//   }
//   if (age>=16) {
//     result=result?result+" and "+"eligible for motorcycles":"eligible for motorcycles";
//   }
//   return result;
// }
// console.log(isEligibleForDL(25));


// 3. ASYNC/PROMISE HANDLING
// async function getUserProfile(userId) {
//   // TODO: Fix missing await
//   try {
//     const response =await fetch(`/api/users/${userId}`);
//     if (!response.ok) {
//       throw new Error("server did'nt respond ");

//     }
//     const data=await response.json();
//     return data;
//   } catch (error) {
//     console.log("cant get response error",error,"arrived.")
//   }
// }
// console.log(getUserProfile(123));

// // 4. LOOP SCOPE ISSUE
// function processStudents(students) {
//   // TODO: Fix var/let scope issue
//   for (let i = 0; i < students.length; i++) {
//     setTimeout(() => {
//       console.log(`Processing: ${students[i].name}`);
//     }, 3000);
//   }
// }
// const studentList = [
//   { id: 1, name: "Alice", grade: "A" },
//   { id: 2, name: "Bob", grade: "B" },
//   { id: 3, name: "Charlie", grade: "C" },
//   { id: 4, name: "Diana", grade: "B" }
// ];

// // Test the function
// processStudents(studentList);


// // 5. EVENT LISTENER MEMORY LEAK
// function setupSearch() {
//   const searchInput = document.getElementById('search');
//   // TODO: Fix duplicate event listeners
//   searchInput.removeEventListener('input', handleSearch);
//   searchInput.addEventListener('input', handleSearch);
// }

// // 6. NETWORK REQUEST ERROR HANDLING
// async function fetchProductData(productId) {
//   // TODO: Add proper error handling
//   try {
//     const response = await fetch(`/api/products/${productId}`);
//     if (!response.ok) {
//       throw new Error("Server thrown an error.");
//     }
//     const data = await response.json();
//      return data;
//   } catch (error) {
//     console.log(`yar error aa gaya yeh wala ${error}`)
//   }
//  ;
// }

// // 7. STATE MANAGEMENT BUG
// let cartItems = [];
// function addToCart(product) {
//   // TODO: Fix mutation issue
//   cartItems=[...cartItems,product];
//   return cartItems;
// }
// addToCart("hay");
// addToCart("hby");
// addToCart("hcy");
// console.log(cartItems);


// //8. DOM MANIPULATION ERROR
// function updatePriceDisplay(price) {
//   // TODO: Fix null element access
//   const element = document.getElementById('priceDisplay');
//   if (element) {
//     element.innerText = `Rs. ${price}`
//   }
//   else {
//     const element = document.createElement("div");
//     element.id = 'priceDisplay';
//     element.innerText = `Rs. ${price}`;
//     document.body.appendChild(element);
//   }
// }
// updatePriceDisplay(567)
// updatePriceDisplay(568)
// updatePriceDisplay(569)

// // 9. PERFORMANCE ISSUE
// function findDuplicateNames(users) {
//   // TODO: Optimize O(n²) to O(n)
//   const duplicates = [];
//   const seen = {}; // Use an object instead of an array
//   for (let i = 0; i < users.length; i++) {
//     const name = users[i].name;

//     if (seen[name]) {
//       // If the name exists in our object and we haven't flagged it as a duplicate yet
//       if (seen[name] === 1) {
//         duplicates.push(name);
//         seen[name] = 2; // Mark as "already added to duplicates"
//       }
//     } else {
//       seen[name] = 1; // Mark as "seen once"
//     }
//   }

//   return duplicates;
// }
// const testUsers = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Alice" }, // Duplicate
//   { id: 4, name: "Charlie" },
//   { id: 5, name: "Charlie" } // Duplicate
// ];

// console.log(findDuplicateNames(testUsers));
// // Your current function outputs: ["Alice", "Alice", "Charlie", "Charlie"]

// // // 10. LOCALSTORAGE SERIALIZATION
// function saveUserPreferences(settings) {
//   // TODO: Fix JSON serialization
// try {
//   const sett=  JSON.stringify(settings)
//   localStorage.setItem('userPrefs', sett);
// } catch (error) {
//   console.error("cant add into this .")
// }
// }
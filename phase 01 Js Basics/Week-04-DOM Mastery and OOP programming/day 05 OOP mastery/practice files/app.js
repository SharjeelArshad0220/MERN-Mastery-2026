// // ✅ DRY (Don't Repeat Yourself) Principle
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }

//   calculateGST() {
//     return this.price * 0.17;
//   }
// }

// // Create thousands of products easily
// const product1 = new Product("Samsung Galaxy", 150000, "Electronics");
// const product2 = new Product("Java Rice", 2000, "Groceries");

// ================================================
// first class i have ever written in javascript 
// ================================================

// class Restaurant {
//     // Constructor = Foundation laying ceremony
//     constructor(name, cuisine, location) {
//         // "this" = The specific restaurant being built
//         this.name = name;
//         this.cuisine = cuisine; // Pakistani, Chinese, BBQ
//         this.location = location; // Lahore, Karachi, Islamabad
//         this.isOpen = false;
//         this.rating = 0;
//         this.ordered = false;
//         this.orderedDishes = [];
//     }

//     // Methods = Restaurant operations
//     open() {
//         this.isOpen = true;
//         console.log(`${this.name} is now open! 🎉`);
//     }

//     close() {
//         this.isOpen = false;
//         console.log(`${this.name} is closed for today. 🚪`);
//     }

//     rate(stars) {
//         this.rating = stars;
//         console.log(`${this.name} rated ${stars} ⭐`);
//     }
//     menu(cuisine) {
//         console.log(this.cuisine);
//     }
//     order(dish) {
//         if (this.ordered && this.orderedDishes.includes(dish)) {
//             console.log("Already Ordered " + dish);
//         }
//         else {
//             this.ordered = true;
//             this.orderedDishes.push(dish);
//             console.log(`Order confirmed ${dish} on the way.`);
//         }
//     }
//     cancelDish(dishCancelled) {
//         if (this.orderedDishes.includes(dishCancelled)) {
//             this.orderedDishes = this.orderedDishes.filter(dish => dish !== dishCancelled);
//             console.log(`Order of dish ${dishCancelled} Cancelled.`);
//             if (this.orderedDishes.length===0) {
//                 this.ordered=false;
//             }
//         }
//         else {
//             console.log("The dish were never ordered.");
//         }
//     }
// }



// // 1. Create a new instance (The "Foundation Ceremony")
// const myRest = new Restaurant("Kolachi", "Pakistani", "Karachi");

// console.log("--- Initial State ---");
// console.log(myRest);

// // 2. Test Open/Close
// myRest.open();

// // 3. Test the Menu
// console.log("\n--- Checking Menu ---");
// myRest.menu();

// // 4. Test Ordering Logic
// console.log("\n--- Testing Orders ---");
// myRest.order("Chicken Karahi"); // Should confirm
// myRest.order("Chicken Karahi"); // Should say "Already Ordered"
// myRest.order("Seekh Kabab");    // Should confirm

// // 5. Test Cancellation Logic
// console.log("\n--- Testing Cancellations ---");
// myRest.cancelDish("Seekh Kabab");    // Should cancel
// myRest.cancelDish("Gulab Jamun");    // Should say "never ordered"

// // 6. Final State
// console.log("\n--- Final Rating and State ---");
// myRest.rate(5);
// myRest.close();
// console.log(myRest);


// ==================================================================

// ===================================================================
// class user {
//     constructor(userName,userBio,userSkillDescription,userStudyPreferences) {
//         this.userName=userName;
//         this.userBio=userBio;
//         this.userSkillDescription=userSkillDescription;
//         this.userStudyPreferences=userStudyPreferences;
//     }
//     welcome(){
//         console.log(`Welcome to our application ${this.userName}.`);
//     }
//     confirmationMessage(){
//         console.log(`So ${this.userName} you want to learn ${this.userSkillDescription} with these preferences:\n${this.userStudyPreferences} \nGave us this info about you:\n${this.userBio}\n Lets get excited for stunning journey of mastering the skill you want with flawless experience at skill master \n See you at the journey Master😉`);
//     }
// }
// const nida=new user("nida","bio","skill","prefernces");
// nida.welcome();
// nida.confirmationMessage();

// ==================================================================

// ===================================================================

// class car {
//     constructor(brand,modelName,model,condition,fuel,fuelCapacity,avg,color){
//         this.avg=avg;
//         this.brand=brand;
//         this.condition=condition;
//         this.fuel=fuel;
//         this.model=model;
//         this.color=color;
//         this.modelName=modelName;
//         this.fuelCapacity=fuelCapacity;
//     }
//     checkValue(){
//         if ((this.condition>=8 && this.avg >=15) && (this.color==="black" || this.model==="new")) {
//             console.log("This is a nice car.\nIt can be sold at a good price.")
//         }
//         else if(this.condition>=8 && this.avg >=15 && this.model==='new'){
//             console.log('This car can give you profit.')
//         }
//         else if(this.condition>=8 && this.avg >=15){
//             console.log("This car can be sold but not sure about profit.")
//         }
//         else{
//             console.log("This car is only remained for scrap.")
//         }
//     }
//     drive(distance){
//         if (this.fuel>0) {
//             this.fuel -= distance*this.avg;
//             if (this.fuel<15) {
//                 console.warn("Fuel is about to end go and fill the fuel.");
//             }
//             console.log(`${this.brand} ${this.modelName} Drove ${distance} and remaining fuel is ${this.fuel}.`)
//         }
//         else{
//             console.log("Go and fill the fuel tank first.")
//         }
//     }
//     fillTank(amountOfFuel){
//         if((this.fuel<this.fuelCapacity)&&((this.fuel+amountOfFuel)<this.fuelCapacity)) {
//             this.fuel+=amountOfFuel;
//             console.log("the amount of "+amountOfFuel+" was added to you fuel tank.")
//         }
//         else if(!((this.fuel+amountOfFuel)<this.fuelCapacity)){
//             console.log("The amount"+amountOfFuel+" is out of fuel capacity. Please try again with a different amount.")
//         }
//         else if(!(this.fuel<this.fuelCapacity)){
//             console.log("Can't fill the tank ,fuel tank is already full.")
//         }
//         else{
//             console.log("Try a valid value of fuel amount.")
//         }
//     }
// }

// // --- Simulation Test ---

// // 1. Create a "High Value" Car
// const myTesla = new car("Tesla", "Model S", "new", 9, 20, 100, 18, "black");

// console.log("--- Test Case 1: Market Valuation ---");
// myTesla.checkValue(); 
// // Expected: "This is a nice car. It can be sold at a good price."

// console.log("\n--- Test Case 2: Driving and Fuel Consumption ---");
// myTesla.drive(0.5); 
// // Calculation: 20 - (0.5 * 18) = 11
// // Expected: Low fuel warning + "remaining fuel is 11"

// console.log("\n--- Test Case 3: Valid Fueling ---");
// myTesla.fillTank(30); 
// // Expected: "the amount of 30 was added..." (Total: 41)

// console.log("\n--- Test Case 4: Overfilling Capacity ---");
// myTesla.fillTank(200); 
// // Expected: "The amount 200 is out of fuel capacity..."

// // 2. Create a "Scrap" Car
// const junker = new car("Oldie", "Rustbucket", "old", 3, 5, 40, 5, "grey");

// console.log("\n--- Test Case 5: Scrap Car Valuation ---");
// junker.checkValue(); 
// // Expected: "This car is only remained for scrap."

// console.log("\n--- Test Case 6: Empty Tank Drive ---");
// junker.drive(2); // Drains it to -5 (Your logic currently allows negative fuel)
// junker.drive(1); 
// // Depending on previous state, if fuel <= 0: "Go and fill the fuel tank first."



// ==================================================================
// Tier 1
// ==================================================================

// class UniversityCourse {
//     constructor(courseCode, courseName, creditHours) {
//     this.courseCode = courseCode;
//     this.courseName = courseName;
//     this.creditHours = creditHours;
//     this.students = [];
//     this.teacher = null;
//   }
  
//   enrollStudent(student) {
//     if (this.students.length < 50) { // Class capacity
//       this.students.push(student);
//       console.log(`${student.name} enrolled in ${this.courseName}`);
//     }
//   }
  
//   assignTeacher(teacher) {
//     this.teacher = teacher;
//     console.log(`Prof. ${teacher} assigned to ${this.courseName}`);
//   }
  
//   calculateFee() {
//     return this.creditHours * 5000; // Rs.5000 per credit hour
//   }
// }

// // Instructor creates instances
// const webDev = new UniversityCourse("CS-101", "Web Development", 3);
// webDev.assignTeacher("Dr. Ahmed");
// webDev.enrollStudent({ name: "Ali", id: "2023-001" });
// console.log(`Course fee: Rs.${webDev.calculateFee()}`);

// ==================================================================
// Tier 2
// ==================================================================

// // TODO: Complete this class with guidance
// class BankAccount {
//   constructor(accountHolder, accountType) {
//     this.accountHolder = accountHolder;
//     this.accountType = accountType; // 'savings' or 'current'
//     this._balance = 0;
//     this._transactions = [];
//   }
  
//   // TODO: Implement deposit with validation
//   deposit(amount) {
//     // Should: Check amount > 0, update balance, record transaction
//     if (amount>0) {
//       this._balance+=amount;
//       const record={transactionType:"deposit",depositAmount:amount};
//       this._transactions.push(record);
//     }
//     else{
//       console.log("Please try with a valid amount.")
//     }

//   }
  
//   // TODO: Implement withdraw with overdraft protection
//   withdraw(amount) {
//     // Should: Check sufficient balance, update balance, record transaction

//     if ((this._balance>=amount) && ((this.accountType==='savings' && amount<50000) || (this.accountType==='current' && amount>0))) {
//       this._balance -=amount;
//       const record={transactionType:"withdraw",withdrawAmount:amount};
//       this._transactions.push(record);
//       return  amount;
//     }
//     else{
//       console.log("Please try with a valid amount.");
//     }
//     // Current accounts can have overdraft up to Rs.50,000
//   }
  
//   // TODO: Implement transfer to another account
//   transfer(amount, toAccount) {
//     if (amount<=this._balance) {
//       toAccount.deposit(this.withdraw(amount))
//     }
//     else{
//       console.log("Please try with a valid amount.");
//     }
//     // Should: Withdraw from this, deposit to toAccount
//   }
  
//   // TODO: Add getter for formatted balance
//   get formattedBalance() {
//     return `Rs. ${this._balance}.00`
//     // Should return: "Rs. 5,000.00"
//   }
// }

// // Test together
// const aliAccount = new BankAccount("Ali Khan", "savings");
// aliAccount.deposit(10000);
// aliAccount.withdraw(3000);


// ==================================================================
// Tier 3
// ==================================================================
// // TODO: Build this complete system independently
// class MenuItem {
//   constructor(name, price, category) {
//     this.name=name;
//     this.price=price;
//     this.category=category;
//     // TODO: Properties for food item
//   }
  
//   // TODO: Method to apply discount
//   applyDiscount(percentage) {
//     // Reduce price by percentage
//     const dicsPrice= this.price - ((this.price/100)*percentage);
//     return dicsPrice;
//   }
// }

// class Restaurant {
//   constructor(name, cuisine, deliveryRadius) {
//     // TODO: Properties including menu array
//     this.name=name;
//     this.cuisine=cuisine;
//     this.deliveryRadius=deliveryRadius;
//     this.menu=[];
//   }
  
//   // TODO: Add menu item
//   addMenuItem(item) {
//     // Add to menu array
//     if (this.menu.includes(item)) {
//       console.log("Item is already listed.")
//     }
//     const newMenu=[...this.menu,item];
//     return newMenu;
//   }
  
//   // TODO: Check if location is within delivery radius
//   canDeliverTo(location) {
//     //considering location as distance from customer
//     if (! location>this.deliveryRadius) {
//       return false;
//     }
//     return true;
//     // Return true/false based on distance
//   }
  
//   // TODO: Calculate delivery time based on distance
//   estimateDeliveryTime(distance) {
//     // Base time + distance factor
//     if (this.canDeliverTo(distance)) {
//     const timeRequired=30+(distance*3);
//     return timeRequired;
//     } else {
//       return 0;
//     }
//   }
// }

// class Order {
//   constructor(restaurant, customerAddress) {
//     // TODO: Properties including items array
//     this.restaurant=restaurant;
//     this.customerAddress=customerAddress;
//     this.items=[];
//   }
  
//   // TODO: Add item to order
//   addItem(menuItem, quantity) {
//     // Add to items array
//     const item={item:menuItem, itemQuantity:quantity};
//     if (this.items.includes(item)) {
//       console.log("this item was already added to order list.");
//     }
//     else{
//       this.items.push(item);
//     }
//   }
  
//   // TODO: Calculate total with GST
//   calculateTotal() {
//     let sum=0;
//     this.items.forEach(orderItem=>{
//       const {item , quantity}=orderItem;
//       sum += item.price*quantity;
//     });
//     sum += ((sum/100)*17);
//     // Sum of items + 17% GST
//     return sum;
//   }
  
//   // TODO: Generate receipt
//   generateReceipt() {
//     // Formatted string with details
//     let itemNo=1;
//    const receiptItems= this.items.map((orderItem)=>{
//       const {price,name,category}=orderItem.item;
//       const stringOfitem=`${itemNo}. ${name}  ${category} ${orderItem.quantity} ${price}`
//       itemNo++;
//       return stringOfitem;
//     }).join("\n");
//     return `=====ORDER AT ${this.restaurant}=====
    
//     Items Ordered:
//     Item no  Item Name  Category  Quantity  Price 
//     ${receiptItems}
//     TOTAL : ${this.calculateTotal()}
//     `
//   }
// }
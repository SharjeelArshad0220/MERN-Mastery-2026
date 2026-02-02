
# 🏗️ Day 26: OOP Basics with ES6 Classes
## **Learning Guide: Blueprint Thinking for Code Architecture**

---

# Part 1: Concept Foundation - The Blueprint Mindset

## 🧱 Classes: The Pakistani Architecture Analogy

### **Lahore's Walled City Reconstruction Metaphor**
Imagine you're the chief architect rebuilding Lahore's historic Walled City. You don't design each house individually—you create **blueprints** (classes) that define the common structure, then build specific houses (objects) from those blueprints.

| Architectural Concept | OOP Equivalent | Real Code Example |
|----------------------|---------------|------------------|
| **Blueprint** | Class | `class Restaurant { ... }` |
| **Specific House** | Object/Instance | `const bunduKhan = new Restaurant()` |
| **Foundation** | Constructor | `constructor(name, cuisine)` |
| **Rooms** | Properties | `this.name = name` |
| **Utilities** | Methods | `open() { ... }` |
| **Building Regulations** | Inheritance | `class Rickshaw extends Vehicle` |

### ❓ **Why Do We Need Classes in Pakistani Tech Industry?**

**Scenario:** Daraz needs to manage 10,000+ products. Without classes:

```javascript
// ❌ REPETITIVE, ERROR-PRONE
const product1 = {
  name: "Samsung Galaxy",
  price: 150000,
  category: "Electronics",
  calculateGST: function() { return this.price * 0.17; }
};

const product2 = {
  name: "Java Rice",
  price: 2000,
  category: "Groceries", 
  calculateGST: function() { return this.price * 0.17; } // Repeated!
};

// ... repeat 9998 more times 😫
```

**With Classes:**
```javascript
// ✅ DRY (Don't Repeat Yourself) Principle
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  
  calculateGST() {
    return this.price * 0.17;
  }
}

// Create thousands of products easily
const product1 = new Product("Samsung Galaxy", 150000, "Electronics");
const product2 = new Product("Java Rice", 2000, "Groceries");
// ... 9998 more with consistent structure
```

---

## 🔍 The Three Pillars of OOP (Pakistani Context)

### **Pillar 1: Encapsulation (مخفی کاری)**
Like a **bank locker**—you don't need to know the security mechanism, just how to use it.

### **Pillar 2: Inheritance (وراثت)**
Like **family businesses**—son inherits father's shop and adds new features.

### **Pillar 3: Polymorphism (کثیر الشکلی)**
Like **payment methods**—credit card, JazzCash, EasyPaisa all process payments differently but through same interface.

---

# Part 2: Fundamental Building Blocks

## 🎯 Building Block 1: Basic Class Syntax

### **Think First: What Properties Define Your Object?**
Before writing a class, ask:
1. **"What data does this object store?"** → Properties in constructor
2. **"What actions can this object perform?"** → Methods
3. **"What's unique for each instance?"** → Instance properties
4. **"What's shared by all instances?"** → Static properties/methods

### **Step-by-Step Learning: The Restaurant Class**

#### **Stage 1: Empty Blueprint**
```javascript
// Think: "What makes a restaurant in Pakistan?"
class Restaurant {
  // Constructor = Foundation laying ceremony
  constructor(name, cuisine, location) {
    // "this" = The specific restaurant being built
    this.name = name;
    this.cuisine = cuisine; // Pakistani, Chinese, BBQ
    this.location = location; // Lahore, Karachi, Islamabad
    this.isOpen = false;
    this.rating = 0;
  }
  
  // Methods = Restaurant operations
  open() {
    this.isOpen = true;
    console.log(`${this.name} is now open! 🎉`);
  }
  
  close() {
    this.isOpen = false;
    console.log(`${this.name} is closed for today. 🚪`);
  }
  
  rate(stars) {
    this.rating = stars;
    console.log(`${this.name} rated ${stars} ⭐`);
  }
}

// TODO: Create your first restaurant
const bunduKhan = new Restaurant("Bundu Khan", "BBQ", "Lahore");
```

#### **Stage 2: Understanding "this" - The Owner's Perspective**
```javascript
class Car {
  constructor(brand, model) {
    // "this" refers to THIS specific car
    this.brand = brand;
    this.model = model;
    this.fuel = 100;
  }
  
  drive(distance) {
    // When bunduKhan.open() is called, "this" = bunduKhan
    // When bunduKhan.close() is called, "this" = bunduKhan
    this.fuel -= distance * 0.1;
    console.log(`${this.brand} ${this.model} drove ${distance}km`);
  }
}

// Test: Who is "this"?
const mehran = new Car("Suzuki", "Mehran");
const civic = new Car("Honda", "Civic");

mehran.drive(50); // "this" = mehran
civic.drive(100); // "this" = civic
```

#### **Stage 3: Private-like Properties (Security Convention)**
```javascript
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber; // Public
    this._balance = balance; // _ means "private-ish" - don't touch directly!
    this._pin = 1234; // Sensitive data
  }
  
  // Getter method (security check)
  getBalance(enteredPin) {
    if (enteredPin === this._pin) {
      return this._balance;
    }
    console.log("❌ Incorrect PIN!");
    return null;
  }
  
  // Setter method with validation
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`✅ Deposited Rs.${amount}`);
    } else {
      console.log("❌ Invalid amount");
    }
  }
}

// Usage
const aliAccount = new BankAccount("PK123", 5000);
console.log(aliAccount._balance); // ❌ Don't do this (breaks encapsulation)
console.log(aliAccount.getBalance(1234)); // ✅ Proper way: 5000
```

#### **Stage 4: Static Methods (Shared Utilities)**
```javascript
class PakistaniTaxCalculator {
  // Static = Belongs to class, not instances
  // Like a government tax chart posted in every bank
  
  static calculateGST(amount) {
    return amount * 0.17;
  }
  
  static calculateIncomeTax(salary) {
    if (salary <= 600000) return 0;
    if (salary <= 1200000) return salary * 0.05;
    if (salary <= 2400000) return salary * 0.15;
    return salary * 0.25;
  }
  
  static convertPKRtoUSD(pkr) {
    return pkr / 280; // Example rate
  }
}

// Usage - No need to create instance!
console.log(PakistaniTaxCalculator.calculateGST(1000)); // 170
console.log(PakistaniTaxCalculator.convertPKRtoUSD(28000)); // 100
```

---

## 🎯 Building Block 2: Inheritance - Family Business Model

### **Mental Model: The "Family Shop" Inheritance**
Think of inheritance like a **Lahore's Anarkali Bazaar shop** passed through generations:

- **Grandfather** (Base class): Established shop, basic inventory system
- **Father** (Child class): Added computer billing, expanded products
- **Son** (Grandchild class): Added online delivery, digital marketing

### **Practical Example: Vehicle Inheritance Hierarchy**

```javascript
// Base Class: General Vehicle (Grandfather's shop)
class Vehicle {
  constructor(type, capacity, farePerKm) {
    this.type = type;
    this.capacity = capacity;
    this.farePerKm = farePerKm;
    this.currentPassengers = [];
  }
  
  addPassenger(name) {
    if (this.currentPassengers.length < this.capacity) {
      this.currentPassengers.push(name);
      console.log(`${name} boarded the ${this.type}`);
      return true;
    }
    console.log(`❌ ${this.type} is full!`);
    return false;
  }
  
  calculateFare(distance) {
    return distance * this.farePerKm;
  }
}

// Child Class: Rickshaw (Father's improvements)
class Rickshaw extends Vehicle {
  constructor() {
    // super() = Call parent's constructor
    super("Rickshaw", 3, 20); // Rs.20 per km
    this.isElectric = false;
    this.meterWorking = true;
  }
  
  // Specialized method for Rickshaw
  honk() {
    console.log("Pom Pom! 🛺");
  }
  
  // Override parent method (polymorphism)
  calculateFare(distance) {
    let fare = super.calculateFare(distance); // Use parent's calculation
    if (distance < 2) {
      fare = 50; // Minimum fare for short distances
    }
    if (!this.meterWorking) {
      fare *= 1.5; // 50% extra if meter broken
    }
    return fare;
  }
}

// Child Class: Careem (Son's digital transformation)
class Careem extends Vehicle {
  constructor(driverName) {
    super("Careem", 4, 50); // Rs.50 per km
    this.driverName = driverName;
    this.rating = 5.0;
    this.isAC = true;
  }
  
  // New functionality
  playMusic() {
    console.log("🎵 Playing Pakistani hits...");
  }
  
  rateDriver(stars) {
    this.rating = (this.rating + stars) / 2;
    console.log(`Driver ${this.driverName} now rated: ${this.rating.toFixed(1)} ⭐`);
  }
}
```

---

## 🎯 Building Block 3: Getters and Setters - Controlled Access

### **Think: Bank Teller vs ATM**
- **Direct property access** = Using ATM (limited control)
- **Getters/Setters** = Bank teller (validation, logging, control)

```javascript
class Student {
  constructor(name, rollNumber) {
    this.name = name;
    this._rollNumber = rollNumber; // Private-like
    this._marks = [];
    this._attendance = 100;
  }
  
  // Getter - like asking for transcript
  get marks() {
    console.log(`Accessed marks for ${this.name}`);
    return [...this._marks]; // Return copy, not original
  }
  
  // Setter - like submitting marks with validation
  set marks(newMarks) {
    if (Array.isArray(newMarks)) {
      this._marks = newMarks;
      console.log(`Marks updated for ${this.name}`);
    } else {
      console.log("❌ Marks must be an array");
    }
  }
  
  // Getter with calculation
  get average() {
    if (this._marks.length === 0) return 0;
    const sum = this._marks.reduce((total, mark) => total + mark, 0);
    return sum / this._marks.length;
  }
  
  // Setter with business rules
  set attendance(daysPresent) {
    if (daysPresent >= 0 && daysPresent <= 100) {
      this._attendance = daysPresent;
      
      // Automatic action based on attendance
      if (daysPresent < 75) {
        console.log(`⚠️ Warning: ${this.name} attendance below 75%`);
      }
    }
  }
}

// Usage
const ali = new Student("Ali Ahmed", "2023-001");
ali.marks = [85, 90, 78]; // Uses setter
console.log(ali.marks); // Uses getter
console.log(ali.average); // Calculated getter: 84.33
ali.attendance = 70; // Triggers warning
```

---

# Part 3: Progressive Learning Path

## 🎓 I Do → We Do → You Do Progression

### **Tier 1: I Do - Watch and Learn (30 minutes)**
**Scenario:** Building a University Course Management System

```javascript
// Instructor demonstrates complete example
class UniversityCourse {
  constructor(courseCode, courseName, creditHours) {
    this.courseCode = courseCode;
    this.courseName = courseName;
    this.creditHours = creditHours;
    this.students = [];
    this.teacher = null;
  }
  
  enrollStudent(student) {
    if (this.students.length < 50) { // Class capacity
      this.students.push(student);
      console.log(`${student.name} enrolled in ${this.courseName}`);
    }
  }
  
  assignTeacher(teacher) {
    this.teacher = teacher;
    console.log(`Prof. ${teacher} assigned to ${this.courseName}`);
  }
  
  calculateFee() {
    return this.creditHours * 5000; // Rs.5000 per credit hour
  }
}

// Instructor creates instances
const webDev = new UniversityCourse("CS-101", "Web Development", 3);
webDev.assignTeacher("Dr. Ahmed");
webDev.enrollStudent({ name: "Ali", id: "2023-001" });
console.log(`Course fee: Rs.${webDev.calculateFee()}`);
```

### **Tier 2: We Do - Guided Practice (45 minutes)**
**Scenario:** Building together - Pakistani Bank Account System

```javascript
// TODO: Complete this class with guidance
class BankAccount {
  constructor(accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType; // 'savings' or 'current'
    this._balance = 0;
    this._transactions = [];
  }
  
  // TODO: Implement deposit with validation
  deposit(amount) {
    // Should: Check amount > 0, update balance, record transaction
  }
  
  // TODO: Implement withdraw with overdraft protection
  withdraw(amount) {
    // Should: Check sufficient balance, update balance, record transaction
    // Current accounts can have overdraft up to Rs.50,000
  }
  
  // TODO: Implement transfer to another account
  transfer(amount, toAccount) {
    // Should: Withdraw from this, deposit to toAccount
  }
  
  // TODO: Add getter for formatted balance
  get formattedBalance() {
    // Should return: "Rs. 5,000.00"
  }
}

// Test together
const aliAccount = new BankAccount("Ali Khan", "savings");
aliAccount.deposit(10000);
aliAccount.withdraw(3000);
```

**Guided Questions:**
1. What validations are needed for deposit/withdraw?
2. How should transactions be recorded?
3. What's different between savings and current accounts?

### **Tier 3: You Do - Independent Practice (60 minutes)**
**Challenge:** Build a Food Delivery Restaurant System

```javascript
// TODO: Build this complete system independently
class MenuItem {
  constructor(name, price, category) {
    // TODO: Properties for food item
  }
  
  // TODO: Method to apply discount
  applyDiscount(percentage) {
    // Reduce price by percentage
  }
}

class Restaurant {
  constructor(name, cuisine, deliveryRadius) {
    // TODO: Properties including menu array
  }
  
  // TODO: Add menu item
  addMenuItem(item) {
    // Add to menu array
  }
  
  // TODO: Check if location is within delivery radius
  canDeliverTo(location) {
    // Return true/false based on distance
  }
  
  // TODO: Calculate delivery time based on distance
  estimateDeliveryTime(distance) {
    // Base time + distance factor
  }
}

class Order {
  constructor(restaurant, customerAddress) {
    // TODO: Properties including items array
  }
  
  // TODO: Add item to order
  addItem(menuItem, quantity) {
    // Add to items array
  }
  
  // TODO: Calculate total with GST
  calculateTotal() {
    // Sum of items + 17% GST
  }
  
  // TODO: Generate receipt
  generateReceipt() {
    // Formatted string with details
  }
}
```

---

# Part 4: Independent Application

## 🚀 Project: Lahore Transport System Simulation

### **Project Requirements**
**File:** `day26-oop-transport.js`

**Your Mission:** You've been hired by the Punjab Transport Authority to build a simulation of Lahore's diverse transport system. Create classes that model different vehicles, manage bookings, and generate daily reports.

### **Success Criteria**
✅ All 4 vehicle classes implemented with inheritance
✅ TransportSystem class manages multiple vehicles
✅ Realistic fare calculations for each vehicle type
✅ Daily revenue reporting working
✅ At least 10 simulated bookings
✅ Code demonstrates OOP principles clearly

### **Project Structure Guidance**

```javascript
// ===== BASE CLASS STRUCTURE =====
class Vehicle {
  constructor(type, capacity, farePerKm) {
    // TODO: Initialize common properties
    // type, capacity, farePerKm, passengers, totalEarnings, trips
  }
  
  addPassenger(name, destination, distance) {
    // TODO: Check capacity, calculate fare, update earnings
  }
  
  calculateFare(distance) {
    // TODO: Base fare calculation
  }
  
  // TODO: Add other necessary methods
}

// ===== SPECIALIZED VEHICLES =====
class Rickshaw extends Vehicle {
  constructor() {
    // TODO: Call super with appropriate values
    // Rickshaw: 3 capacity, Rs.20 per km
  }
  
  // TODO: Override calculateFare for minimum fare
  // Short distance (<2km): Rs.50 minimum
}

class Careem extends Vehicle {
  constructor() {
    // TODO: Call super with appropriate values
    // Careem: 4 capacity, Rs.50 per km
  }
  
  // TODO: Add driver assignment and rating system
}

class MetroBus extends Vehicle {
  constructor(routeNumber) {
    // TODO: Call super with appropriate values
    // MetroBus: 50 capacity, Rs.5 per km
  }
  
  // TODO: Override calculateFare for flat rate
  // Flat rate: Rs.30 regardless of distance
}

// ===== MANAGEMENT SYSTEM =====
class TransportSystem {
  constructor(cityName) {
    // TODO: Initialize with vehicles array and revenue tracking
  }
  
  registerVehicle(vehicle) {
    // TODO: Add vehicle to system
  }
  
  findAvailableVehicle(type) {
    // TODO: Return first available vehicle of given type
  }
  
  bookRide(passengerName, destination, distance, vehicleType) {
    // TODO: Find vehicle, add passenger, update revenue
  }
  
  getDailyReport() {
    // TODO: Generate formatted report
  }
}
```

### **Simulation Scenario**
Create a realistic day in Lahore:
1. Morning rush hour (7-9 AM): More bookings, possible surge pricing
2. Afternoon (1-3 PM): Regular traffic
3. Evening rush hour (5-7 PM): High demand, limited availability
4. Night (9-11 PM): Reduced services

### **Testing Framework**
```javascript
// Test your implementation with this simulation
function runSimulation() {
  const lahore = new TransportSystem('Lahore');
  
  // Create vehicles
  // TODO: Create 2 rickshaws, 1 careem, 1 metro bus
  
  // Morning rush hour bookings
  // TODO: Simulate 5-7 bookings
  
  // Afternoon bookings  
  // TODO: Simulate 3-4 bookings
  
  // Evening bookings
  // TODO: Simulate 4-5 bookings
  
  // Generate report
  lahore.getDailyReport();
}
```

### **Extension Challenges**
1. **Add Surge Pricing:** Careem fares increase 50% during rush hours
2. **Student Discounts:** MetroBus 50% off for students with valid ID
3. **Maintenance System:** Vehicles become unavailable after certain trips
4. **Route Planning:** MetroBus with predefined stops and routes

---

## 🧪 Self-Assessment Checkpoint

### **Check Your Understanding**
1. When would you use inheritance vs composition?
2. What's the difference between `this.property` and `this._property`?
3. How do getters/setters improve encapsulation?
4. When should a method be static vs instance?

### **Project Milestones**
- **Milestone 1:** Base Vehicle class working with basic functionality
- **Milestone 2:** All three specialized vehicles implemented
- **Milestone 3:** TransportSystem managing bookings correctly
- **Milestone 4:** Complete simulation with reporting

### **Code Review Checklist**
- [ ] Classes have clear, single responsibilities
- [ ] Inheritance used appropriately (is-a relationships)
- [ ] Properties properly encapsulated
- [ ] Methods follow naming conventions
- [ ] Code is DRY (no duplication)

---

## 🔮 Looking Ahead: Weekend Project Preview

**Tomorrow's Adventure:** Phase 1 Capstone - Movie Search App! Today's OOP skills will help you structure your application into clean, maintainable classes.

**Connection Point:** You'll create classes for:
1. `Movie` - Representing movie data
2. `MovieSearch` - Handling API calls and search logic
3. `FavoritesManager` - Managing localStorage operations
4. `UIHandler` - Updating the DOM

**Pro Tip:** Practice creating small, focused classes today to prepare for the larger project structure tomorrow!

---

## 📚 Additional Resources

### **Pakistani Business Models to Practice OOP**
1. **Banking:** `Account`, `Customer`, `Transaction`, `Bank` classes
2. **E-commerce:** `Product`, `Cart`, `Order`, `User` classes  
3. **Education:** `Student`, `Course`, `Teacher`, `Assignment` classes
4. **Healthcare:** `Patient`, `Doctor`, `Appointment`, `Prescription` classes

### **OOP Principles Cheatsheet**
| Principle | Pakistani Example | Code Implementation |
|-----------|------------------|---------------------|
| **Encapsulation** | Bank vault with security | Private properties with getters/setters |
| **Inheritance** | Family business inheritance | `class SonBusiness extends FatherBusiness` |
| **Polymorphism** | Payment methods (cash/card/mobile) | Same `processPayment()` method, different implementations |
| **Abstraction** | Car dashboard (hide engine complexity) | Simple public methods hiding complex logic |

---

**Remember:** OOP is not about writing more code—it's about writing **organized, maintainable, and scalable** code. Every class you design today makes you a better software architect! 🏗️

**GitHub Commit Message:** `"Day 26: OOP mastery - Class-based Lahore transport system simulation"`
```
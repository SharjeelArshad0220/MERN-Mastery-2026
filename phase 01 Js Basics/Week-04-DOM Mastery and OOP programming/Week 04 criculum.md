 --- 
# WEEK 4: ADVANCED JAVASCRIPT & DOM MASTERY
- PHASE 1 COMPLETION WEEK
 ---

- STUDENT: Sharjeel (20, Lahore, Pakistan)
- TRAINING START: December 2, 2025 (Delayed due to circumstances)
- CURRENT DATE: January 4, 2026
- WEEK 4 DATES: January 4-10, 2026

PREREQUISITES VERIFIED:
✅ Week 1: ES6 Foundations (scope, arrow functions, destructuring, modules)
✅ Week 2: Array Methods Mastery (map, filter, reduce, forEach)
✅ Week 3: Async JavaScript (Promises, async/await, Fetch API, localStorage)
✅ Week 3 Gatekeeper Exam: PASSED (Score 8.5/10)

WEEK 4 GOAL:
Master advanced DOM manipulation, event patterns, debugging mindset, and OOP basics. Build Phase 1 Capstone Project demonstrating complete JavaScript proficiency for React readiness.

LEARNING ENVIRONMENT:
- Laptop available from Day 22 onwards
- Replit for coding (mobile Days 22-23, laptop Days 24-28)
- 4th semester university classes parallel (time-optimized curriculum)

================================================================================
DAILY BREAKDOWN
================================================================================

---
DAY 22 - JANUARY 4, 2026 (SATURDAY)
TOPIC: Advanced DOM Traversal & Manipulation
DEVICE: Mobile (Replit) - Console-focused
TIME REQUIRED: 6-8 hours
---

☐ STEP 1: CONCEPT INTRODUCTION

**Lahore Analogy:**
"DOM tree Lahore ke family tree ki tarah hai. Har element ka parent hai (baap), children hain (aulad), aur siblings hain (bhai-behan). 

Jaise agar tum DHA mein ho aur tumhe Mall Road jaana hai, tum different routes use kar sakte ho:
- parentElement: Apne mohalle se bahar niklo (ek level upar)
- children: Apne ghar ki saari rooms dekho (ek level neeche)
- nextElementSibling: Bagal wale ghar mein jao (same level)
- closest(): Sabse nazdeeki hospital dhundo (upar jao jab tak mile)"

**Why This Exists:**
getElementById sirf ek element de sakta hai. Real apps mein tumhe:
- Button click pe uski parent card remove karni hoti
- Comment section mein reply button pe click par us comment ke neeche reply box dikhana hota
- Dynamic lists mein specific item manipulate karni hoti

**Technical Concept:**
DOM traversal means navigating the element tree using relationships instead of direct selectors.

☐ STEP 2: TECHNICAL EXPLANATION

**Core Methods:**
```javascript
// 1. parentElement - Ek level upar jao
const button = document.querySelector('.delete-btn');
const card = button.parentElement; // Button ka parent (card)
card.remove(); // Poora card delete

// 2. children - Sabke bachhe dekho
const container = document.querySelector('.container');
const kids = container.children; // HTMLCollection of child elements
console.log(kids[0]); // Pehla bacha

// 3. nextElementSibling / previousElementSibling
const heading = document.querySelector('h2');
const para = heading.nextElementSibling; // Heading ke baad wala element
para.style.color = 'red';

// 4. closest() - Nearest ancestor dhundo matching selector
const link = document.querySelector('a');
const section = link.closest('.section'); // Nearest .section parent
section.classList.add('active');

// 5. querySelector inside element (scoped searching)
const menu = document.querySelector('.menu');
const firstLink = menu.querySelector('a'); // Only search inside menu
```

**Real-World Pattern: Comment System**
```javascript
// HTML Structure:
// <div class="comment" id="c1">
//   <p class="text">Great post!</p>
//   <button class="reply-btn">Reply</button>
//   <button class="delete-btn">Delete</button>
// </div>

// Delete button pe click → poora comment delete
document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const comment = btn.closest('.comment'); // Nearest .comment parent
    comment.remove(); // Poora comment udd gaya
  });
});

// Reply button pe click → us comment ke neeche input box
document.querySelectorAll('.reply-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const comment = btn.closest('.comment');
    const replyBox = document.createElement('textarea');
    replyBox.placeholder = "Write reply...";
    comment.appendChild(replyBox); // Comment ke andar add kiya
  });
});
```

**Traversal Cheat Sheet:**
```javascript
element.parentElement        // ↑ Baap
element.children             // ↓ Bachhe (HTMLCollection)
element.firstElementChild    // ↓ Pehla bacha
element.lastElementChild     // ↓ Akhri bacha
element.nextElementSibling   // → Agla bhai
element.previousElementSibling // ← Pichla bhai
element.closest('selector')  // ↑ Nearest ancestor matching
```

☐ STEP 3: THREE-TIER PRACTICE

**TIER 1 (30 min): Direct Application**
```javascript
// Given this structure (imagine in your mind):
// <div class="card">
//   <h3>Product Name</h3>
//   <p>Price: 5000</p>
//   <button class="buy-btn">Buy</button>
// </div>

// Task 1: Button se parent card tak pohanchna
const btn = document.querySelector('.buy-btn');
const card = ???; // Code likho

// Task 2: Card ke andar heading dhundna
const heading = ???; // Code likho

// Task 3: Heading ke baad wala paragraph dhundna
const price = ???; // Code likho
```

**TIER 2 (45 min): Integration with Array Methods**
```javascript
// Task: List of comments, har ek ke saath delete button
// Jab delete pe click, us comment ka sibling count display karo

const comments = document.querySelectorAll('.comment');
comments.forEach(comment => {
  const deleteBtn = comment.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    // 1. Parent container dhundo
    // 2. Baaki kitne siblings hain count karo (children.length - 1)
    // 3. Alert mein dikhao: "3 other comments remain"
    // 4. Is comment ko remove karo
  });
});
```

**TIER 3 (60 min): Real-World - Nested Comments**
```javascript
// Reddit-style nested comments:
// Comment 1
//   ├─ Reply 1.1
//   └─ Reply 1.2
//       └─ Reply 1.2.1

// Task: Reply button pe click:
// - closest('.comment') se parent comment dhundo
// - Uske andar naya comment create karo with margin-left for nesting
// - Delete button pe click → sirf woh comment remove ho, bachhe nahi

// Bonus: Agar 3 level se zyada nesting ho toh warning: "Max nesting reached"
```

☐ STEP 4: DAILY CODING TASK

**File:** `day22-dom-traversal.js` (Console-based since mobile)

**Requirements:**
Create comment system simulator in pure JavaScript (no HTML needed):
```javascript
// 1. Simulate DOM structure with objects
const commentTree = {
  id: 'c1',
  text: 'Great article!',
  children: [
    { id: 'c1-1', text: 'Thanks!', children: [] },
    { id: 'c1-2', text: 'Agreed', children: [
      { id: 'c1-2-1', text: 'Me too', children: [] }
    ]}
  ]
};

// 2. Functions to implement:
function findCommentById(tree, id) {
  // Traverse and return comment object
}

function getParentComment(tree, childId) {
  // Find parent of given comment
}

function getSiblingCount(tree, id) {
  // Count siblings of given comment
}

function getNestingLevel(tree, id) {
  // Calculate how deep the comment is (0 = root)
}

function deleteComment(tree, id) {
  // Remove comment and all its children
  // Return updated tree
}

// 3. Test all functions with console output
console.log("Finding c1-2-1:", findCommentById(commentTree, 'c1-2-1'));
console.log("Parent of c1-2-1:", getParentComment(commentTree, 'c1-2-1'));
console.log("Siblings of c1-1:", getSiblingCount(commentTree, 'c1-1'));
console.log("Nesting level of c1-2-1:", getNestingLevel(commentTree, 'c1-2-1'));
```

**Acceptance Criteria:**
- All 5 functions working correctly
- Handle edge cases (comment not found, root deletion)
- Use recursion for tree traversal
- Console output clearly shows results
- Comments explain tree navigation logic

**GitHub Commit:** "Day 22: DOM Traversal - Tree navigation patterns"

☐ STEP 5: ORAL SELF-EXAM

**Question 1:**
"parentElement aur closest() mein kya farq hai? Kab konsa use karoge? Liberty Market ki shops se example do."

**Question 2:**
"Agar tumhe button click pe uski grandparent element ko style change karni hai, code kaise likhoge? Direct grandparent property hai ya nahi?"

**Question 3:**
"children vs childNodes mein kya farq hai? children HTMLCollection return karta hai, childNodes NodeList - yeh kyun important hai?"

☐ STEP 6: NEXT DAY PREVIEW

"Kal laptop aa jayega, toh hum actual HTML mein event delegation practice karenge. Aaj ki traversal knowledge use hogi jab ek parent element pe listener lagake sab children ke events handle karenge. Social media feed banayenge jahan 50 posts honge but sirf 1 event listener!"

---
DAY 23 - JANUARY 5, 2026 (SUNDAY)  
TOPIC: Event Bubbling & Event Delegation
DEVICE: Laptop available! - HTML/CSS projects start
TIME REQUIRED: 6-8 hours
---

☐ STEP 1: CONCEPT INTRODUCTION

**Lahore Analogy:**
"Event bubbling corporate office ki hierarchy ki tarah hai. Junior employee ke paas issue aaya (button click), woh apne senior ko escalate karta hai (parent element), senior manager ko (grandparent), aur akhir mein CEO tak pohanchta hai (document).

Event delegation aise hai jaise CEO bol raha hai: 'Mujhe har employee ki alag alag report nahi chahiye. HR manager (parent element) ek report bana do saari department se. Main woh dekh lunga.' Yeh efficient hai - 100 employees ke bajaye 1 manager se baat karo."

**Why This Exists:**
Imagine Facebook feed with 50 posts, har post mein like/comment/share buttons. Agar har button pe alag listener lagao toh:
- 50 posts × 3 buttons = 150 event listeners 😱
- Memory wastage
- Slow performance
- New posts add karne pe listeners dubara lagana padein

Event delegation: Parent pe 1 listener, woh decide kare kis button pe click hua!

**Technical Concept:**
Events "bubble up" from child to parent to grandparent. We can catch them at any level. Event delegation = catch at parent level, determine actual target.

☐ STEP 2: TECHNICAL EXPLANATION

**Event Bubbling Visualization:**
```javascript
// HTML:
// <div class="grandparent">
//   <div class="parent">
//     <button class="child">Click Me</button>
//   </div>
// </div>

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

child.addEventListener('click', () => {
  console.log('Child clicked!');
});

parent.addEventListener('click', () => {
  console.log('Parent clicked!');
});

grandparent.addEventListener('click', () => {
  console.log('Grandparent clicked!');
});

// Button click karo → Output:
// "Child clicked!"
// "Parent clicked!"
// "Grandparent clicked!"
// Event bubbles up through all ancestors!
```

**Stopping Propagation:**
```javascript
child.addEventListener('click', (event) => {
  event.stopPropagation(); // Rokk lo bubbling
  console.log('Child only');
});
// Ab sirf "Child only" print hoga, parent tak nahi pohanchega
```

**Event Delegation Pattern:**
```javascript
// BAD: 50 listeners
document.querySelectorAll('.post-btn').forEach(btn => {
  btn.addEventListener('click', handleClick); // 50 functions in memory
});

// GOOD: 1 listener
document.querySelector('.feed').addEventListener('click', (event) => {
  // Check if clicked element is our button
  if (event.target.classList.contains('post-btn')) {
    handleClick(event);
  }
});
```

**Real-World: Social Feed**
```javascript
// HTML:
// <div id="feed">
//   <div class="post" data-id="1">
//     <h3>Post Title 1</h3>
//     <button class="like-btn">Like</button>
//     <button class="share-btn">Share</button>
//   </div>
//   <!-- 49 more posts... -->
// </div>

const feed = document.getElementById('feed');

feed.addEventListener('click', (event) => {
  const target = event.target; // Actual clicked element
  
  // Check which button was clicked
  if (target.classList.contains('like-btn')) {
    // Find which post this button belongs to
    const post = target.closest('.post');
    const postId = post.dataset.id;
    console.log(`Liked post ${postId}`);
    target.textContent = 'Liked ❤️';
  }
  
  if (target.classList.contains('share-btn')) {
    const post = target.closest('.post');
    const postId = post.dataset.id;
    console.log(`Shared post ${postId}`);
    alert(`Post ${postId} shared!`);
  }
});

// Add new post dynamically - delegation still works!
const newPost = document.createElement('div');
newPost.className = 'post';
newPost.dataset.id = '51';
newPost.innerHTML = `
  <h3>New Post</h3>
  <button class="like-btn">Like</button>
  <button class="share-btn">Share</button>
`;
feed.appendChild(newPost);
// No need to add listeners again! Parent listener handles it ✨
```

**event.target vs event.currentTarget:**
```javascript
parent.addEventListener('click', (event) => {
  console.log('target:', event.target); // Element jo actually click hui
  console.log('currentTarget:', event.currentTarget); // Element jispe listener laga hai
});

// Button click karo:
// target: <button> (child)
// currentTarget: <div class="parent">
```

☐ STEP 3: THREE-TIER PRACTICE

**TIER 1 (30 min): Basic Delegation**
```javascript
// Task: 10 buttons in a div, 1 listener

// HTML (create this):
// <div id="container">
//   <button data-action="alert">Alert</button>
//   <button data-action="log">Console Log</button>
//   <button data-action="prompt">Ask Name</button>
//   <!-- 7 more buttons -->
// </div>

// Code:
const container = document.getElementById('container');
container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const action = event.target.dataset.action;
    // Perform action based on data-action
    // ...your code
  }
});
```

**TIER 2 (45 min): Dynamic List Management**
```javascript
// Task: Todo list with delete functionality
// New items add karne pe bhi delete kaam kare

const list = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');

// Delegation for delete
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.closest('li');
    li.remove();
  }
});

// Add new item (dynamically)
addBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>New Task</span>
    <button class="delete-btn">Delete</button>
  `;
  list.appendChild(li);
  // Delete button automatically works! (delegation magic)
});
```

**TIER 3 (60 min): Nested Menu System**
```javascript
// Task: Accordion menu (Daraz categories style)
// Click category → expand/collapse
// Click subcategory → show products
// Use event delegation for entire menu

// HTML Structure:
// <ul id="menu">
//   <li class="category" data-id="electronics">
//     Electronics <span class="toggle">+</span>
//     <ul class="subcategories hidden">
//       <li data-product="phone">Phones</li>
//       <li data-product="laptop">Laptops</li>
//     </ul>
//   </li>
//   <!-- More categories -->
// </ul>

// Single listener handles:
// - Category toggle (show/hide subcategories)
// - Subcategory click (show products)
// - Preventing clicks from bubbling incorrectly
```

☐ STEP 4: DAILY CODING TASK

**Project:** "Lahore Restaurants Feed" (Mini Social Media)

**Files:**
- `index.html`
- `style.css`
- `day23-delegation.js`

**HTML Structure:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Lahore Eats Feed</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🍔 Lahore Eats</h1>
    
    <div id="feed">
      <!-- Posts will be generated by JS -->
    </div>
    
    <button id="add-post">Add Random Post</button>
  </div>
  
  <script src="day23-delegation.js"></script>
</body>
</html>
```

**JavaScript Requirements:**
```javascript
// 1. Initial data
const restaurants = [
  { id: 1, name: 'Bundu Khan', dish: 'Tikka', price: 800, likes: 0 },
  { id: 2, name: 'Howdy', dish: 'Burger', price: 600, likes: 0 },
  { id: 3, name: 'Jade', dish: 'Pasta', price: 1200, likes: 0 },
  // ... 7 more
];

// 2. Render posts function
function renderPosts() {
  const feed = document.getElementById('feed');
  feed.innerHTML = restaurants.map(r => `
    <div class="post" data-id="${r.id}">
      <h3>${r.name} - ${r.dish}</h3>
      <p>Price: Rs. ${r.price}</p>
      <button class="like-btn">👍 Like (${r.likes})</button>
      <button class="order-btn">🛒 Order</button>
      <button class="delete-btn">🗑️ Delete</button>
    </div>
  `).join('');
}

// 3. Event delegation (SINGLE listener)
const feed = document.getElementById('feed');
feed.addEventListener('click', (event) => {
  const target = event.target;
  const post = target.closest('.post');
  if (!post) return; // Clicked outside post
  
  const id = Number(post.dataset.id);
  
  // Handle like
  if (target.classList.contains('like-btn')) {
    // Find restaurant, increment likes, re-render
  }
  
  // Handle order
  if (target.classList.contains('order-btn')) {
    // Show alert with restaurant name and price
  }
  
  // Handle delete
  if (target.classList.contains('delete-btn')) {
    // Remove from restaurants array, re-render
  }
});

// 4. Add new post dynamically
document.getElementById('add-post').addEventListener('click', () => {
  const newPost = {
    id: Date.now(),
    name: 'New Restaurant',
    dish: 'Special Dish',
    price: Math.floor(Math.random() * 1000) + 500,
    likes: 0
  };
  restaurants.push(newPost);
  renderPosts();
  // No need to re-attach listeners! Delegation handles it ✨
});

// Initial render
renderPosts();
```

**CSS (Basic Styling):**
```css
.post {
  border: 2px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}

button {
  margin: 5px;
  padding: 8px 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.like-btn { background: #4CAF50; color: white; }
.order-btn { background: #2196F3; color: white; }
.delete-btn { background: #f44336; color: white; }
```

**Acceptance Criteria:**
- 10 initial restaurant posts displayed
- Single event listener handles all button clicks
- Like button increments count and updates UI
- Order button shows alert with details
- Delete button removes post from array and UI
- "Add Random Post" creates new post, delegation still works
- No memory leaks from multiple listeners

**GitHub Commit:** "Day 23: Event Delegation - Efficient event handling pattern"

☐ STEP 5: ORAL SELF-EXAM

**Question 1:**
"Event delegation performance mein kaise behtar hai? 100 buttons ke liye 100 listeners vs 1 listener - memory aur speed dono explain karo."

**Question 2:**
"event.stopPropagation() kab use karoge? Ek scenario do jahan yeh zaroori ho."

**Question 3:**
"Dynamically added elements (AJAX se aaye) pe delegation kyun behtar hai direct listeners se? Instagram feed example se samjhao."

☐ STEP 6: NEXT DAY PREVIEW

"Kal form validation seekhenge - user input ko check karna without page reload. Email format, password strength, matching passwords - sab pure JavaScript mein. Real-world signup forms jaise Daraz ya Careem pe hote hain!"

---
DAY 24 - JANUARY 6, 2026 (MONDAY)
TOPIC: Form Validation (Pure JavaScript)
DEVICE: Laptop
TIME REQUIRED: 6-8 hours
---

☐ STEP 1: CONCEPT INTRODUCTION

**Lahore Analogy:**
"Form validation aise hai jaise Packages Mall ke entrance pe security check. Tumhara bag check kar rahe hain (inputs), agar kuch suspicious hai toh andar nahi jane dein ge (submit block). Lekin yeh check front gate pe hi ho jaye toh better hai, andar jaane ke baad pata chale toh time waste (server-side validation bhi zaroori hai, but client-side pehle).

Email field aise hai jaise CNIC number - specific format chahiye. Password strength meter aise hai jaise bank locker - strong lock chahiye."

**Why This Exists:**
- User experience: Instant feedback (wait mat karao server response ka)
- Security: Prevent bad data reaching server
- Reduce server load: Galat data pehle hi rok lo
- Professional apps: Daraz, Careem, banking apps sab yeh karte hain

☐ STEP 2: TECHNICAL EXPLANATION

**Core Validation Patterns:**

**1. Prevent Default Form Submission:**
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload
  
  // Validate
  if (isValid()) {
    console.log('Form submitted!');
    // Send to server via fetch
  } else {
    console.log('Please fix errors');
  }
});
```

**2. Email Validation (Regex):**
```javascript
function validateEmail(email) {
  // Basic pattern: something@something.something
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Usage:
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', () => {
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email format';
    emailInput.style.borderColor = 'red';
  } else {
    emailError.textContent = '';
    emailInput.style.borderColor = 'green';
  }
});
```

**3. Password Strength:**
```javascript
function checkPasswordStrength(password) {
  let strength = 0;
  
  if (password.length >= 8) strength++; // Length
  if (/[a-z]/.test(password)) strength++; // Lowercase
  if (/[A-Z]/.test(password)) strength++; // Uppercase
  if (/[0-9]/.test(password)) strength++; // Number
  if (/[^a-zA-Z0-9]/.test(password)) strength++; // Special char
  
  return strength; // 0-5
}

// Real-time strength meter
passwordInput.addEventListener('input', () => {
  const strength = checkPasswordStrength(passwordInput.value);
  const meter = document.getElementById('strength-meter');
  
  if (strength < 3) {
    meter.textContent = 'Weak ❌';
    meter.style.color = 'red';
  } else if (strength < 5) {
    meter.textContent = 'Medium ⚠️';
    meter.style.color = 'orange';
  } else {
    meter.textContent = 'Strong ✅';
    meter.style.color = 'green';
  }
});
```

**4. Confirm Password Match:**
```javascript
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const matchError = document.getElementById('match-error');

confirmPassword.addEventListener('input', () => {
  if (password.value !== confirmPassword.value) {
    matchError.textContent = 'Passwords do not match';
    confirmPassword.style.borderColor = 'red';
  } else {
    matchError.textContent = 'Passwords match ✓';
    matchError.style.color = 'green';
    confirmPassword.style.borderColor = 'green';
  }
});
```

**5. Required Fields:**
```javascript
function validateRequired(input) {
  if (input.value.trim() === '') {
    showError(input, 'This field is required');
    return false;
  }
  clearError(input);
  return true;
}

function showError(input, message) {
  const errorDiv = input.nextElementSibling; // Assuming error div is next
  errorDiv.textContent = message;
  input.classList.add('error');
}

function clearError(input) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = '';
  input.classList.remove('error');
}
```

**Complete Validation Example:**
```javascript
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Collect all inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPass = document.getElementById('confirm-password').value;
  
  let isValid = true;
  
  // Validate name
  if (name === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else if (name.length < 3) {
    showError(nameInput, 'Name must be at least 3 characters');
    isValid = false;
  }
  
  // Validate email
  if (!validateEmail(email))ContinueJan 5javascript  if (!validateEmail(email)) {
    showError(emailInput, 'Invalid email format');
    isValid = false;
  }
  
  // Validate password strength
  if (checkPasswordStrength(password) < 3) {
    showError(passwordInput, 'Password too weak');
    isValid = false;
  }
  
  // Validate password match
  if (password !== confirmPass) {
    showError(confirmPassInput, 'Passwords do not match');
    isValid = false;
  }
  
  // If everything valid
  if (isValid) {
    console.log('Form submitted successfully!');
    // Send to server with fetch
    submitToServer({ name, email, password });
  }
});
☐ STEP 3: THREE-TIER PRACTICE
TIER 1 (30 min): Basic Field Validation
javascript// Task: Create simple login form
// - Email field (validate format on blur)
// - Password field (minimum 6 characters)
// - Submit button (disabled until both valid)

// Bonus: Enable/disable submit button dynamically
TIER 2 (45 min): Phone Number Validation
javascript// Task: Pakistani phone number validator
// Format: 03XX-XXXXXXX (11 digits, starts with 03)
// Show error if:
// - Not 11 digits
// - Doesn't start with 03
// - Contains non-numeric characters

function validatePakistanPhone(phone) {
  // Your regex here
  // Test cases:
  // "0300-1234567" ✓
  // "0321-9876543" ✓
  // "042-1234567" ✗ (landline)
  // "12345" ✗ (too short)
}
TIER 3 (60 min): Real-Time Form Feedback
javascript// Task: Signup form with live feedback
// As user types:
// - Name: Show character count (3-50 chars)
// - Email: Green checkmark when valid, red X when invalid
// - Password: Strength meter updates live
// - Confirm Password: "Match" / "Don't Match" indicator
// - Submit enabled only when ALL fields valid
☐ STEP 4: DAILY CODING TASK
Project: "Careem-Style Signup Form"
Files:

day24-validation.html
day24-validation.css
day24-validation.js

HTML:
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signup Form - Validation</title>
  <link rel="stylesheet" href="day24-validation.css">
</head>
<body>
  <div class="container">
    <h1>Create Account</h1>
    <form id="signup-form">
      
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" placeholder="Ali Ahmed">
        <span class="error-message" id="name-error"></span>
        <span class="success-message" id="name-success"></span>
      </div>
      
      <!-- Email Field -->
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="ali@example.com">
        <span class="error-message" id="email-error"></span>
        <span class="success-message" id="email-success"></span>
      </div>
      
      <!-- Phone Field -->
      <div class="form-group">
        <label for="phone">Phone (Pakistan)</label>
        <input type="tel" id="phone" placeholder="03XX-XXXXXXX">
        <span class="error-message" id="phone-error"></span>
        <span class="success-message" id="phone-success"></span>
      </div>
      
      <!-- Password Field -->
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password">
        <div id="password-strength" class="strength-meter"></div>
        <span class="error-message" id="password-error"></span>
      </div>
      
      <!-- Confirm Password -->
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password">
        <span class="error-message" id="confirm-error"></span>
        <span class="success-message" id="confirm-success"></span>
      </div>
      
      <!-- Terms Checkbox -->
      <div class="form-group">
        <label>
          <input type="checkbox" id="terms">
          I agree to Terms & Conditions
        </label>
        <span class="error-message" id="terms-error"></span>
      </div>
      
      <!-- Submit Button -->
      <button type="submit" id="submit-btn" disabled>Sign Up</button>
      
    </form>
  </div>
  
  <script src="day24-validation.js"></script>
</body>
</html>
JavaScript Requirements:
javascript// ===== VALIDATION FUNCTIONS =====

function validateName(name) {
  if (name.trim().length < 3) return 'Name must be at least 3 characters';
  if (name.trim().length > 50) return 'Name too long';
  if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters';
  return null; // No error
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return 'Invalid email format';
  return null;
}

function validatePhone(phone) {
  // Remove spaces/dashes for validation
  const cleaned = phone.replace(/[\s-]/g, '');
  if (cleaned.length !== 11) return 'Phone must be 11 digits';
  if (!cleaned.startsWith('03')) return 'Phone must start with 03';
  if (!/^\d+$/.test(cleaned)) return 'Phone can only contain numbers';
  return null;
}

function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  return strength; // 0-5
}

function validatePassword(password) {
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (checkPasswordStrength(password) < 3) return 'Password too weak';
  return null;
}

// ===== REAL-TIME VALIDATION =====

const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const nameSuccess = document.getElementById('name-success');

nameInput.addEventListener('blur', () => {
  const error = validateName(nameInput.value);
  if (error) {
    nameError.textContent = error;
    nameSuccess.textContent = '';
    nameInput.classList.add('invalid');
  } else {
    nameError.textContent = '';
    nameSuccess.textContent = '✓ Valid';
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
  }
  checkFormValidity();
});

// Email validation (implement similar to name)
// Phone validation (implement similar)

// Password strength meter (live update)
const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('password-strength');

passwordInput.addEventListener('input', () => {
  const strength = checkPasswordStrength(passwordInput.value);
  
  if (strength === 0) {
    strengthMeter.textContent = '';
  } else if (strength < 3) {
    strengthMeter.textContent = '🔴 Weak';
    strengthMeter.className = 'strength-meter weak';
  } else if (strength < 5) {
    strengthMeter.textContent = '🟡 Medium';
    strengthMeter.className = 'strength-meter medium';
  } else {
    strengthMeter.textContent = '🟢 Strong';
    strengthMeter.className = 'strength-meter strong';
  }
  
  checkFormValidity();
});

// Confirm password match
const confirmInput = document.getElementById('confirm-password');
const confirmError = document.getElementById('confirm-error');
const confirmSuccess = document.getElementById('confirm-success');

confirmInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmInput.value) {
    confirmError.textContent = 'Passwords do not match';
    confirmSuccess.textContent = '';
  } else if (confirmInput.value !== '') {
    confirmError.textContent = '';
    confirmSuccess.textContent = '✓ Passwords match';
  }
  checkFormValidity();
});

// ===== ENABLE/DISABLE SUBMIT BUTTON =====

function checkFormValidity() {
  const submitBtn = document.getElementById('submit-btn');
  
  const isNameValid = validateName(nameInput.value) === null;
  const isEmailValid = validateEmail(emailInput.value) === null;
  const isPhoneValid = validatePhone(phoneInput.value) === null;
  const isPasswordValid = validatePassword(passwordInput.value) === null;
  const passwordsMatch = passwordInput.value === confirmInput.value && confirmInput.value !== '';
  const termsChecked = document.getElementById('terms').checked;
  
  const allValid = isNameValid && isEmailValid && isPhoneValid && 
                    isPasswordValid && passwordsMatch && termsChecked;
  
  submitBtn.disabled = !allValid;
  submitBtn.style.opacity = allValid ? '1' : '0.5';
}

// Check on every input change
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', checkFormValidity);
  input.addEventListener('blur', checkFormValidity);
});

// ===== FORM SUBMISSION =====

const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Final validation
  const errors = [];
  
  const nameErr = validateName(nameInput.value);
  const emailErr = validateEmail(emailInput.value);
  const phoneErr = validatePhone(phoneInput.value);
  const passErr = validatePassword(passwordInput.value);
  
  if (nameErr) errors.push(nameErr);
  if (emailErr) errors.push(emailErr);
  if (phoneErr) errors.push(phoneErr);
  if (passErr) errors.push(passErr);
  if (passwordInput.value !== confirmInput.value) {
    errors.push('Passwords do not match');
  }
  if (!document.getElementById('terms').checked) {
    errors.push('You must agree to terms');
  }
  
  if (errors.length > 0) {
    alert('Please fix these errors:\n' + errors.join('\n'));
    return;
  }
  
  // Success!
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value
  };
  
  console.log('Form submitted:', formData);
  alert('Account created successfully! ✅');
  form.reset();
});
CSS (Basic Styling):
css* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 50px rgba(0,0,0,0.3);
  max-width: 500px;
  width: 100%;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

input.valid {
  border-color: #4CAF50;
}

input.invalid {
  border-color: #f44336;
}

.error-message {
  display: block;
  color: #f44336;
  font-size: 14px;
  margin-top: 5px;
}

.success-message {
  display: block;
  color: #4CAF50;
  font-size: 14px;
  margin-top: 5px;
}

.strength-meter {
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
}

.strength-meter.weak { color: #f44336; }
.strength-meter.medium { color: #ff9800; }
.strength-meter.strong { color: #4CAF50; }

button[type="submit"] {
  width: 100%;
  padding: 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

button[type="submit"]:hover:not(:disabled) {
  background: #5568d3;
}

button[type="submit"]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
Acceptance Criteria:

✅ All 5 fields validated correctly
✅ Real-time feedback (errors show immediately)
✅ Password strength meter updates live
✅ Submit button disabled until all valid
✅ Form submits only with valid data
✅ Success message on valid submission
✅ Form resets after submission

GitHub Commit: "Day 24: Form Validation - Client-side input validation"
☐ STEP 5: ORAL SELF-EXAM
Question 1:
"Client-side validation aur server-side validation dono kyun zaroori hain? Agar sirf client-side karo toh kya security risk hai?"
Question 2:
"event.preventDefault() form submission mein kyun use karte hain? Agar na karein toh kya hoga?"
Question 3:
"Regex /^[^\s@]+@[^\s@]+.[^\s@]+$/ email ke liye kaise kaam kar raha hai? Har part explain karo."
☐ STEP 6: NEXT DAY PREVIEW
"Kal Chrome DevTools seekhenge - professional debugging tool. Breakpoints lagana, variables inspect karna, network requests dekhna. Jab code kaam nahi karta, console.log se behtar tools hain jo systematic problem solving sikhayenge!"

DAY 25 - JANUARY 7, 2026 (TUESDAY)
TOPIC: Chrome DevTools & Systematic Debugging
DEVICE: Laptop
TIME REQUIRED: 6-8 hours
☐ STEP 1: CONCEPT INTRODUCTION
Lahore Analogy:
"Debugging detective work ki tarah hai. Tumhara code crime scene hai jahan kuch galat ho gaya. Console.log aise hai jaise har jagah CCTV camera laga do - mushkil hai aur slow. Chrome DevTools aise hai jaise police ke forensic tools - specific jagah check karo, step by step trace karo, culprit pakro."
Why This Exists:
Professional developers console.log har jagah nahi lagate. DevTools se:

Code execution pause kar sakte ho (breakpoints)
Variables ki values inspect kar sakte ho kisi bhi waqt
Network requests dekh sakte ho (API calls monitor)
Performance measure kar sakte ho
Mobile view test kar sakte ho

☐ STEP 2: TECHNICAL EXPLANATION
DevTools Panel Overview:
1. Console Tab:
javascript// Beyond console.log
console.table([{name: 'Ali', age: 20}, {name: 'Sara', age: 22}]);
// Displays nice table

console.time('Operation');
// ... some code
console.timeEnd('Operation');
// Shows execution time

console.warn('This is warning');
console.error('This is error');

console.group('API Calls');
console.log('Fetching user...');
console.log('User fetched');
console.groupEnd();
2. Sources Tab (Breakpoints):
javascript// Your code:
async function fetchData() {
  const response = await fetch('url'); // Set breakpoint here (click line number)
  const data = await response.json();  // Execution pauses at breakpoint
  console.log(data);                   // Can inspect 'response' value
}

// When breakpoint hits:
// - Execution pauses
// - Hover over variables to see values
// - Use Step Over (F10) to go next line
// - Use Step Into (F11) to enter function calls
// - Use Resume (F8) to continue
3. Network Tab:
javascript// Monitor API calls
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));

// In Network tab you see:
// - Request URL
// - Status Code (200, 404, etc.)
// - Response time (500ms)
// - Request headers
// - Response data
// - Can right-click → Copy as fetch code!
4. Debugger Statement:
javascriptfunction calculateTotal(cart) {
  let total = 0;
  
  debugger; // Automatic breakpoint in code itself
  
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  
  return total;
}

// When this runs, DevTools automatically opens at debugger line
5. Elements Tab (DOM Inspection):

Right-click any element → Inspect
See HTML structure
Edit styles live
See computed CSS values
Check event listeners attached

Systematic Debugging Process:
javascript// PROBLEM: Function returning wrong value

function calculateDiscount(price, discountPercent) {
  const discount = price * discountPercent; // Bug here?
  return price - discount;
}

console.log(calculateDiscount(1000, 10)); // Expected: 900, Got: -9000

// DEBUGGING STEPS:

// 1. Add breakpoint at line 2
// 2. Run code
// 3. Execution pauses
// 4. Hover over 'price' → 1000 ✓
// 5. Hover over 'discountPercent' → 10 ✓
// 6. Hover over 'discount' → 10000 ✗ (Should be 100!)
// 7. AHA! discountPercent should be divided by 100
// 8. Fix: const discount = price * (discountPercent / 100);
☐ STEP 3: THREE-TIER PRACTICE
TIER 1 (30 min): Console Methods
javascript// Task: Use these console methods in real scenarios

// 1. Display array of objects as table
const students = [
  {name: 'Ali', marks: 85, city: 'Lahore'},
  {name: 'Sara', marks: 92, city: 'Karachi'}
];
// Use console.table()

// 2. Measure execution time of sorting 10000 numbers
// Use console.time() and console.timeEnd()

// 3. Create grouped logs for API workflow
// console.group('API Workflow')
// ... multiple logs
// console.groupEnd()
TIER 2 (45 min): Breakpoint Debugging
javascript// Task: Debug this buggy code using breakpoints

async function fetchUserPosts(userId) {
  const user = await fetch(`/api/users/${userId}`);
  const userData = await user.json();
  
  const posts = await fetch(`/api/posts?user=${userData.id}`);
  const postsData = await posts.json();
  
  return postsData.filter(post => post.published);
}

// Steps:
// 1. Set breakpoint at line 2
// 2. Call function: fetchUserPosts(1)
// 3. When paused, inspect 'user' variable
// 4. Step to next line (F10)
// 5. Inspect 'userData'
// 6. Continue through each line
// 7. Identify where data looks wrong
TIER 3 (60 min): Network Tab Investigation
javascript// Task: Monitor and analyze API calls

async function loadDashboard() {
  const profile = await fetch('/api/profile');
  const posts = await fetch('/api/posts');
  const notifications = await fetch('/api/notifications');
  
  // Open Network tab:
  // - Which request was slowest?
  // - Which returned 404?
  // - Total data transferred?
  // - Can you copy one as fetch code?
}
☐ STEP 4: DAILY CODING TASK
Project: "Debug Challenge - Fix 10 Broken Functions"
File: day25-debugging-challenge.js
Create 10 intentionally broken functions. Use DevTools to find and fix each bug. Document your debugging process.
javascript// ===== DEBUG CHALLENGE =====
// Use Chrome DevTools to fix each function
// Document: What was broken? How did you find it?

// 1. OFF-BY-ONE ERROR
function getLastThreeItems(arr) {
  return arr.slice(arr.length - 4); // Bug: Should be -3
}
// Debug process: Set breakpoint, inspect arr.length, check slice parameters

// 2. WRONG COMPARISON
function isAdult(age) {
  return age > 18; // Bug: Should be >= 18
}
// Expected: isAdult(18) → true, Got: false

// 3. MISSING RETURN
function double(num) {
  num * 2; // Bug: Missing return
}

// 4. WRONG METHOD
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index); // Bug: !== should be ===
}

// 5. ASYNC WITHOUT AWAIT
async function getUserName(userId) {
  const user = fetch(`/api/users/${userId}`); // Bug: Missing await
  return user.name;
}

// 6. WRONG ARRAY METHOD
function getTotalPrice(cart) {
  return cart.map(item => item.price * item.quantity); // Bug: Should be reduce
}

// 7. SCOPE ERROR
function createCounter() {
  for (var i = 0; i < 5; i++) { // Bug: var should be let
    setTimeout(() => console.log(i), 1000);
  }
}

// 8. WRONG CONDITION
function isEven(num) {
  return num % 2 === 1; // Bug: Should be === 0
}

// 9. MUTATING ORIGINAL
function addGST(prices) {
  prices.forEach(price => price * 1.17); // Bug: forEach doesn't return, use map
  return prices;
}

// 10. MISSING JSON PARSE
function getStoredUser() {
  return localStorage.getItem('user'); // Bug: Missing JSON.parse
}

// ===== YOUR DEBUGGING LOG =====
// For each function, write:
/*
FUNCTION 1: getLastThreeItems
BUG: Slice parameter was -4 instead of -3
HOW FOUND: Set breakpoint, inspected arr.length and slice return value
FIX: Changed arr.slice(arr.length - 4) to arr.slice(arr.length - 3)
TIME TO FIX: 2 minutes

FUNCTION 2: ...
[Continue for all 10]
*/
Additional Practice:
javascript// ===== NETWORK DEBUGGING =====
// Simulate slow API and debug

async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request timeout!');
    }
    throw error;
  }
}

// Task: 
// 1. Call this with slow API (https://httpbin.org/delay/10)
// 2. Watch Network tab
// 3. See request get cancelled after 5s
// 4. Inspect error in console
Acceptance Criteria:

✅ All 10 bugs identified correctly
✅ Debugging process documented for each
✅ Used breakpoints (not just console.log)
✅ Understand different bug types (logic, syntax, async, scope)
✅ Can explain how DevTools helped find each bug

GitHub Commit: "Day 25: Chrome DevTools - Systematic debugging practice"
☐ STEP 5: ORAL SELF-EXAM
Question 1:
"Breakpoint aur debugger statement mein kya farq hai? Kab konsa use karoge?"
Question 2:
"Network tab mein 'Pending' status ka kya matlab hai? API call slow hai ya code mein problem?"
Question 3:
"console.log se debugging slow kyun hai compared to breakpoints? Production code mein console.log kyun nahi chhodna chahiye?"
☐ STEP 6: NEXT DAY PREVIEW
"Kal Object-Oriented Programming basics seekhenge - JavaScript mein classes. Yeh React components samajhne ke liye foundation hai. Ek Restaurant class banayenge jismein multiple restaurant objects create karenge with shared methods!"

DAY 26 - JANUARY 8, 2026 (WEDNESDAY)
TOPIC: OOP Basics with ES6 Classes
DEVICE: Laptop
TIME REQUIRED: 6-8 hours
☐ STEP 1: CONCEPT INTRODUCTION
Lahore Analogy:
"Class aise hai jaise architect ka blueprint. Agar tumhe Lahore mein 100 houses banane hain, tum har ghar ke liye alag alag design nahi banao ge. Ek blueprint bana lo (class), phir us blueprint se jitne chahiye houses bana lo (objects/instances).
Constructor aise hai jaise ghar ki foundation - har naye ghar ke liye customize hota hai (color, size), lekin structure same (blueprint) rehta hai."
Why This Exists:
Imagine 100 restaurant objects banane hain:
javascript// WITHOUT CLASSES (repetitive)
const restaurant1 = {
  name: 'Bundu Khan',
  cuisine: 'Pakistani',
  open: function() { console.log('Opening...') }
};
const restaurant2 = {
  name: 'Howdy',
  cuisine: 'American',
  open: function() { console.log('Opening...') } // Same method repeated!
};
// 98 more... 😱

// WITH CLASSES (efficient)
class Restaurant {
  constructor(name, cuisine) {
    this.name = name;
    this.cuisine = cuisine;
  }
  
  open() { console.log(`${this.name} is opening...`) }
}

const r1 = new Restaurant('Bundu Khan', 'Pakistani');
const r2 = new Restaurant('Howdy', 'American');
// 98 more - easy! ✨
Classes help organize code for React components (coming in Week 5).
☐ STEP 2: TECHNICAL EXPLANATION
Basic Class Syntax:
javascriptclass BankAccount {
  // Constructor runs when 'new BankAccount()' is called
  constructor(owner, balance) {
    this.owner = owner;         // Instance property
    this.balance = balance;
    this.transactions = [];
  }
  
  // Method (shared by all instances)
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`+${amount}`);
    console.log(`Deposited: ${amount}`);
  }
  
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient balance');
      return;
    }
    this.balance -= amount;
    this.transactions.push(`-${amount}`);
    console.log(`Withdrew: ${amount}`);
  }
  
  getBalance() {
    return this.balance;
  }
}

// Creating instances
const account1 = new BankAccount('Ali', 5000);
const account2 = new BankAccount('Sara', 10000);

account1.deposit(2000);  // Ali's account
account2.withdraw(3000); // Sara's account

console.log(account1.balance); // 7000
console.log(account2.balance); // 7000
Understanding 'this' Keyword:
javascriptclass Car {
  constructor(model) {
    this.model = model; // 'this' refers to current instance
  }
  
  drive() {
    console.log(`${this.model} is driving`); // 'this' is the car object
  }
}

const car1 = new Car('Honda');
const car2 = new Car('Toyota');

car1.drive(); // "Honda is driving" (this = car1)
car2.drive(); // "Toyota is driving" (this = car2)
Private-Like Properties (Convention):
javascriptclass Account {
  constructor(balance) {
    this._balance = balance; // _ means "don't touch directly"
  }
  
  // Getter
  getBalance() {
    return this._balance;
  }
  
  // Setter with validation
  setBalance(amount) {
    if (amount < 0) {
      console.log('Balance cannot be negative');
      return;
    }
    this._balance = amount;
  }
}

const acc = new Account(1000);
console.log(acc.getBalance()); // 1000
acc.setBalance(-500); // Error message
Static Methods (Class-level, not instance-level):
javascriptclass MathHelper {
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

// Call without creating instance
console.log(MathHelper.add(5, 3)); // 8
// Don't need: const helper = new MathHelper();
Real-World Example: Product Inventory:
javascriptclass Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.sold = 0;
  }
  
  sell(quantity) {
    if (quantity > this.stock) {
      console.log(`Only ${this.stock} available`);
      return false;
    }
    
    this.stock -= quantity;
    this.sold += quantity;
    console.log(`Sold ${quantity} ${this.name}`);
    return true;
  }
  
  restock(quantity) {
    this.stock += quantity;
    console.log(`Restocked ${quantity} ${this.name}`);
  }
  
  getRevenue() {
    return this.sold * this.price;ContinueJan 5javascript    return this.sold * this.price;
  }
  
  getInfo() {
    return `${this.name}: Rs.${this.price} | Stock: ${this.stock} | Revenue: Rs.${this.getRevenue()}`;
  }
}

// Usage
const phone = new Product('iPhone', 150000, 10);
const laptop = new Product('MacBook', 300000, 5);

phone.sell(3);           // Sold 3 iPhone
laptop.sell(2);          // Sold 2 MacBook
phone.restock(5);        // Restocked 5 iPhone

console.log(phone.getInfo());
// "iPhone: Rs.150000 | Stock: 12 | Revenue: Rs.450000"

console.log(laptop.getInfo());
// "MacBook: Rs.300000 | Stock: 3 | Revenue: Rs.600000"
☐ STEP 3: THREE-TIER PRACTICE
TIER 1 (30 min): Basic Class Creation
javascript// Task: Create Student class
// Properties: name, rollNumber, marks (array)
// Methods:
// - addMarks(subject, marks)
// - getAverage()
// - hasPassed() // Returns true if average >= 50

// Test:
const student = new Student('Ali', 101);
student.addMarks('Math', 85);
student.addMarks('English', 78);
console.log(student.getAverage()); // 81.5
console.log(student.hasPassed());  // true
TIER 2 (45 min): Class with Validation
javascript// Task: Create BankAccount class
// Properties: accountNumber, balance (private-like with _)
// Methods:
// - deposit(amount) // Validate: amount > 0
// - withdraw(amount) // Validate: amount <= balance
// - transfer(toAccount, amount) // Validate then transfer
// - getStatement() // Return transaction history

// Bonus: Track all transactions with timestamps
TIER 3 (60 min): Multiple Interacting Classes
javascript// Task: Restaurant Management System
// Class 1: MenuItem (name, price, category)
// Class 2: Order (items array, customer name)
//   - addItem(menuItem, quantity)
//   - removeItem(menuItem)
//   - calculateTotal() // With 17% GST
//   - getReceipt() // Formatted string
// Class 3: Restaurant (name, menu array, orders array)
//   - addMenuItem(item)
//   - createOrder(customerName)
//   - getDailySales() // Total from all orders

// Test with Bundu Khan restaurant
☐ STEP 4: DAILY CODING TASK
Project: "Lahore Transport System (OOP)"
File: day26-oop-transport.js
Requirements:
javascript// ===== VEHICLE BASE LOGIC =====

class Vehicle {
  constructor(type, capacity, fare) {
    this.type = type;           // 'rickshaw', 'careem', 'bus'
    this.capacity = capacity;   // Max passengers
    this.fare = fare;           // Fare per KM
    this.passengers = [];
    this.totalEarnings = 0;
    this.trips = 0;
  }
  
  addPassenger(name, destination, distance) {
    if (this.passengers.length >= this.capacity) {
      console.log(`${this.type} is full!`);
      return false;
    }
    
    const fare = this.calculateFare(distance);
    this.passengers.push({ name, destination, fare });
    this.totalEarnings += fare;
    this.trips++;
    
    console.log(`${name} boarded ${this.type} to ${destination}. Fare: Rs.${fare}`);
    return true;
  }
  
  calculateFare(distance) {
    return distance * this.fare;
  }
  
  dropAllPassengers() {
    console.log(`Dropping ${this.passengers.length} passengers from ${this.type}`);
    this.passengers = [];
  }
  
  getStats() {
    return {
      type: this.type,
      trips: this.trips,
      totalEarnings: this.totalEarnings,
      currentPassengers: this.passengers.length
    };
  }
}

// ===== SPECIALIZED VEHICLES =====

class Rickshaw extends Vehicle {
  constructor() {
    super('Rickshaw', 3, 20); // 3 capacity, Rs.20 per KM
    this.isElectric = false;
  }
  
  // Override fare for short distances
  calculateFare(distance) {
    if (distance < 2) {
      return 50; // Minimum fare
    }
    return super.calculateFare(distance);
  }
  
  convertToElectric() {
    this.isElectric = true;
    console.log('Rickshaw converted to electric! 🔋');
  }
}

class Careem extends Vehicle {
  constructor() {
    super('Careem', 4, 50); // 4 capacity, Rs.50 per KM
    this.rating = 5.0;
    this.driverName = '';
  }
  
  assignDriver(name) {
    this.driverName = name;
    console.log(`Driver ${name} assigned to Careem`);
  }
  
  rateDriver(rating) {
    if (rating < 1 || rating > 5) {
      console.log('Rating must be between 1-5');
      return;
    }
    this.rating = (this.rating + rating) / 2; // Average
    console.log(`New rating: ${this.rating.toFixed(1)} ⭐`);
  }
}

class MetroBus extends Vehicle {
  constructor(routeNumber) {
    super('Metro Bus', 50, 5); // 50 capacity, Rs.5 per KM
    this.routeNumber = routeNumber;
    this.stops = [];
  }
  
  addStop(stopName) {
    this.stops.push(stopName);
    console.log(`Stop added: ${stopName}`);
  }
  
  getRoute() {
    return `Route ${this.routeNumber}: ${this.stops.join(' → ')}`;
  }
  
  // Override fare (flat rate regardless of distance)
  calculateFare(distance) {
    return 30; // Flat Rs.30 for any distance
  }
}

// ===== TRANSPORT MANAGEMENT =====

class TransportSystem {
  constructor(cityName) {
    this.cityName = cityName;
    this.vehicles = [];
    this.totalRevenue = 0;
  }
  
  registerVehicle(vehicle) {
    this.vehicles.push(vehicle);
    console.log(`${vehicle.type} registered in ${this.cityName}`);
  }
  
  findAvailableVehicle(type) {
    return this.vehicles.find(v => 
      v.type === type && v.passengers.length < v.capacity
    );
  }
  
  bookRide(passengerName, destination, distance, vehicleType) {
    const vehicle = this.findAvailableVehicle(vehicleType);
    
    if (!vehicle) {
      console.log(`No ${vehicleType} available`);
      return false;
    }
    
    const success = vehicle.addPassenger(passengerName, destination, distance);
    if (success) {
      this.totalRevenue += vehicle.calculateFare(distance);
    }
    return success;
  }
  
  getDailyReport() {
    console.log(`\n===== ${this.cityName} Transport Report =====`);
    
    this.vehicles.forEach(vehicle => {
      const stats = vehicle.getStats();
      console.log(`${stats.type}: ${stats.trips} trips | Rs.${stats.totalEarnings} earned`);
    });
    
    console.log(`Total City Revenue: Rs.${this.totalRevenue}`);
    console.log('='.repeat(40));
  }
}

// ===== TEST SIMULATION =====

// Initialize Lahore transport system
const lahore = new TransportSystem('Lahore');

// Create vehicles
const rickshaw1 = new Rickshaw();
const rickshaw2 = new Rickshaw();
const careem1 = new Careem();
const metro = new MetroBus(1);

// Setup
careem1.assignDriver('Ahmed');
metro.addStop('Kalma Chowk');
metro.addStop('Mall Road');
metro.addStop('Liberty');

// Register vehicles
lahore.registerVehicle(rickshaw1);
lahore.registerVehicle(rickshaw2);
lahore.registerVehicle(careem1);
lahore.registerVehicle(metro);

// Simulate bookings
lahore.bookRide('Ali', 'Mall Road', 5, 'Rickshaw');
lahore.bookRide('Sara', 'DHA', 10, 'Careem');
lahore.bookRide('Ahmed', 'Gulberg', 8, 'Careem');
lahore.bookRide('Fatima', 'Liberty', 15, 'Metro Bus');
lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw'); // Short distance

// Rate Careem driver
careem1.rateDriver(4);

// Convert rickshaw to electric
rickshaw1.convertToElectric();

// Drop passengers (end of trips)
rickshaw1.dropAllPassengers();
careem1.dropAllPassengers();
metro.dropAllPassengers();

// Show metro route
console.log(metro.getRoute());

// Daily report
lahore.getDailyReport();

// ===== BONUS CHALLENGES =====

// 1. Add "SurgePrice" mode to Careem (2x fare during peak hours)
// 2. Add "StudentDiscount" to Metro (50% off with student card)
// 3. Create "TrafficJam" class that increases all fares by 30%
// 4. Add "DriverBreak" system - vehicle unavailable for 30 min after 5 trips
```

**Acceptance Criteria:**
- ✅ All 4 vehicle classes working (Rickshaw, Careem, Metro, Base Vehicle)
- ✅ Inheritance used correctly (extends Vehicle)
- ✅ Constructor, methods, and properties properly implemented
- ✅ TransportSystem manages multiple vehicles
- ✅ Daily report calculates total revenue
- ✅ Realistic simulation with 10+ bookings
- ✅ Code demonstrates OOP concepts: encapsulation, inheritance, polymorphism

**GitHub Commit:** "Day 26: OOP Basics - Class-based transport system"

☐ STEP 5: ORAL SELF-EXAM

**Question 1:**
"Class aur object mein kya farq hai? Agar Restaurant class hai, toh Bundu Khan kya hai - class ya object?"

**Question 2:**
"'this' keyword class methods mein kya refer karta hai? Agar 5 different objects banayi hain, toh 'this' kis object ko point karega?"

**Question 3:**
"Inheritance (extends) ka faida kya hai? Agar Vehicle base class hai aur Rickshaw extends Vehicle karta hai, toh Rickshaw ko kya mil jata hai automatically?"

☐ STEP 6: NEXT DAY PREVIEW

"Kal se Weekend Project shuru - Phase 1 Capstone! Movie Search App banayenge OMDB API se. Sab kuch integrate hoga: fetch API, localStorage, event delegation, form validation, aur debugging skills. Yeh tumhara pehla portfolio-worthy project hoga!"

---
DAY 27-28 - JANUARY 9-10, 2026 (THURSDAY-FRIDAY)
PHASE 1 ASSESSMENT PROJECT: Movie Search Application
DEVICE: Laptop
TIME REQUIRED: 12-16 hours total (6-8 hours per day)
---

☐ PROJECT OVERVIEW

**Goal:** Build a complete movie search application demonstrating ALL JavaScript skills from Weeks 1-4.

**Why This Project:**
- Real API integration (OMDB)
- Complex DOM manipulation
- localStorage for favorites
- Event delegation for dynamic content
- Form validation for search
- Debugging real issues
- Portfolio-ready project

**Tech Stack:**
- Pure HTML/CSS/JavaScript (NO frameworks)
- OMDB API (free movie database)
- localStorage for persistence
- Responsive design (mobile-friendly)

☐ DAY 27 (THURSDAY): CORE FUNCTIONALITY

**Time:** 6-8 hours

**Setup Phase (30 min):**

1. Get OMDB API Key:
   - Visit: http://www.omdbapi.com/apikey.aspx
   - Select FREE tier (1000 requests/day)
   - Verify email to activate key
   - Test URL: `http://www.omdbapi.com/?apikey=YOUR_KEY&s=batman`

2. Project Structure:
```
day27-movie-app/
├── index.html
├── style.css
├── app.js
└── README.md
HTML Structure:
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎬 Movie Finder - Lahore Edition</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    
    <!-- Header -->
    <header>
      <h1>🎬 Movie Finder</h1>
      <p>Search and save your favorite movies</p>
    </header>
    
    <!-- Search Section -->
    <div class="search-section">
      <form id="search-form">
        <input 
          type="text" 
          id="search-input" 
          placeholder="Search movies... (e.g., Batman, Inception)"
          required
          minlength="2"
        >
        <button type="submit" id="search-btn">🔍 Search</button>
      </form>
      <div id="error-message" class="error hidden"></div>
    </div>
    
    <!-- Tabs -->
    <div class="tabs">
      <button class="tab-btn active" data-tab="results">Search Results</button>
      <button class="tab-btn" data-tab="favorites">My Favorites (<span id="fav-count">0</span>)</button>
    </div>
    
    <!-- Loading State -->
    <div id="loading" class="hidden">
      <p>🎬 Searching movies...</p>
    </div>
    
    <!-- Results Section -->
    <div id="results-tab" class="tab-content active">
      <div id="search-results" class="movies-grid">
        <!-- Movies will be inserted here -->
      </div>
      <div id="no-results" class="hidden">
        <p>No movies found. Try different keywords!</p>
      </div>
    </div>
    
    <!-- Favorites Section -->
    <div id="favorites-tab" class="tab-content hidden">
      <div id="favorites-list" class="movies-grid">
        <!-- Favorites will be inserted here -->
      </div>
      <div id="no-favorites" class="hidden">
        <p>No favorites yet. Search and add movies!</p>
      </div>
    </div>
    
  </div>
  
  <script src="app.js"></script>
</body>
</html>
JavaScript Core Features (Day 27 Focus):
javascript// ===== API CONFIGURATION =====
const API_KEY = 'YOUR_OMDB_API_KEY'; // Replace with your key
const API_URL = 'http://www.omdbapi.com/';

// ===== DOM ELEMENTS =====
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const resultsContainer = document.getElementById('search-results');
const favoritesContainer = document.getElementById('favorites-list');
const noResults = document.getElementById('no-results');
const noFavorites = document.getElementById('no-favorites');
const favCount = document.getElementById('fav-count');

// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const resultsTab = document.getElementById('results-tab');
const favoritesTab = document.getElementById('favorites-tab');

// ===== STATE MANAGEMENT =====
let searchResults = [];
let favorites = loadFavorites(); // Load from localStorage

// ===== CORE FUNCTIONS =====

// 1. Search Movies (Fetch API)
async function searchMovies(query) {
  try {
    showLoading();
    hideError();
    
    const url = `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    hideLoading();
    
    if (data.Response === 'False') {
      // API returned error (e.g., movie not found)
      showError(data.Error || 'No movies found');
      showNoResults();
      return [];
    }
    
    searchResults = data.Search || [];
    displaySearchResults(searchResults);
    return searchResults;
    
  } catch (error) {
    hideLoading();
    showError('Network error. Please check your connection.');
    console.error('Search error:', error);
    return [];
  }
}

// 2. Display Search Results
function displaySearchResults(movies) {
  resultsContainer.innerHTML = '';
  
  if (movies.length === 0) {
    showNoResults();
    return;
  }
  
  hideNoResults();
  
  movies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    resultsContainer.appendChild(movieCard);
  });
}

// 3. Create Movie Card (DOM Manipulation)
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.dataset.imdbId = movie.imdbID;
  
  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
  
  card.innerHTML = `
    <img 
      src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}" 
      alt="${movie.Title}"
      class="movie-poster"
    >
    <div class="movie-info">
      <h3 class="movie-title">${movie.Title}</h3>
      <p class="movie-year">${movie.Year}</p>
      <p class="movie-type">${movie.Type}</p>
      <button class="fav-btn ${isFavorite ? 'favorited' : ''}" data-id="${movie.imdbID}">
        ${isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
      </button>
    </div>
  `;
  
  return card;
}

// 4. Event Delegation for Favorites
resultsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('fav-btn')) {
    const btn = event.target;
    const movieId = btn.dataset.id;
    const movie = searchResults.find(m => m.imdbID === movieId);
    
    if (movie) {
      toggleFavorite(movie, btn);
    }
  }
});

// Similar delegation for favorites container
favoritesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('fav-btn')) {
    const btn = event.target;
    const movieId = btn.dataset.id;
    const movie = favorites.find(m => m.imdbID === movieId);
    
    if (movie) {
      toggleFavorite(movie, btn);
    }
  }
});

// 5. Toggle Favorite (localStorage)
function toggleFavorite(movie, btn) {
  const index = favorites.findIndex(fav => fav.imdbID === movie.imdbID);
  
  if (index === -1) {
    // Add to favorites
    favorites.push(movie);
    btn.textContent = '❤️ Favorited';
    btn.classList.add('favorited');
  } else {
    // Remove from favorites
    favorites.splice(index, 1);
    btn.textContent = '🤍 Add to Favorites';
    btn.classList.remove('favorited');
  }
  
  saveFavorites();
  updateFavoritesDisplay();
  updateFavCount();
}

// 6. localStorage Functions
function saveFavorites() {
  localStorage.setItem('movieFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
  const stored = localStorage.getItem('movieFavorites');
  return stored ? JSON.parse(stored) : [];
}

// 7. Display Favorites
function displayFavorites() {
  favoritesContainer.innerHTML = '';
  
  if (favorites.length === 0) {
    showNoFavorites();
    return;
  }
  
  hideNoFavorites();
  
  favorites.forEach(movie => {
    const movieCard = createMovieCard(movie);
    favoritesContainer.appendChild(movieCard);
  });
}

function updateFavoritesDisplay() {
  if (favoritesTab.classList.contains('active')) {
    displayFavorites();
  }
}

function updateFavCount() {
  favCount.textContent = favorites.length;
}

// 8. Tab Switching
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.dataset.tab;
    
    // Update buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Show/hide content
    if (tabName === 'results') {
      resultsTab.classList.add('active');
      favoritesTab.classList.remove('active');
    } else {
      resultsTab.classList.remove('active');
      favoritesTab.classList.add('active');
      displayFavorites(); // Refresh favorites
    }
  });
});

// 9. Form Submission (Validation)
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const query = searchInput.value.trim();
  
  if (query.length < 2) {
    showError('Please enter at least 2 characters');
    return;
  }
  
  searchMovies(query);
});

// 10. UI Helper Functions
function showLoading() {
  loading.classList.remove('hidden');
  resultsContainer.innerHTML = '';
  hideNoResults();
}

function hideLoading() {
  loading.classList.add('hidden');
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

function hideError() {
  errorMessage.classList.add('hidden');
}

function showNoResults() {
  noResults.classList.remove('hidden');
}

function hideNoResults() {
  noResults.classList.add('hidden');
}

function showNoFavorites() {
  noFavorites.classList.remove('hidden');
}

function hideNoFavorites() {
  noFavorites.classList.add('hidden');
}

// ===== INITIALIZATION =====
updateFavCount();
displayFavorites(); // Show saved favorites on load
```

**Day 27 Testing Checklist:**
```
☐ Search "Batman" - should show results
☐ Search "asdfgh" - should show error
☐ Add movie to favorites - heart icon changes
☐ Switch to Favorites tab - movie appears
☐ Refresh page - favorites still there (localStorage)
☐ Remove from favorites - disappears
☐ Search validation - less than 2 chars shows error
☐ Network error handling - turn off internet, try search
GitHub Commit Day 27: "Day 27: Movie App - Core search and favorites"

☐ DAY 28 (FRIDAY): POLISH & ADVANCED FEATURES
Time: 6-8 hours
Advanced Features to Add:
1. Movie Details Modal (Click to Expand):
javascript// Fetch full movie details
async function getMovieDetails(imdbID) {
  try {
    const url = `${API_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Details error:', error);
    return null;
  }
}

// Show modal with details
function showMovieModal(movie) {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <div class="modal-body">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <div class="modal-info">
          <h2>${movie.Title} (${movie.Year})</h2>
          <p><strong>Rating:</strong> ⭐ ${movie.imdbRating}/10</p>
          <p><strong>Genre:</strong> ${movie.Genre}</p>
          <p><strong>Director:</strong> ${movie.Director}</p>
          <p><strong>Cast:</strong> ${movie.Actors}</p>
          <p><strong>Plot:</strong> ${movie.Plot}</p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close modal
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Add click listener to movie cards
resultsContainer.addEventListener('click', async (event) => {
  const card = event.target.closest('.movie-card');
  if (card && !event.target.classList.contains('fav-btn')) {
    const imdbID = card.dataset.imdbId;
    showLoading();
    const details = await getMovieDetails(imdbID);
    hideLoading();
    if (details) showMovieModal(details);
  }
});
2. Search History (Last 5 Searches):
javascriptlet searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

function saveSearchHistory(query) {
  if (!searchHistory.includes(query)) {
    searchHistory.unshift(query);
    searchHistory = searchHistory.slice(0, 5); // Keep only 5
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
  }
}

function displaySearchHistory() {
  const historyDiv = document.getElementById('search-history');
  if (searchHistory.length === 0) {
    historyDiv.innerHTML = '';
    return;
  }
  
  historyDiv.innerHTML = `
    <p>Recent:</p>
    ${searchHistory.map(term => 
      `<button class="history-btn">${term}</button>`
    ).join('')}
  `;
}

// Click history to search again
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('history-btn')) {
    searchInput.value = e.target.textContent;
    searchForm.dispatchEvent(new Event('submit'));
  }
});
3. Filter by Type (Movie/Series/Episode):
javascriptlet currentFilter = 'all';

function filterResults(type) {
  currentFilter = type;
  const filtered = type === 'all' 
    ? searchResults 
    : searchResults.filter(m => m.Type.toLowerCase() === type);
  displaySearchResults(filtered);
}

// Add filter buttons to HTML and handle clicks
4. Sort by Year:
javascriptfunction sortByYear(order = 'desc') {
  const sorted = [...searchResults].sort((a, b) => {
    return order === 'desc' 
      ? b.Year.localeCompare(a.Year)
      : a.Year.localeCompare(b.Year);
  });
  displaySearchResults(sorted);
}
5. Export Favorites as JSON:
javascriptfunction exportFavorites() {
  const dataStr = JSON.stringify(favorites, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-favorite-movies.json';
  a.click();
  
  URL.revokeObjectURL(url);
}
Complete CSS (Professional Styling):
css* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  padding: 30px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  font-size: 42px;
  color: #1e3c72;
  margin-bottom: 10px;
}

header p {
  color: #666;
  font-size: 18px;
}

/* Search Section */
.search-section {
  margin-bottom: 30px;
}

#search-form {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

#search-input {
  flex: 1;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
}

#search-input:focus {
  outline: none;
  border-color: #2a5298;
}

#search-btn {
  padding: 15px 30px;
  background: #2a5298;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

#search-btn:hover {
  background: #1e3c72;
}

.error {
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #ef5350;
}

.hidden {
  display: none !important;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}

.tab-btn {
  padding: 15px 30px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 16px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
}

.tab-btn.active {
  color: #2a5298;
  border-bottom-color:ContinueJan 5#2a5298;
font-weight: bold;
}
.tab-btn:hover {
color: #2a5298;
}
/* Loading State */
#loading {
text-align: center;
padding: 60px 20px;
font-size: 24px;
color: #2a5298;
animation: pulse 1.5s infinite;
}
@keyframes pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.5; }
}
/* Movies Grid */
.movies-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 25px;
margin-top: 20px;
}
.movie-card {
background: white;
border: 2px solid #e0e0e0;
border-radius: 12px;
overflow: hidden;
cursor: pointer;
transition: transform 0.3s, box-shadow 0.3s;
}
.movie-card:hover {
transform: translateY(-8px);
box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}
.movie-poster {
width: 100%;
height: 375px;
object-fit: cover;
}
.movie-info {
padding: 15px;
}
.movie-title {
font-size: 18px;
margin-bottom: 8px;
color: #333;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
.movie-year {
color: #666;
font-size: 14px;
margin-bottom: 5px;
}
.movie-type {
color: #999;
font-size: 12px;
text-transform: uppercase;
margin-bottom: 10px;
}
.fav-btn {
width: 100%;
padding: 10px;
border: 2px solid #e0e0e0;
border-radius: 8px;
background: white;
cursor: pointer;
font-size: 14px;
transition: all 0.3s;
}
.fav-btn:hover {
background: #f5f5f5;
border-color: #2a5298;
}
.fav-btn.favorited {
background: #ffebee;
border-color: #e91e63;
color: #c2185b;
font-weight: bold;
}
/* Empty States */
#no-results, #no-favorites {
text-align: center;
padding: 80px 20px;
color: #999;
font-size: 20px;
}
/* Modal */
.modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
animation: fadeIn 0.3s;
}
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
.modal-content {
background: white;
border-radius: 15px;
max-width: 800px;
width: 90%;
max-height: 90vh;
overflow-y: auto;
position: relative;
animation: slideUp 0.3s;
}
@keyframes slideUp {
from { transform: translateY(50px); opacity: 0; }
to { transform: translateY(0); opacity: 1; }
}
.close-btn {
position: absolute;
top: 15px;
right: 20px;
font-size: 32px;
color: #999;
cursor: pointer;
background: white;
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s;
}
.close-btn:hover {
background: #f44336;
color: white;
}
.modal-body {
display: flex;
gap: 30px;
padding: 30px;
}
.modal-body img {
width: 300px;
height: 450px;
object-fit: cover;
border-radius: 10px;
}
.modal-info {
flex: 1;
}
.modal-info h2 {
margin-bottom: 20px;
color: #1e3c72;
}
.modal-info p {
margin-bottom: 15px;
line-height: 1.6;
color: #555;
}
.modal-info strong {
color: #333;
}
/* Search History */
#search-history {
display: flex;
gap: 10px;
align-items: center;
flex-wrap: wrap;
margin-top: 10px;
}
#search-history p {
color: #666;
font-size: 14px;
}
.history-btn {
padding: 8px 15px;
background: #f5f5f5;
border: 1px solid #ddd;
border-radius: 20px;
cursor: pointer;
font-size: 14px;
transition: all 0.3s;
}
.history-btn:hover {
background: #2a5298;
color: white;
border-color: #2a5298;
}
/* Responsive Design */
@media (max-width: 768px) {
.container {
padding: 20px;
}
header h1 {
font-size: 32px;
}
.movies-grid {
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
gap: 15px;
}
.modal-body {
flex-direction: column;
}
.modal-body img {
width: 100%;
height: auto;
}
#search-form {
flex-direction: column;
}
#search-btn {
width: 100%;
}
}

**Day 28 Final Testing:**
CORE FEATURES:
☐ Search movies by title
☐ Display results with posters
☐ Add/remove favorites
☐ Favorites persist after refresh
☐ Tab switching works
☐ Search validation
☐ Error handling (network, invalid search)
ADVANCED FEATURES:
☐ Click movie card → shows details modal
☐ Modal displays rating, genre, plot, cast
☐ Close modal with X or click outside
☐ Search history shows last 5 searches
☐ Click history item → searches again
☐ Filter by type (movie/series)
☐ Sort by year
☐ Export favorites as JSON
POLISH:
☐ Loading states smooth
☐ Responsive on mobile (test on phone)
☐ No console errors
☐ All animations work
☐ Professional appearance

**Complete README.md:**
```markdown
# 🎬 Movie Finder Application

A feature-rich movie search application built with vanilla JavaScript, demonstrating modern web development skills including API integration, local storage, and advanced DOM manipulation.

## 🌟 Features

### Core Functionality
- **Movie Search**: Search thousands of movies using OMDB API
- **Favorites System**: Add/remove movies to favorites with localStorage persistence
- **Dual Views**: Toggle between search results and favorites
- **Responsive Design**: Works seamlessly on desktop and mobile

### Advanced Features
- **Movie Details Modal**: Click any movie for full details (rating, cast, plot)
- **Search History**: Recent 5 searches saved and quickly accessible
- **Filter & Sort**: Filter by type (movie/series) and sort by year
- **Export Favorites**: Download favorites as JSON file
- **Real-time Validation**: Search input validated before submission
- **Loading States**: Smooth loading indicators during API calls
- **Error Handling**: Network errors and invalid searches handled gracefully

## 🛠️ Technologies Used

### Core Stack
- **HTML5**: Semantic structure with accessibility
- **CSS3**: Modern styling with animations and gradients
- **JavaScript (ES6+)**: Pure vanilla JS, no frameworks

### Key Concepts Demonstrated

**Week 1 Skills:**
- ES6 syntax (const/let, arrow functions, template literals)
- Destructuring and spread operators
- Module-like organization

**Week 2 Skills:**
- Array methods (.map, .filter, .find, .some)
- Functional programming patterns
- Data transformation

**Week 3 Skills:**
- Async/await for API calls
- Fetch API with error handling
- Promises and error propagation
- localStorage for data persistence

**Week 4 Skills:**
- Advanced DOM manipulation
- Event delegation for dynamic content
- Form validation
- Modal implementation
- Responsive design

## 📋 Setup Instructions

### 1. Get API Key
```
1. Visit: http://www.omdbapi.com/apikey.aspx
2. Choose FREE tier (1000 daily requests)
3. Verify email to activate
4. Copy your API key
2. Configure Application
javascript// In app.js, replace:
const API_KEY = 'YOUR_OMDB_API_KEY';
```

### 3. Run Application
```
Simply open index.html in your browser
No build process or server required!
💡 Code Highlights
Async API Integration
javascriptasync function searchMovies(query) {
  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`);
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    handleError(error);
    return [];
  }
}
Event Delegation Pattern
javascript// Single listener handles all favorite buttons (efficient!)
resultsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('fav-btn')) {
    const movie = searchResults.find(m => m.imdbID === event.target.dataset.id);
    toggleFavorite(movie);
  }
});
localStorage Persistence
javascriptfunction saveFavorites() {
  localStorage.setItem('movieFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
  const stored = localStorage.getItem('movieFavorites');
  return stored ? JSON.parse(stored) : [];
}
```

## 🧪 Testing Checklist

- ✅ Search "Inception" - shows results
- ✅ Search "xyz123" - shows error message
- ✅ Add to favorites - persists after refresh
- ✅ Modal displays full details
- ✅ Search history works
- ✅ Mobile responsive
- ✅ No console errors

## 🎓 What I Learned

### Technical Skills
- **API Integration**: Understanding RESTful APIs, handling responses, error states
- **Asynchronous JavaScript**: Mastering async/await, promise chaining, error handling
- **State Management**: Managing application state without frameworks
- **DOM Mastery**: Efficient manipulation, event delegation, dynamic content
- **Data Persistence**: Using localStorage effectively for offline functionality

### Problem-Solving
- Debugging network issues systematically
- Handling edge cases (no poster, missing data)
- Performance optimization (event delegation vs multiple listeners)
- User experience considerations (loading states, error messages)

### Professional Practices
- Clean, readable code with meaningful names
- Modular function design (single responsibility)
- Comprehensive error handling
- Mobile-first responsive design

## 🚀 Future Enhancements

- [ ] Pagination for search results (currently limited to 10)
- [ ] Advanced filters (year range, genre, rating)
- [ ] User ratings and notes on favorites
- [ ] Share favorites via URL
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Watchlist vs Watched separation

## 🔗 API Reference

**OMDB API**: http://www.omdbapi.com/
- Free tier: 1000 requests/day
- Search by title, year, type
- Returns: poster, plot, ratings, cast

## 📸 Screenshots

[Add screenshots of your application showing:]
- Search results view
- Favorites view
- Movie details modal
- Mobile responsive view
- Error states

## 👨‍💻 Developer

**Sharjeel** - Lahore, Pakistan  
100-Day MERN Journey - Phase 1 Capstone Project

**GitHub**: [your-github-profile]  
**LinkedIn**: [your-linkedin]

---

**Project Stats:**
- Development Time: 12-16 hours
- Lines of Code: ~800
- API Calls: 2 (search, details)
- Features: 10+ core + 5 advanced
- Browser Compatibility: Chrome, Firefox, Safari, Edge

**Built with ❤️ in Lahore**
```

**Final GitHub Commit:** "Day 28: Movie App Complete - Phase 1 Capstone Project Finished"

---

## ✅ WEEK 4 COMPLETION CHECKLIST
```
DAILY WORK:
☐ Day 22: DOM Traversal - Tree navigation (console-based) ✓
☐ Day 23: Event Delegation - Restaurant feed with single listener ✓
☐ Day 24: Form Validation - Signup form with real-time feedback ✓
☐ Day 25: Chrome DevTools - Debug 10 broken functions ✓
☐ Day 26: OOP Basics - Lahore transport system with classes ✓
☐ Day 27-28: Movie Search App - Full-featured application ✓

SKILLS ACQUIRED:
☐ Advanced DOM patterns (traversal, delegation) ✓
☐ Professional debugging workflow ✓
☐ ES6 Classes and OOP concepts ✓
☐ Form validation techniques ✓
☐ Integration of all Week 1-3 skills ✓
☐ Portfolio-quality project completed ✓

PHASE 1 COMPLETE - READY FOR REACT!
```

---

## 🎯 WEEK 4 SUCCESS CRITERIA

**To advance to Phase 2 (React), verify:**

1. **Movie App Fully Functional:**
   - All core features working (search, favorites, tabs)
   - At least 3 advanced features implemented
   - Professional appearance
   - No major bugs

2. **GitHub Portfolio:**
   - All Week 4 projects committed
   - README files comprehensive
   - Code well-commented

3. **Conceptual Understanding:**
   - Can explain event delegation benefits
   - Understands OOP class structure
   - Knows debugging workflow with DevTools

4. **Self-Assessment Questions:**
   - "DOM traversal kyun zaroori hai dynamic content ke liye?"
   - "Event delegation performance mein kaise better hai?"
   - "Classes objects se kaise different hain?"

**If All Verified:** 🎉 **PHASE 1 COMPLETE!** Week 5 React begins Monday!

**If Gaps Exist:** Address specific weak areas before proceeding.

---

================================================================================
END OF WEEK 4 CURRICULUM
================================================================================
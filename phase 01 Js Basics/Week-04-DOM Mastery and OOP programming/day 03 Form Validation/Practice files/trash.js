// const form=document.querySelector('form');
// //Email validation with basic Js logic
// // ===================================
// function hasAtSymbol(email) {
//   // TODO: How do we check if a string contains '@'?
//   // Hint: Strings have a method that returns true/false
//   return email.includes('@'); // Fill the blank
// }
// function hasTextBeforeAndAfterAt(email) {
//   if (!hasAtSymbol(email)) return false;
  
//   const parts = email.split('@');
//   // TODO: What should we check about 'parts'?
//   // How many parts? Should they be empty?
//   // Fill in the conditions:
//   return parts.length === 2 && 
//          parts[0].length > 1 && 
//          parts[1].length > 1;
// }
// function hasDotInDomain(email) {
//   if (!hasTextBeforeAndAfterAt(email)) return false;
  
//   const domain = email.split('@')[1];
//   // TODO: Check if domain contains a dot
//   // AND there's text after the dot
//   const dotParts = domain.split('.');
//   return dotParts.length >= 2 && 
//          dotParts[dotParts.length - 1].length > 1;
// }
// // Test these emails - which should pass/fail?
// const testEmails = [
//   "ali@",              // Should fail: No domain
//   "@gmail.com",        // Should fail: No local part
//   "ali@gmail",         // Should fail: No dot in domain
//   "ali@gmail.com",     // Should pass: Perfect
//   "ali.ahmed@co.uk"    // Should pass: Multiple dots OK
// ];

// // Try to trace through your functions for each email
// for (const email of testEmails) {
//     console.log(`${email} is valid: ${hasDotInDomain(email)}`)
// }
// const emailAddress=document.querySelector('#email');
// emailAddress.addEventListener('blur',()=>{
//  console.log(`${emailAddress.value} is valid: ${hasDotInDomain(emailAddress.value)}`)
//     emailAddress.classList.add(hasDotInDomain(emailAddress.value)?"green":"red");
// })
// // ========================================================
// // Password stregnth checking process wit basic Js 
// function checkPasswordStrength(password) {
//   let score = 0; // Start with zero points
  
//   // Rule 1: Length requirement (like age requirement)
//   if (password.length >= 8) score++;
  
//   // Rule 2: Lowercase letters (basic requirement)
//   if (/[a-z]/.test(password)) score++;
  
//   // Rule 3: Uppercase letters (additional security)
//   if (/[A-Z]/.test(password)) score++;
  
//   // Rule 4: Numbers (like PIN requirement)
//   if (/[0-9]/.test(password)) score++;
  
//   // Rule 5: Special chars (like biometric verification)
//   if (/[^a-zA-Z0-9]/.test(password)) score++;
  
//   return score; // 0-5 scale
// }
// const passwordInput=document.querySelector("#password");
// passwordInput.addEventListener('blur', () => {
//   const strength = checkPasswordStrength(passwordInput.value);
//   const meter = document.getElementById('strength-meter');
//   meter?console.log("got meter"):console.log("meter is not available")
//   // TODO: Complete this feedback system
//   // Based on strength score (0-5), show appropriate message
//   if (passwordInput.value==="") {
//     meter.textContent = 'Plz enter a stronger password';
//     meter.style.color = 'red';
//   }
//   else if (strength <= 2) {
//     meter.textContent = '🚫 Very Weak - Like using "1234" as ATM PIN';
//     meter.style.color = 'red';
//   } else if (strength < 3) {
//     // TODO: What message for medium-weak?
//         meter.textContent = 'Try a stronger password Like a mixed of all characters';
//     meter.style.color = 'red';
//   } else if (strength < 4) {
//     // TODO: What message for medium?
//         meter.textContent = 'Try for a more stronger password.';
//     meter.style.color = 'red';
//   } else {
//     // TODO: What message for strong?
//         meter.textContent = 'Password Accepted have a secure experience';
//     meter.style.color = 'green';
//   }
// });
// // ===================


// // phone number verification
// // ==========================
// // 03XX-XXXXXXX
// // │ │   └─── 7 digits for subscriber
// // │ └────── 2 digits for mobile operator
// // └──────── "03" for mobile network prefix
// // ================================
// function cleanPhoneNumber(phone) {
//   // Remove spaces, dashes, plus sign
//   // TODO: What string method removes characters?
//   return phone.replace(/[\s\-+]/g, '');
// }
// function validatePakistanPhone(phone) {
//   const cleaned = cleanPhoneNumber(phone);
  
//   // Rule 1: Must be 11 digits (like CNIC is 13)
//   if (cleaned.length !== 11) {
//     return 'Phone must be exactly 11 digits';
//   }
  
//   // Rule 2: Must start with 03 (mobile networks)
//   if (!cleaned.startsWith('03')) {
//     return 'Pakistani mobile must start with 03';
//   }
  
//   // Rule 3: Must be all numbers
//   if (!/^\d+$/.test(cleaned)) {
//     return 'Phone can only contain numbers';
//   }
  
//   return null; // No error = valid
// }
// const result=validatePakistanPhone("03217556992");
// if (result) {
//     console.log(result);
// }
// else{
//     console.log("number verified successfully.");
// }
// // =======================================

// PROGRESSIVE LEARNING PATH

// 🎯 TIER 1: I Do - Basic Field Validation (30 min)
// Scenario: You're building a Jazz World login form

// HTML elements (assume they exist in your HTML)
const emailInput = document.getElementById('jazz-email');
const passwordInput = document.getElementById('jazz-password');
const submitBtn = document.getElementById('jazz-submit');

// 1. Email validation on blur (when user leaves field)
emailInput.addEventListener('blur', () => {
  const email = emailInput.value.trim();
  
  // TODO: Complete this validation logic
  // Check 1: Is it empty?
  if (email === '') {
    showError(emailInput, 'Email is required for Jazz World');
    return;
  }
  
  // Check 2: Does it contain @?
  // TODO: Add your code here
  if (!email.includes("@")) {
    showError(emailInput,'invalid email.');
  }
  // Check 3: Is there text after @?
  // TODO: Add your code here
  const parts=email.split('@');
//   checked is email having a name and a domain or not 
  if(!parts.length===2 && parts[0].length>1 && parts[1].length>1){
    showError(emailInput,'invalid email.');
  }
  const dotParts=parts[1].split('.');
  if(!dotParts.length>=2 && dotParts[dotParts.length-1].length>1){
    showError(emailInput,'invalid email.');
  }

  // If all checks pass:
  clearError(emailInput);
});

// 2. Password validation (minimum 6 characters)
passwordInput.addEventListener('input', () => {
  // TODO: Check if password has at least 6 characters
  if (passwordInput.value.length>=6) {
    submitBtn.Disabled=false
  }
  // Enable/disable submit button based on both fields
});

function showError(input, message) {
  // TODO: Implement error display
  // Hint: You can add a red border and show message
}

function clearError(input) {
  // TODO: Implement clearing error
}
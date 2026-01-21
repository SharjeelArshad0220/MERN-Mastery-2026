//Email validation with basic Js logic
// ===================================
function hasAtSymbol(email) {
  // TODO: How do we check if a string contains '@'?
  // Hint: Strings have a method that returns true/false
  return email.includes('@'); // Fill the blank
}
function hasTextBeforeAndAfterAt(email) {
  if (!hasAtSymbol(email)) return false;
  
  const parts = email.split('@');
  // TODO: What should we check about 'parts'?
  // How many parts? Should they be empty?
  // Fill in the conditions:
  return parts.length === 2 && 
         parts[0].length > 1 && 
         parts[1].length > 1;
}
function hasDotInDomain(email) {
  if (!hasTextBeforeAndAfterAt(email)) return false;
  
  const domain = email.split('@')[1];
  // TODO: Check if domain contains a dot
  // AND there's text after the dot
  const dotParts = domain.split('.');
  return dotParts.length >= 2 && 
         dotParts[dotParts.length - 1].length > 1;
}
// Test these emails - which should pass/fail?
const testEmails = [
  "ali@",              // Should fail: No domain
  "@gmail.com",        // Should fail: No local part
  "ali@gmail",         // Should fail: No dot in domain
  "ali@gmail.com",     // Should pass: Perfect
  "ali.ahmed@co.uk"    // Should pass: Multiple dots OK
];

// Try to trace through your functions for each email
for (const email of testEmails) {
    console.log(`${email} is valid: ${hasDotInDomain(email)}`)
}
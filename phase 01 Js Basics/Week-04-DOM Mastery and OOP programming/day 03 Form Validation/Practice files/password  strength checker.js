// Password stregnth checking process wit basic Js 
function checkPasswordStrength(password) {
  let score = 0; // Start with zero points
  
  // Rule 1: Length requirement (like age requirement)
  if (password.length >= 8) score++;
  
  // Rule 2: Lowercase letters (basic requirement)
  if (/[a-z]/.test(password)) score++;
  
  // Rule 3: Uppercase letters (additional security)
  if (/[A-Z]/.test(password)) score++;
  
  // Rule 4: Numbers (like PIN requirement)
  if (/[0-9]/.test(password)) score++;
  
  // Rule 5: Special chars (like biometric verification)
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  
  return score; // 0-5 scale
}
const passwordInput=document.querySelector("#password");
passwordInput.addEventListener('blur', () => {
  const strength = checkPasswordStrength(passwordInput.value);
  const meter = document.getElementById('strength-meter');
  meter?console.log("got meter"):console.log("meter is not available")
  // TODO: Complete this feedback system
  // Based on strength score (0-5), show appropriate message
  if (passwordInput.value==="") {
    meter.textContent = 'Plz enter a stronger password';
    meter.style.color = 'red';
  }
  else if (strength <= 2) {
    meter.textContent = '🚫 Very Weak - Like using "1234" as ATM PIN';
    meter.style.color = 'red';
  } else if (strength < 3) {
    // TODO: What message for medium-weak?
        meter.textContent = 'Try a stronger password Like a mixed of all characters';
    meter.style.color = 'red';
  } else if (strength < 4) {
    // TODO: What message for medium?
        meter.textContent = 'Try for a more stronger password.';
    meter.style.color = 'red';
  } else {
    // TODO: What message for strong?
        meter.textContent = 'Password Accepted have a secure experience';
    meter.style.color = 'green';
  }
});
// ===================
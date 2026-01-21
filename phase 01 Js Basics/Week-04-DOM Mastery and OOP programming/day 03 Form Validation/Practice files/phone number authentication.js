
// phone number verification
// ==========================
// 03XX-XXXXXXX
// │ │   └─── 7 digits for subscriber
// │ └────── 2 digits for mobile operator
// └──────── "03" for mobile network prefix
// ================================
function cleanPhoneNumber(phone) {
  // Remove spaces, dashes, plus sign
  // TODO: What string method removes characters?
  return phone.replace(/[\s\-+]/g, '');
}
function validatePakistanPhone(phone) {
  const cleaned = cleanPhoneNumber(phone);
  
  // Rule 1: Must be 11 digits (like CNIC is 13)
  if (cleaned.length !== 11) {
    return 'Phone must be exactly 11 digits';
  }
  
  // Rule 2: Must start with 03 (mobile networks)
  if (!cleaned.startsWith('03')) {
    return 'Pakistani mobile must start with 03';
  }
  
  // Rule 3: Must be all numbers
  if (!/^\d+$/.test(cleaned)) {
    return 'Phone can only contain numbers';
  }
  
  return null; // No error = valid
}
const result=validatePakistanPhone("03217556992");
if (result) {
    console.log(result);
}
else{
    console.log("number verified successfully.");
}
// =======================================

const form = document.getElementById('memberForm');
const fields = document.querySelectorAll(".field");
const submitBtn = document.getElementById('submitBtn');

fields.forEach(field => {//adding error messages if invalid on blur 
const input=field.querySelector('input,select');
if (!input)return;
input.addEventListener('blur',()=>{
    validateInput(input,true);
});
});
form.addEventListener('submit',(event)=>{//handled submit event
    let allValid=true;
    fields.forEach(field=>{
        const input=field.querySelector('input,select');
        if (!input) {
            return;
        }
        const ok=validateInput(input,true);
        if (!ok) {
            allValid=false;
        }
    });
    if (!allValid) {
        event.preventDefault();
        form.querySelector(':invalid')?.focus();
    }
});
form.addEventListener('input', (e) => {
    // We need to run individual validation first to update CustomValidity 
    // for things like Phone and Password Match
    validateInput(e.target, false); 
    updateSubmitButton();
});

function updateSubmitButton(){
let allValid =true;
    fields.forEach(field=>{
        const input=field.querySelector('input,select');
        const ok=validateInput(input,false);//checking the validation of all inputs silently
        if (!ok) {
            allValid=false;
            return;
        }
    })
    submitBtn.disabled=!allValid;

}
function getMessage(input) {
    if (input.validity.valueMissing) {
        if (input.name === 'terms') {
            return 'Please agree our terms.'
        }
        else {
            return 'This field is required.'
        }
    }
    if (input.validity.typeMismatch) {
        if (input.name === 'email') {
            return 'Please enter a valid email address.'
        }
        else if (input.name === 'url') {
            return 'Enter a valid URL e.g.,(include https://).'
        }
        else {
            return 'Please enter a valid Value'
        }
    }
    if (input.validity.patternMismatch) {
        if (input.name === 'fullName') {
            return 'Name can contain only letters and spaces.'
        }
        return 'Please match the requested format.';
    }
    if (input.validity.tooShort) {
        return `Minimum ${input.minLength} characters are required`
    }
    return '';
}
function cleanPhone(phone) {
    return phone.replace(/[\s-]/g, '');
}
function validateInput(input,showError=false) {
    const field = input.closest('.field');
    input.setCustomValidity('');
    const error =field? field.querySelector('.error'):null;
    if (!error) {
        return true
    }
    input.setCustomValidity('');
    error.textContent = '';
    input.style.borderColor = ''
    if (input.name === 'phone' && input.value) {
        const cleaned = cleanPhone(input.value);
        const ok = /^03\d{9}$/.test(cleaned);
        if (!ok) {
            const msg = 'Phone must be 11 digits and start with 03 (e.g., 0300-1234567).';
            input.setCustomValidity(msg);
            if(showError){input.style.borderColor = 'red';error.textContent = msg;}
            return false;
        }
    }
    if (input.name === 'confirmPassword') {
        const pwd = form.elements.password.value;
        if (input.value && input.value !== pwd) {
            input.setCustomValidity('Password Do not match.');
            if (showError) {
              input.style.borderColor = 'red';
                error.textContent = 'Password Do not match.';
            }
            return false;
        }
    }
    if (!input.checkValidity()) {
        const msg = getMessage(input);
        input.setCustomValidity(msg);
        if(showError){input.style.borderColor = 'red';error.textContent = msg;}
        return false;
    }
    input.style.borderColor = 'green';
    return true;
}

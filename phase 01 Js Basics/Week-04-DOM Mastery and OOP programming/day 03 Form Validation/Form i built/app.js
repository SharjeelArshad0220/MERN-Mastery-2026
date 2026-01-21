const form = document.querySelector('#validForm');
const toggleBtn = document.querySelector('#theme-toggle');
const fields = document.querySelectorAll('.field');
const submitBtn = form.querySelector('#submit');
const toggleMode = () => document.body.classList.toggle('dark-theme');
toggleBtn.addEventListener('click', toggleMode);
function validateInput(input) {
    const value = input.value.trim() || '';
    const name = input.name;
    input.setCustomValidity('');
    if (!input.checkValidity()) {
        return { isValid: false, errorMsg: getErrorMessage(input) }
        // return getErrorMessage(input);
    }
    if (value && name === 'phone') {
        const cleaned = value.replace(/\D/g, '');
        if (!/^03\d{9}$/.test(cleaned)) {
            return { isValid: false, errorMsg: 'Phone must be 11 digits starting with 03.' }
            // return 'Phone must be 11 digits starting with 03.'
        }
    }
    if (name === 'Confirm' && value) {
        const password = form.querySelector('#password').value;
        if (password !== value) {
            return { isValid: false, errorMsg: 'Passwords do not match.' }
            // return 'Passwrods do not match.'
        }
    }
    if (name === 'Portfolio' && value) {
        if (!/^https?:\/\//.test(value)) {
            return { isValid: false, errorMsg: 'URL must start with http:// or https://' }
            // return 'URL must start with http:// or https://';
        }
    }
    if (name === 'terms' && !input.checked) {
        return { isValid: false, errorMsg: 'You must agree to terms' };
    }
    return { isValid: true, errorMsg: null };
}
function getErrorMessage(input) {
    const status = input.validity;
    if (status.valueMissing) {
        return 'This Field is required.'
    }
    if (status.patternMismatch) {
        if (input.name === 'name') {
            return 'Only letters and spaces are allowed.'
        }
        if (input.name === 'zipCode') {
            return 'Only 5 digits zip code required.'
        }
    }
    if (status.tooShort) {
        return `Minimum ${input.minLength} characters are required.`
    }
    if (status.tooLong) {
        return `Maximum ${input.maxLength} characters are allowed.`
    }
    if (status.typeMismatch) {
        if (input.type === 'email') {
            return 'Please enter a valid email address.'
        }
        if (input.type === 'url') {
            return 'Please enter a valid URL starts with http:// or https://'
        }
    }
    if (status.rangeUnderFlow || status.rangeOverFlow) {
        return 'Date is outside the range.'
    }
    return 'Please enter a valid value.'
}
function ValidateAll(fields) {
    let allvalid = true;
    for (const field of fields) {
        const input = field.querySelector('input,textarea,select');
        if (!input || input.type === 'submit') continue;
        if (!input.hasAttribute('required') && !input.value.trim()) {
            continue;
        }
        const { isValid, errorMsg } = validateInput(input);
        if (!isValid) {
            const obj = { allvalid: false, message: errorMsg, element: input };
            return obj;
        }
    }
    return { allvalid, message: null,element:null };
}
const updateSubmitBtn = () => {
    const {allvalid}=ValidateAll(fields);
    if (allvalid) {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }
}
function ShowErrors(input){
    const { isValid, errorMsg } = validateInput(input);
    const field = input.closest('.field');
    const errorBox = field.querySelector('.error');
    if (isValid) {
        errorBox.textContent='';
        // field.classList.remove('error');
        errorBox.classList.remove('showError');
    }
    else{
        // field.classList.add('error');
        errorBox.textContent=errorMsg;
        errorBox.classList.add('showError');
        return true;
    }
    return false;
}
function passwordMeter(password) {
    const meter=document.getElementById('meter');
    meter.className = 'counter';
    let strength = 0;
    if (password) {
        // 1. Length check (8 characters se zyada pe +1)
        if (password.length >= 8) strength++;

        // 2. Numbers check
        if (/[0-9]/.test(password)) strength++;

        // 3. Uppercase letters check
        if (/[A-Z]/.test(password)) strength++;

        // 4. Special characters check
        if (/[^A-Za-z0-9]/.test(password)) strength++;
    }
    // Meter value update (Max 4 scores)
    if (strength===0) {
        meter.classList.remove('weak','medium','strong');
    }
    else if (strength<2) {
        meter.classList.add('weak')
    }
    else if (strength<=3) {
        meter.classList.add('medium')
    }
    else if (strength===4) {
        meter.classList.add('strong')
    }
}
function setupEventListeners() {
    fields.forEach(field=>{
        const input=field.querySelector('input,select,textarea')
        if (!input || input.type === 'submit') return;
        let touched=false;
        input.addEventListener('blur',function (){
            touched=true;
            ShowErrors(this);
            updateSubmitBtn();
            if (this.name==='password' && this.value) {
                passwordMeter(this.value);
            }
        });
        input.addEventListener('input',function (){
            if (this.name === 'password') {
        const confirmInput = form.querySelector('#Confirm');
        if (confirmInput.value) {
            ShowErrors(confirmInput); // Trigger validation for confirm field
        }
    }
            const errorBox = field.querySelector('.error');
            errorBox.textContent = '';
            errorBox.classList.remove('showError');
             if (this.name === 'password') {
                passwordMeter(this.value);
            }
            // Update submit button
            updateSubmitBtn();
        });
        
         if (input.type === 'checkbox'||input.type === 'radio') {
            input.addEventListener('change', function() {
                ShowErrors(this);
                updateSubmitBtn();
            });
        }

    });
}
form.addEventListener('submit',(e)=>{
    const {allvalid,message,element}=ValidateAll(fields);
    if (!allvalid) {
        e.preventDefault();
        ShowErrors(element);
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        alert(message || 'Please fix the error before submitting');
    }
    else{
        alert('form submitted successfully.');
        form.submit();
        form.reset();
        updateSubmitBtn();
        passwordMeter('');
    }
});
document.addEventListener('DOMContentLoaded',()=>{
     setupEventListeners();
    
    // Initial state
    submitBtn.disabled = true; // Button disabled initially
    passwordMeter('');
})
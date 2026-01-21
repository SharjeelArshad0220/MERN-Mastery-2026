const form = document.querySelector('#signup');
const submitBtn = form.querySelector('button');
const input = document.querySelector('input');
function inputCheck() {
    const value=input.value.trim()
    if (value === '') {
        return 'Field is required'; 
    }
    else if (value.length === 1) {
        return 'minimum 2 characters are required';
    }

    return null;
}
function submitButton(wanted){
    if (wanted) {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#4CAF50"; // Green
        submitBtn.style.color = "white";
    }
    else{
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "#cccccc"; // Gray
        submitBtn.style.color = "#666666";
    }
}
input.addEventListener('blur', () => {
    if (!inputCheck()) {
        input.style.borderColor = 'rgb(106, 255, 106)';
        submitButton(true);
    }
    else {
        const error = input.closest('form').querySelector('.error')
        error.textContent = inputCheck();
        error.style.color = 'red';
        input.style.borderColor = 'rgb(253, 5, 5)';
        submitButton(false);
    }

})
input.addEventListener('input', () => {
    const chars=input.value.trim().length;
    console.log(chars);
    input.nextElementSibling.textContent=chars;
    chars>=2?input.nextElementSibling.style.color='rgb(106, 255, 106)':input.nextElementSibling.style.color='rgb(253, 5, 5)';
    const error = input.closest('form').querySelector('.error');
    error.textContent = "";
    input.style.borderColor = '';
    const ok=inputCheck()?false:true;
    submitButton(ok);
})
form.addEventListener('submit',(e)=>{
    if (inputCheck()) {
        e.preventDefault();
        const error=form.querySelector('.error');
        error.textContent=inputCheck(); 
        error.style.color='red';
        input.style.borderColor='red';
        alert("Please fix the error before submitting");
    }
    else{
            alert("Form submitted.");
            form.submit();
            input.value='';
    }

})
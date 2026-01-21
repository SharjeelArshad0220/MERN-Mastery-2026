
// Grab the form once
const form = document.getElementById("signupForm");
if (!form) {
    console.warn("didn't get the form element.");
} else {
    // 1) Select fields as a NodeList so .forEach works
    const fields = form.querySelectorAll(".field");

    // 2) Attach blur + input handlers ONCE for all inputs
    fields.forEach((field) => {
        const input = field.querySelector("input");
        const errorEl = field.querySelector(".error");
        if (!input || !errorEl) return;

        // On blur, validate and show message
        input.addEventListener("blur", () => {
            guideUser(input, errorEl);
        });

        // On input, clear message and (optionally) re-check
        input.addEventListener("input", () => {
            input.setCustomValidity("");
            errorEl.textContent = "";
            // Optional live validation:
            // if (input.value) guideUser(input, errorEl);
        });
    });

    // 3) Confirm password logic + live hooks
    const pwd = form.elements.password;
    const confirmPwd = form.elements.confirmPassword;
    const confirmError = document.getElementById("confirmPassword-error");

    function validateConfirmPassword() {
        if (!confirmPwd || !confirmError) return;

        confirmPwd.setCustomValidity("");
        confirmError.textContent = "";

        if (!confirmPwd.value) return; // 'required' handles empty case

        if (pwd.value !== confirmPwd.value) {
            const msg = "Passwords do not match.";
            confirmPwd.setCustomValidity(msg);
            confirmError.textContent = msg;
        }
    }

    confirmPwd?.addEventListener("blur", validateConfirmPassword);
    pwd?.addEventListener("input", () => {
        if (confirmPwd?.value) validateConfirmPassword();
    });

    // 4) Submit: validate all and block if any invalid
    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Ensure confirm password rule is applied even if no blur happened
        validateConfirmPassword();

        fields.forEach((field) => {
            const input = field.querySelector("input");
            const errorEl = field.querySelector(".error");
            if (!input || !errorEl) return;

            const ok = guideUser(input, errorEl); // returns boolean
            if (!ok) isValid = false;
        });

        if (!isValid) {
            event.preventDefault();
            const firstInvalid = form.querySelector(":invalid");
            firstInvalid?.focus();
        }
    });
}

/**
 * Validate a single input using HTML5 constraints + custom messages.
 * Returns true/false so the caller can decide overall validity.
 */
function guideUser(input, errorEl) {
    // Reset first
    input.setCustomValidity("");
    errorEl.textContent = "";

    // Use native constraint API
    if (!input.checkValidity()) {
        let msg = "";

        if (input.validity.valueMissing) {
            msg = input.type === "checkbox" ? "Please agree to the terms to continue." : "This field is required.";
        }
        else if (input.validity.typeMismatch) {
            msg = "Please enter a valid value.";
        }
        else if (input.validity.tooShort) {
            msg = `Minimum ${input.minLength} characters required.`;
        }
        else if (input.validity.patternMismatch) {
            // Field-specific messages
            if (input.name === "phone") msg = "Use format 03XXXXXXXXX (11 digits).";
            else if (input.name === "cnic") msg = "Use format 61101-1234567-1.";
            else msg = "Use the correct format.";
        }

        input.setCustomValidity(msg);
        errorEl.textContent = msg;
    }

    // Return final validity state
    return input.checkValidity();
}

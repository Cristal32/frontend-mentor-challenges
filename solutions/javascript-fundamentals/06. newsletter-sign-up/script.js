const forms = document.querySelectorAll('form');
const signup = document.getElementById('signup');
const signup_success = document.getElementById('signup-success');
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("email-error");

for(const form of forms) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check if email input is valid
        emailError.textContent = "";
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "" || !emailPattern.test(emailValue)) {
            emailError.style.display = "inline-block";
            emailInput.focus();
        } else {
            document.getElementById("success-email").textContent = emailValue;

            if (signup.style.display === "none" || signup.style.display === "") {
                // When signup is hidden, show it and hide signup_success
                signup.style.display = "flex";
                signup_success.style.display = "none";
            } else {
                // When signup is visible, hide it and show signup_success
                signup.style.display = "none";
                signup_success.style.display = "flex";
            }
        }
    });
}
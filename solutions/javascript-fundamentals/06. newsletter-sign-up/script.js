const forms = document.querySelectorAll('form');
const signup = document.getElementById('signup');
const signup_success = document.getElementById('signup-success');

for(const form of forms) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById("emailInput").value;
        document.getElementById("success-email").textContent = email;

        if (signup.style.display === "none" || signup.style.display === "") {
            // When signup is hidden, show it and hide signup_success
            signup.style.display = "flex";
            signup_success.style.display = "none";
        } else {
            // When signup is visible, hide it and show signup_success
            signup.style.display = "none";
            signup_success.style.display = "flex";
        }
    });
}
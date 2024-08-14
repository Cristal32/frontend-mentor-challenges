const form = document.getElementById('signup-form');
const signup = document.getElementById('signup');
const signup_success = document.getElementById('signup-success');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    signup.style.display = "none";
    signup_success.style.display = "flex";
})
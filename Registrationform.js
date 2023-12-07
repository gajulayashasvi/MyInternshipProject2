document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Email format validation (simple check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password strength requirement (simple check)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // If all validations pass, show a confirmation message (you can redirect to another page)
    alert("Registration successful! Thank you for registering.");
});

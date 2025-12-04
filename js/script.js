document.getElementById("contactForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        e.preventDefault();
        alert("Name cannot be empty!");
        return;
    }
    if (!email.includes("@")) {
        e.preventDefault();
        alert("Email must have @ symbol!");
        return;
    }
    if (message.length < 10) {
        e.preventDefault();
        alert("Message too short! Minimum 10 characters.");
        return;
    }

    // Let the form submit normally if all validations pass
});

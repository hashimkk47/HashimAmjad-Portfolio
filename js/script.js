
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        alert("Name cannot be empty!");
        return;
    }
    if (!email.includes("@")) {
        alert("Email must have @ symbol!");
        return;
    }
    if (message.length < 10) {
        alert("Message too short! Minimum 10 characters.");
        return;
    }

    alert("Thanks " + name + "! Your message has been sent.");
    this.reset();
});
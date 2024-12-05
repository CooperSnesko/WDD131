document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const email = document.getElementById("email").value;
        const question = document.getElementById("question").value;

     
        if (name && number && email && question) {
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset(); // Clear form after submission
        } else {
            alert("Please fill in all fields.");
        }
    });
});

// Get elements from the webpage
const getStartedButton = document.getElementById("getStarted");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


// Function to scroll to the contact section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// Event listener for the Get Started button
getStartedButton.addEventListener("click", scrollToContact);


// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thanks, ${name}! Your feedback has been received.`;

    formMessage.style.color = "#2563eb";

    contactForm.reset();
}


// Event listener for form submission
contactForm.addEventListener("submit", handleFormSubmit);
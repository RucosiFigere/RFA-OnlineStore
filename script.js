let attempts = 0; // Track the number of attempts

// Define an array of acceptable answers
const validAnswers = [
    "rucosi figere atelier", // Full brand name
    "rucosi figere",         // Shortened version
    "figere atelier",        // Another variation
    "rucosi",                // Just the first part
    "atelier",               // Just the last part
    "rfa",                   // Abbreviation for the brand
    "figere",                // Just the middle part
    "rucosi atelier",        // Another combination
    "atelier rucosi"         // Another possible order
];

function checkPassword() {
    var userInput = document.getElementById("password").value.toLowerCase(); // Normalize user input to lowercase
    var galleryPage = document.getElementById("gallery-page");
    var errorMessage = document.getElementById("error-message");
    var hintMessage = document.getElementById("hint-message");

    // Check if the user input matches any of the valid answers (case-insensitive)
    if (validAnswers.some(answer => answer.toLowerCase() === userInput)) {
        // If the answer is correct, show the gallery page
        galleryPage.style.display = "block";
        document.querySelector(".landing-page").style.display = "none"; // Hide the password form
    } else {
        // If the answer is incorrect, increment the attempt counter
        attempts++;
        errorMessage.style.display = "block";

        if (attempts >= 3) {
            // After 3 failed attempts, show a reminder or hint
            hintMessage.style.display = "block";
            hintMessage.innerHTML = "Hint: It's something that represents your future journey in art and fashion.";
        }
    }
}

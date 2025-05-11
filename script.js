let attempts = 0; // Track the number of attempts

function checkPassword() {
    var userInput = document.getElementById("password").value.toLowerCase();
    var correctAnswer = "rucosi figere"; // Your brand name
    var galleryPage = document.getElementById("gallery-page");
    var errorMessage = document.getElementById("error-message");
    var hintMessage = document.getElementById("hint-message");

    if (userInput === correctAnswer) {
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

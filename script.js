function checkPassword() {
    var userInput = document.getElementById("password").value.toLowerCase();
    var correctAnswer = "rucosi figere"; // Your brand name
    var hiddenContent = document.getElementById("hidden-content");
    var errorMessage = document.getElementById("error-message");

    if (userInput === correctAnswer) {
        // If the answer is correct, show the hidden content
        hiddenContent.style.display = "block";
        document.querySelector(".landing-page").style.display = "none"; // Hide the password form
    } else {
        // If the answer is incorrect, show error message
        errorMessage.style.display = "block";
    }
}

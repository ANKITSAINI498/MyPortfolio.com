document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    const correctUserId = "sainikumar.in";
    const correctPassword = "Ankit@123";

    if (userId === correctUserId && password === correctPassword) {
        window.location.href = "admin.html"; // Redirect to admin.html
    } else {
        document.getElementById('message').innerText = "Only for login Admin Sir";
        document.getElementById("userId").value = ""; // Clear the input
        document.getElementById("password").value = ""; // Clear the input
    }
});

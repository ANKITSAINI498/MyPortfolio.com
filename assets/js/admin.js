// JavaScript for any dynamic features if needed in the future
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent!');
});

document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('imageBox');
    box.classList.toggle('animate');
});

// Adding animation class styles via JavaScript
const style = document.createElement('style');
style.textContent = `
    .animate {
        transform: translateY(-20px);
        transition: transform 0.5s ease;
    }
`;
document.head.appendChild(style);
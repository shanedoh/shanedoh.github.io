const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // Simulate sending data (replace with actual submission logic)
        console.log('Form submitted!');
        console.log('Name:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Message:', document.getElementById('message').value);
        // Clear form after submission (optional)
        form.reset();
    }
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name.trim() === '') {
        alert('Name is required.');
        isValid = false;
    }

     if (email.trim() === '') {
        alert('Email is required.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        alert('Invalid email format.');
        isValid = false;
    }

    if (message.trim() === '') {
        alert('Message is required.');
        isValid = false;
    }
    return isValid;
}

 function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
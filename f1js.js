document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        valid = false;
        document.getElementById('nameError').innerText = 'Name must be at least 5 characters long.';
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email Validation
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        valid = false;
        document.getElementById('emailError').innerText = 'Enter a valid email.';
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone Number Validation
    const phone = document.getElementById('phone').value;
    if (phone === '1234567890' || !/^\d{10}$/.test(phone)) {
        valid = false;
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number.';
        document.getElementById('phoneError').style.display = 'block';
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    const fullNameLowerCase = fullName.toLowerCase();
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullNameLowerCase) {
        valid = false;
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and cannot be "password" or your name.';
        document.getElementById('passwordError').style.display = 'block';
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }
     

    if (valid) {
        // Show success toast
        const successToast = new bootstrap.Toast(document.getElementById('successToast'));
        successToast.show();

        //Reseting the form 
        document.getElementById('registrationForm').reset();
    }
});

//for Navbar Help button
document.getElementById('helpButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert("If you need any help, please email us at:\ndan.shere007@gmail.com");
});
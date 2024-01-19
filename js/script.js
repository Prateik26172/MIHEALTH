document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    let loginForm = document.querySelector('.form-box-login');
    let loginButton = document.querySelector('#login-button');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
        loginForm.classList.remove('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginForm.classList.remove('show');
    }

    loginButton.addEventListener('click', function() {
        console.log('Login button clicked');
        loginForm.classList.toggle('active');
    });

    // JavaScript code to handle the "predict" link click event
    document.getElementById("predict-link").addEventListener("click", function(event) {
        // Prevent the default behavior of the link (preventing it from navigating)
        event.preventDefault();
        // Redirect to "ind.html"
        window.location.href = "machine learning works/templates/ind.html";
    });

    // Add a login event handler
    document.querySelector('#login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Replace these values with your actual email and password
        const validEmail = 'user@example.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
            // Redirect to Home.html on successful login
            window.location.href = 'Home.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});

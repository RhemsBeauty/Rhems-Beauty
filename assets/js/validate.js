
        function subscribe() {
            // Get the email address from the input field
            var emailAddress = document.getElementById('subscribeForm').elements['email_address'].value;

            // Perform some basic validation
            if (isValidEmail(emailAddress)) {
                // Simulate sending the email to your server (replace this with your actual server-side logic)
                alert('Subscription successful! Email: ' + emailAddress);
            } else {
                alert('Invalid email address. Please enter a valid email.');
            }
        }

        function isValidEmail(email) {
            // Basic email validation, replace with a more robust validation if needed
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

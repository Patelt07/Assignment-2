$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        var phoneInput = document.getElementById('phone');
            var phoneValue = phoneInput.value;

            if (phoneValue.length !== 10 || !/^\d+$/.test(phoneValue)) {
                alert('Please enter a valid 10-digit phone number.');
                return false;
            }


        // You can add more complex validation logic here if needed

        alert('Form submitted successfully!');
    });
});

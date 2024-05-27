document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Dummy confirmation message (replace with actual functionality)
    var message = 'Olá, ' + name + '! Sua presença foi confirmada. Obrigado!';

    // Display confirmation message
    document.getElementById('message').innerText = message;
});
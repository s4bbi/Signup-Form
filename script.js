document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signupButton');
    const container = document.getElementById('container');
    const signupForm = document.getElementById('signupForm');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const stdid = document.getElementById('stdid').value;
        const email = document.getElementById('e_mail').value;

        const apiKey = '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';

        const endpoint = 'https://api.sendgrid.com/v3/mail/send';

        const data = {
            personalizations: [{
                to: [{
                    email: email
                }],
                subject: 'Welcome to Spandan'
            }],
            from: {
                email: 'singhyashpreet22@gmail.com', 
                name: 'Spandan Signup'
            },
            content: [{
                type: 'text/plain',
                value: `Hello ${name},\n\nThank you for signing up for Spandan with Student ID ${stdid}.\n\nWelcome aboard!`
            }]
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Email sent successfully', data);
                signupForm.reset();
            })
            .catch(error => console.error('Error sending email', error));
    });
});

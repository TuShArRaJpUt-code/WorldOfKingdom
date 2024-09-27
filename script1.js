     // Function to retrieve the username from the URL
     function getUsernameFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('name');
    }

    // Display the welcome message
    window.onload = function() {
        const username = getUsernameFromUrl();
        if (username) {
            document.getElementById('welcomeMessage').textContent =` Hi , ${username} welcome you to our world of kingdom here you can click on any wolrd and start exploring `;
        } else {
            document.getElementById('welcomeMessage').textContent = 'Welcome, Guest!';
        }
    };
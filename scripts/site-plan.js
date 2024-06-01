document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        // Handle the event when the page is hidden
        console.log('Page is hidden');
        // Add your unload-like logic here
        // Example: save form data to local storage
        localStorage.setItem('formData', JSON.stringify(getFormData()));
    }
});

window.addEventListener('pagehide', function(event) {
    // Handle the event when the page is hidden or unloaded
    console.log('Page is hidden or unloaded');
    // Add your unload-like logic here
    // Example: log a message or send data to server
    sendDataToServer();
});

function getFormData() {
    // Example function to get form data
    return {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    };
}

function sendDataToServer() {
    // Example function to send data to the server
    // You can use fetch or XMLHttpRequest to send data
    fetch('/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Page hidden or unloaded' })
    });
}
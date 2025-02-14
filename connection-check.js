// Create a custom modal element to display the connection status
const connectionModal = document.createElement('div');
connectionModal.id = 'connectionModal';
connectionModal.style.position = 'fixed';
connectionModal.style.top = '0';
connectionModal.style.left = '0';
connectionModal.style.width = '100%';
connectionModal.style.padding = '20px';
connectionModal.style.backgroundColor = 'red';
connectionModal.style.color = 'white';
connectionModal.style.textAlign = 'center';
connectionModal.style.zIndex = '10000';
connectionModal.style.display = 'none'; // Initially hidden
document.body.appendChild(connectionModal);

// Variable to track if the page has already reloaded
let hasReloaded = false;

// Function to check if the user is online or offline
function checkInternetConnection() {
    if (navigator.onLine) {
        // If the user is online, show a "You're back online" message and reload once
        showConnectionModal('You\'re back online', 'green');
        if (!hasReloaded) {
            setTimeout(() => {
                window.location.reload();
                hasReloaded = true; // Set the reload flag to true
            }, 2000); // Reload after showing the message for 2 seconds
        }
    } else {
        // If the user is offline, show the "Connect your internet" message
        showConnectionModal('Connect your internet', 'red');
    }
}

// Function to show the connection modal with a dynamic message and color
function showConnectionModal(message, backgroundColor) {
    connectionModal.innerText = message;
    connectionModal.style.backgroundColor = backgroundColor;
    connectionModal.style.display = 'block';
}

// Check the internet connection on page load
window.addEventListener('load', function() {
    if (!navigator.onLine) {
        // Only show the message if the user is offline when the page loads
        showConnectionModal('Connect your internet', 'red');
    }
});

// Listen for changes in the network status
window.addEventListener('online', function() {
    // When the device comes back online, show the "You're back online" message
    checkInternetConnection();
});

window.addEventListener('offline', function() {
    // Show the offline message when the user goes offline
    showConnectionModal('Connect your internet', 'red');
});

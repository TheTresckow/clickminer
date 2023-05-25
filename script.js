// Function to update the status display
function updateStatus() {
    chrome.storage.local.get('isLogging', function(data) {
        let statusElement = document.getElementById('status');
        if (data.isLogging) {
            statusElement.textContent = 'Currently logging';
        } else {
            statusElement.textContent = 'Not logging';
        }
    });
}

// Add functionality to the buttons
document.getElementById('startLogging').addEventListener('click', function() {
    chrome.storage.local.set({isLogging: true}, updateStatus);
});

document.getElementById('stopLogging').addEventListener('click', function() {
    chrome.storage.local.set({isLogging: false}, updateStatus);
});

// Update the status display initially
updateStatus();

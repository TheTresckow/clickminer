// Variable to keep track of whether we're logging or not
let isLogging = false;

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(logEntry) {
    if (!isLogging) return;

    // Log the entry to the console
    console.log(logEntry);
});

// Listen for changes to the isLogging variable
chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (areaName === 'local' && changes.isLogging) {
        isLogging = changes.isLogging.newValue;
    }
});

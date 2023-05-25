// Function to handle clicks
function handleClick(event) {
    let tagName = event.target.tagName;
    let id = event.target.id;
    let className = event.target.className;
    let currentTime = new Date();
    let service = window.location;

    let logEntry = {
        time: currentTime,
        action: tagName,
        id: id,
        class: className,
        service: service
    };

    // Send the log entry to the background script
    chrome.runtime.sendMessage(logEntry);

        // Log the entry to the background page's console
    chrome.extension.getBackgroundPage().console.log(logEntry);
}

// Add the event listener
window.addEventListener('click', handleClick);

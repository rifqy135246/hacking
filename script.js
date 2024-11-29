const output = document.getElementById('output');
const loading = document.getElementById('loading');
const progressBar = document.getElementById('progress-bar');
const loadingText = document.getElementById('loading-text');

// Simulated "hacking" text
const lines = [
    "Establishing secure connection...",
    "Accessing user device...",
    "Fetching device information...",
    "Device Name: " + navigator.userAgent, // Displays device's user agent
    "Extracting sensitive data...",
    "Passwords retrieved: *****",
    "Downloading virus file...",
    "Injecting virus...",
    "Virus type Kyy 0.3.24 has been installed.",
    "System compromised.",
    "Hack completed."
];

// Delay in milliseconds for each line
const delay = 200;

// Generate random garbled text
function generateGarbledText(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to display lines with garbled text first
let index = 0;
function typeLines() {
    if (index < lines.length) {
        let garbledText = generateGarbledText(lines[index].length);
        output.textContent += garbledText + "\n"; // Display garbled text

        // Show the loading text when "Downloading virus" message appears
        if (lines[index].includes("Downloading virus")) {
            loading.style.visibility = 'visible'; // Show loading text
            progressBar.style.width = '0%'; // Reset progress bar
            setTimeout(() => {
                loadingText.textContent = "Downloading Virus... Please wait.";
                progressBar.style.transition = 'none'; // Disable transition for reset
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.transition = 'width 7s linear'; // Re-enable smooth transition
                    progressBar.style.width = '100%'; // Simulate downloading
                }, 500); // Delay before starting download animation
            }, 1000);
        }

        setTimeout(() => {
            output.textContent = output.textContent.replace(garbledText, lines[index] + "\n"); // Replace with actual text
            index++;
            setTimeout(typeLines, delay);
        }, 100); // Brief delay for garbled text
    }
}

// Change the content after 7 seconds to prank message
setTimeout(() => {
    output.textContent = ""; // Clear the terminal content
    output.innerHTML = "<p style='color:#00ff00;'>Selamat kamu kena prank!</p>";
    output.innerHTML += "<p style='color:#00ff00;'>Jangan dibawa serius ya, aku cuman gabut!</p>";
}, 11000); // After 7 seconds

typeLines();

let nickname = '';

// Function to handle user commands

function startup(){
    displayMessage("Type .login to enter the chatroom. Type .logout to exit the chatroom.");
}
window.addEventListener("load", startup);
function handleCommand(command) {
    // Implement the logic to process user commands here
    // You can handle different commands and perform corresponding actions
    // For example, sending messages, retrieving messages, etc.
    // This is just a placeholder, customize it as per your requirements
    if (command === ".login") {
        // Set the command to indicate that the next input will be the nickname
        nickname = '';
        displayMessage("Enter your nickname:");
    } else if (nickname === '') {
        // Treat the user's input as the nickname
        setNickname(command);
    } else if (command === ".logout") {
      logout();
      displayMessage("Please use '.login' to continue chatting")
    } else {
        // Treat the user's input as a message to send
        sendMessage(command, nickname);
    }
}

// Function to set the nickname
function setNickname(command) {
    nickname = command;
    displayMessage(`Nickname set: ${nickname}`);
}

// Function to send a message
function sendMessage(message, nickname) {
    // Implement the logic to send the message here
    // For now, we'll simply display the sent message in the output area
    displayMessage(`${nickname}: ${message}`);
}

// Function to handle logout
function logout() {
    // Implement the logic for logout here
    // For example, reset the nickname and clear the chat area
    nickname = '';
    displayMessage("Logged out successfully");
}

// Function to display messages in the output area
function displayMessage(message) {
    const outputElement = document.getElementById("output");
    const messageElement = document.createElement("p");
    messageElement.innerHTML = "<b>" + message + "</b>";
    outputElement.appendChild(messageElement);
    outputElement.scrollTop = outputElement.scrollHeight;
}

// Event listener for user input
const inputElement = document.getElementById("command-input");
inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = inputElement.value.trim();
        inputElement.value = "";
//        displayMessage("> " + command);
        handleCommand(command);
    }
});



// Focus on the input element
inputElement.focus();
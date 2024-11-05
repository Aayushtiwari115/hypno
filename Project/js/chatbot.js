// This script handles the chatbot's open/close functionality and user interactions

function openChatbot() {
    document.getElementById('chatbot').style.display = 'block';
}

function closeChatbot() {
    document.getElementById('chatbot').style.display = 'none';
}

function sendMessage() {
    var input = document.getElementById('userInput');
    var message = input.value.trim();
    if (message) {
        // Display user message
        var userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerText = message;
        document.getElementById('chatbot-messages').appendChild(userMessageDiv);
        input.value = ''; // Clear input

        // Simulate bot response
        var botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');
        botMessageDiv.innerText = "Thank you for your message! We will get back to you soon.";
        document.getElementById('chatbot-messages').appendChild(botMessageDiv);
    }
}

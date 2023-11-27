import React, { useState } from 'react';

const LoadingIndicator = () => <div>Loading...</div>;

const ChatBot = ({ isVisible, onClose }) => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Update the conversation with the user's input
    setConversation((prev) => [...prev, { sender: 'user', message: userInput }]);
    setLoading(true);

    try {
      // Send the user's message to the Flask backend using Fetch API
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: userInput + "I attend the University of Texas at Arlington" + "Please only return 500 chars max" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Update the conversation with the bot's response
      setConversation((prev) => [...prev, { sender: 'bot', message: data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }

    // Clear the input field
    setUserInput('');
  };

  return isVisible ? (
    <div className="flex flex-col items-center p-4">
      <div className="overflow-y-auto h-96 w-full bg-gray-200 p-3 space-y-2 dark:text-black dark:bg-ocean">
        {conversation.map((entry, index) => (
          <div key={index} className={`flex ${entry.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-3xl p-2 rounded ${entry.sender === 'bot' ? 'bg-orange' : 'bg-white'}`}>
              {entry.message}
            </div>
          </div>
        ))}
        {isLoading && <LoadingIndicator />}
      </div>
      <button onClick={onClose} className="flex top-0 right-0 m-2">
        {/* Your close button content */}
      </button>
      <div className="flex w-full mt-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 p-2 border-2 border-gray-300 rounded-l"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  ) : null;
};

export default ChatBot;

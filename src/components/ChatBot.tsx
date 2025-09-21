import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you find the perfect artisan products today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, 
        { id: messages.length + 1, text: inputText, isBot: false },
        { id: messages.length + 2, text: "Thanks for your message! This is a demo chatbot. In a real implementation, I'd help you find products, connect with artisans, and answer questions about blockchain verification.", isBot: true }
      ]);
      setInputText('');
    }
  };

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
          <div className="bg-purple-600 text-white p-4 rounded-t-lg flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">AI Assistant</span>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSend}
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
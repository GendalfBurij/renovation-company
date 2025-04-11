// components/chat/ChatWidget.jsx
import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
        const response = await fetch("/api/...", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error del servidor. Inténtalo más tarde.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      {open ? (
        <div className="chat-box">
          <div className="chat-header">
            <span>¿En qué podemos ayudarte?</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="chat-message bot">Escribiendo...</div>}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu pregunta..."
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;

import React, { useState } from 'react';
import axios from 'axios';
import './chatWidget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;


  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = async () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
    try {
        const response = await axios.post('https://openai80.p.rapidapi.com/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: newMessage
            }
          ]
        }, {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
          }
        });

        setResponses([...responses, response.data.choices[0].message.content])
        console.log(response.data.choices[0].message.content);
      } catch (error) {
        console.error(error);
      }
    
  };

  return (

    <>
    {isOpen && <div className="chat-widget">
    <div className="chat-header">
        <h2>Chat</h2> 
        <button className="close-button" onClick={handleClose}>
           X
        </button>
    </div>
   
    <div className="chat-messages">
        <p>{messages[messages.length - 1]}</p>
        <p>{responses[responses.length - 1]}</p>
    </div>
      
      <div className="chat-input">
        <input type="text" value={newMessage} onChange={handleMessageChange} placeholder="Type your message here..." onKeyPress={handleKeyPress} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div> }
    </>
  );
};

export default ChatWidget;

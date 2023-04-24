import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCirclePlus} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './chatWidget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);

  const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;


  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleWidgetClick = () => {
    setIsWidgetOpen(!isWidgetOpen);
    setIsChatOpen(!isChatOpen);
  }

  const handleClose = () => {
    setIsChatOpen(!isChatOpen);
    setIsWidgetOpen(!isWidgetOpen);
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
    {isWidgetOpen && <div className="chat-widget-head" onClick={handleWidgetClick}>
   <FontAwesomeIcon icon={faPersonCirclePlus} beat /></div>}
    {isChatOpen && <div className="chat-widget">
    <div className="chat-header">
        <h2>Need help?</h2> 
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

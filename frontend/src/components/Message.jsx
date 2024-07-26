import React, { useState, useEffect } from 'react';

function Message() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Message from backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default Message;
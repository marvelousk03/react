// // Message.jsx
// import React from 'react';

// function Message() {
//   return <p>This is a message from the Message component.</p>;
// }

// export default Message;


import React, { useState } from 'react';

function Test() {
  // useState gives us a variable (count) and a function to change it (setCount)
  const [count, setCount] = useState(0);

  // 🧁 Function to increase the count
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Cute Counter App </h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me </button>
    </div>
  );
}

export default Test; 

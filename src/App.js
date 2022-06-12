import "./App.css";
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import React, { useMemo } from 'react';

function App() {
  const directLine = useMemo(() => createDirectLine({ token: 'A-SZGw27zNA.Cl3EZoBO5yBaL1KtgVJfEimDNXMdDSwwPeg9IzARiug' }), []);
  return (
    <div className="container">
      <h1>Javascript Chatbot Using Microsoft Azure Bot Services</h1>
      <ReactWebChat directLine={directLine} userID="mdobaid311@gmail.com" />
      <h3>Just type the keyword in the message input field and press send.</h3>
      <span>* Example Keywords: <span>
        let, const, while, for loop, if etc *
      </span>
      </span>

    </div>
  );
  // const directLine = useMemo(() => createDirectLine({ token: 'A-SZGw27zNA.Cl3EZoBO5yBaL1KtgVJfEimDNXMdDSwwPeg9IzARiug' }), []);

  // return <ReactWebChat directLine={directLine} userID="mdobaid311@gmail.com" />;
}

export default App;

import "./App.css";
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import React, { useMemo } from 'react';

function App() {
  // access token or secret key of the Web App Bot obtained from the azure portal
  const azureBotToken = "q4uvYr7hNq8.EHhmKfqJT803s_sQefe-Mpovn4Vz3XCxEAiygHTgGv4"

  // using the createDirectLine method to create a connection with the azure web app bot.
  const directLine = useMemo(() => createDirectLine({ token: azureBotToken }), []);

  return (
    <div className="container">
      <h1>Javascript Chatbot Using Microsoft Azure Bot Services</h1>
      <div className="chatbox">
        {/* using the ReactWebChat component from botframework-webchat library*/}
        <ReactWebChat directLine={directLine} userID="mdobaid311@gmail.com" />
      </div>
      <h3>Just type the keyword in the message input field and press send.</h3>
      <span>* Example Keywords: <span>
        let, const, while, for loop, if etc *
      </span>
      </span>

    </div>
  );
}

export default App;

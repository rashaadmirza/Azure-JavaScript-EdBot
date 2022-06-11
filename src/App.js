import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Javascript Chatbot Using Microsoft Azure Bot Services</h1>
      <iframe
        src="https://webchat.botframework.com/embed/js-chatbot-by-obaid-bot?s=A-SZGw27zNA.t3uPZGJYJIV4HqS2cTfoXJ4vfaRrvZguLEmM0ghoY-E"
        // style="min-width: 400px; width: 100%; min-height: 500px;"
        className="chatbox"
      ></iframe>
      <h3>Just type the keyword in the message input field and press send.</h3>
      <span>* Example Keywords: <span>
        let, const, while, for loop, if etc *
      </span>
      </span>
    </div>
  );
}

export default App;

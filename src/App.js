import "./App.css";

function App() {
  return (
    <div>
      <h1>Javascript Chatbot Using Microsoft Azure Bot Services</h1>
      <h3>Just type the keyword in the message input field and press send.</h3>
      <h4>Example Keywords: let, const, while, for loop, if etc</h4>
      <iframe
        src="https://webchat.botframework.com/embed/js-chatbot-by-obaid-bot?s=A-SZGw27zNA.t3uPZGJYJIV4HqS2cTfoXJ4vfaRrvZguLEmM0ghoY-E"
        // style="min-width: 400px; width: 100%; min-height: 500px;"
        className="chatbox"
      ></iframe>
    </div>
  );
}

export default App;

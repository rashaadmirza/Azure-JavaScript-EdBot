**This App is created by Mohammed obaid.**

  

This is a Web Application Bot created with React.js and Microsoft Azure Web App Bot, QnA maker and will be deployed on web using Azure Deployment services.

  

**Steps taken for creation of this bot are as follows:**

1. Create a Microsoft Azure Account.

2. Go to Azure portal and search for QnA maker.

3. In the QnA maker page click on create button and fill in the required input fields and click on Review + create.

4. After the creation of the QnA maker go to the QnA maker knowledge base and add the required knowledge pairs.

5. Publish the knowledge base and click on create bot.

6. Fill in the input fields and click on create button.

7. After creation of the bot go to channels tab and copy the secret key.

8. Open the react application and install npm install botframework-webchat

9. After the installation import ReactWebChat, { createDirectLine } from 'botframework- webchat'.

10. Use the ReactWebChat and createDirectLine method to render the chatbot on the webpage.
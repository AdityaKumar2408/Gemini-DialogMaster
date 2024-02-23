# DialogMaster

DialogMaster is a chatbot application that allows users to interact with an AI-powered bot. Users can ask questions, and the bot will provide responses based on its training data.

## Features

- Responsive chat interface
- AI-powered bot for answering questions
- Real-time chat updates

## Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/dialog-master.git
```
Navigate to the project directory:
```bash
cd dialog-master
```
Install dependencies:
```bash
npm install
```

Start the server:
```bash
node server.js
```

1. Open your web browser and go to http://localhost:5000.

2. Start interacting with the chatbot by typing your questions in the input field and pressing Enter.

### Dependencies
1) Node.js
2) Express.js
   
### How It Works
The project consists of both frontend and backend components:

#### Frontend
##### HTML/CSS: 
The frontend interface is built using HTML for structure and CSS for styling. The index.html file defines the layout of the chat interface, including input fields and chat messages.

##### JavaScript (Vanilla):
The dynamic behavior of the chat interface is implemented using vanilla JavaScript. The script.js file handles user interactions, such as submitting messages and displaying responses from the bot. It also includes functions for loading animations and generating unique IDs for chat messages.

#### Backend
##### Server (Node.js):
The backend server is built using Node.js. The server.js file sets up an Express.js server to handle incoming requests from the frontend.

##### AI Model:
The core functionality of the chatbot is powered by an AI model. This model is responsible for understanding user queries and generating appropriate responses. The specifics of the AI model (e.g., machine learning framework, training data) are not explicitly mentioned in the provided code snippets, so you may need to provide more details on how the AI model is implemented and integrated with the backend.

#### Communication
##### HTTP Requests:
Communication between the frontend and backend is facilitated through HTTP requests. When a user submits a message in the chat interface, the frontend sends an HTTP POST request to the backend server with the user's query. The backend server processes the query and sends back a response, which is then displayed in the chat interface.

#### Additional Components
##### Assets:
The project includes various assets such as images (bot.svg, user.svg), icons, and stylesheets (style.css) to enhance the visual appearance of the chat interface.

##### Unique IDs: Each chat message is assigned a unique ID to facilitate message tracking and manipulation. The generateUniqueId() function in script.js generates these unique IDs.

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

#### Fork the repository.
1) Create a new branch (git checkout -b feature/your-feature-name).
2) Make your changes.
3) Commit your changes (git commit -am 'Add some feature').
4) Push to the branch (git push origin feature/your-feature-name).
5) Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


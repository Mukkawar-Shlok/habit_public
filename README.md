# HABIT TRACKER

##Getting Started<br />
Follow the steps below to set up and run the project on your local machine<br />
##Prerequisites<br />
Node.js and npm should be installed on your machine. You can download them from Node.js official website<br />
##Clone the Project<br />
git clone https://github.com/Mukkawar-Shlok/habit_public.git<br />
##Install Dependencies<br />
Navigate to the project directory using your terminal and run the following command to install the necessary dependencies:<br />
npm install<br />
##Set Up MongoDB<br />
Sign up for a free account on MongoDB Atlas.<br />
Create a new cluster and obtain the MongoDB connection URL.<br />
##Configure MongoDB Connection<br />
Replace the MONGODB_URL field with the MongoDB connection URL you obtained in the previous step.<br />
##Add User <br />
Go to your MongoDB Atlas dashboard.<br />
Navigate to the "Database Access" section.<br />
Add a new database user with the necessary permissions. Make sure to remember the username and password you set for this user.<br />
##Running the Project<br />
In your terminal, run the following command to start the server:<br />
node server.js<br />
The server will start running, and you can access the application by navigating to http://localhost:3000 in your web browser.<br />
#Project Structure
Explain the structure of your project files and directories if necessary. Provide a brief overview of the purpose of each major component.<br />

server.js: This is the entry point of the project. It initializes and starts the server.<br />
config.js or config.json: Configuration file where you store sensitive information like database URLs and API keys.<br />
routes/: Directory containing route files for different parts of the application.<br />
controllers/: Directory containing controller files that handle the logic for different routes.<br />
models/: Directory containing database schema models.<br />

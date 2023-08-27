﻿# HABIT TRACKER

##Getting Started
Follow the steps below to set up and run the project on your local machine
##Prerequisites
Node.js and npm should be installed on your machine. You can download them from Node.js official website
##Clone the Project
git clone https://github.com/Mukkawar-Shlok/habit_public.git
##Install Dependencies
Navigate to the project directory using your terminal and run the following command to install the necessary dependencies:
npm install
##Set Up MongoDB
Sign up for a free account on MongoDB Atlas.
Create a new cluster and obtain the MongoDB connection URL.
##Configure MongoDB Connection
Replace the MONGODB_URL field with the MongoDB connection URL you obtained in the previous step.
##Add User 
Go to your MongoDB Atlas dashboard.
Navigate to the "Database Access" section.
Add a new database user with the necessary permissions. Make sure to remember the username and password you set for this user.
##Running the Project
In your terminal, run the following command to start the server:
node server.js
The server will start running, and you can access the application by navigating to http://localhost:3000 in your web browser.
#Project Structure
Explain the structure of your project files and directories if necessary. Provide a brief overview of the purpose of each major component.

server.js: This is the entry point of the project. It initializes and starts the server.
config.js or config.json: Configuration file where you store sensitive information like database URLs and API keys.
routes/: Directory containing route files for different parts of the application.
controllers/: Directory containing controller files that handle the logic for different routes.
models/: Directory containing database schema models.

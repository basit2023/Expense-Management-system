# Expense Management System

Welcome to the Expense Management System project! This full-stack application consists of both front-end and back-end components, with the front-end named "client" and the back-end named "Back-end."

## Running the Front-end

To start the front-end of the application, follow these steps:

1. Create a React app for the client-side:
   ```bash
   npx create-react-app client
   ```

2. Install the necessary npm packages:
   ```bash
   npm install react antd moment axios @ant-design/icons
   ```

3. Launch the front-end development server:
   ```bash
   cd client
   npm start
   ```

This will open the front-end application in your default web browser.

## Running the Back-end

To run the back-end or server-side of the application, proceed with these steps:

1. Initialize a Node.js app and set it up:
   ```bash
   npm init --yes
   ```

2. Install the required packages for the back-end:
   ```bash
   npm install express mongoose dotenv cors morgan colors nodemon concurrently
   ```

3. Configure the "server" script in the `package.json` file to enable auto-reloading using Nodemon:
   ```json
   "scripts": {
     "server": "nodemon server.js"
   }
   ```

4. Start the back-end server:
   ```bash
   npm run server
   ```

Your back-end server will be up and running.

## Running Both Front-end and Back-end Together

To simultaneously run both the front-end and back-end, follow these instructions:

1. Configure the client-side proxy to communicate with the back-end:
   Add the following line to the client's `package.json` file:
   ```json
   "proxy": "http://localhost:8080/"
   ```
   Note that the back-end is accessible on port 8080.

2. Set up the necessary scripts in the back-end `package.json` for starting both the server and client concurrently:
   ```json
   "scripts": {
     "client": "npm start --prefix ../client",
     "dev": "concurrently \"npm run server\" \"npm run client\""
   }
   ```

3. Run the application in development mode:
   ```bash
   npm run dev
   ```

Both the front-end and back-end will be launched concurrently.

Please ensure that you adapt these instructions to your project's specific file structure and requirements. This README provides a comprehensive guide to setting up and running the Expense Management System project.
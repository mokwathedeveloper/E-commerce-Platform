# Project Setup and Usage Instructions

This document provides instructions on how to set up and run the E-commerce Platform project.

## 1. Install Dependencies

To install all the necessary project dependencies, navigate to the root directory of the project in your terminal and run the following command:

```bash
npm install
```

## 2. Run the Server in Development Mode

This project uses `nodemon` for development, which automatically restarts the server when file changes are detected. To start the server in development mode, use the following command:

```bash
npm run dev
```

This will start the Express server, and you should see a message indicating that the server is running on port 5000.

## 3. Configure MongoDB Connection

To connect the server to MongoDB, you need to provide your MongoDB connection string. This project uses `dotenv` to manage environment variables.

1.  Create a file named `.env` in the root directory of the project.
2.  Add the following lines to your `.env` file, replacing `your_mongodb_connection_string` with your actual MongoDB URI:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

    **Example:**
    `MONGO_URI="mongodb+srv://username:password@cluster0.eedppla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"`

Once the `.env` file is configured, the server will attempt to connect to MongoDB upon startup, and you will see a success or failure message in the console.

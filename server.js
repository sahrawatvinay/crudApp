// Import necessary modules
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();

// CORS options to allow requests from specific origins
const corsOptions = {
    //origin: ["https://localhost:8081", "https://your-production-domain.com"] // Add your production domain
    origin: true // This will allow requests from any origin
};

// Apply security and logging middlewares
app.use(cors(corsOptions)); // Enables CORS with specified options
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests

// Basic route for testing
app.get("/", (req, res) => {
    res.json({ message: "Hello from CRUD API" });
});

// Define the port, prefer environment variable in production
const PORT = process.env.PORT || 8080;

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

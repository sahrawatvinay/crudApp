// Import the database configuration
const dbConfig = require("../config/dbConfig");

// Import Sequelize and DataTypes from sequelize package
const { Sequelize, DataTypes } = require("sequelize");

// Create a new Sequelize instance using the database configuration
const sequelize = new Sequelize(
    dbConfig.DB, // Database name
    dbConfig.USER, // Database username
    dbConfig.PASSWORD, // Database password
    {
        host: dbConfig.HOST, // Database host
        dialect: dbConfig.DIALECT, // Database dialect (MySQL in this case)
        pool: {
            max: dbConfig.pool.max, // Maximum number of connections in pool
            min: dbConfig.pool.min, // Minimum number of connections in pool
            acquire: dbConfig.pool.acquire, // Maximum time (in ms) Sequelize will try to get a connection before throwing an error
            idle: dbConfig.pool.idle // Maximum time (in ms) a connection can be idle before being released
        }
    }
);

// Authenticate the connection to the database
sequelize.authenticate()
    .then(() => {
        console.log("Database connection established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

// Define an empty object to store Sequelize models and the connection instance
const db = {};

// Add Sequelize and sequelize instances to the db object
db.Sequelize = Sequelize; // Sequelize library
db.sequelize = sequelize; // Sequelize connection instance

// Import and initialize models, adding them to the db object
db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);

// Synchronize the models with the database (without forcing the drop and recreation of tables)
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Database synchronized successfully.");
    });

// Export the db object for use in other parts of the application
module.exports = db;

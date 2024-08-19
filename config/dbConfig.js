module.exports = {
    HOST: "localhost", // The database server's hostname or IP address
    USER: "root", // The username to connect to the database
    PASSWORD: "password", // The password for the specified user
    DB: "node_sequelize_api_db", // The name of the database to connect to
    DIALECT: "mysql", // The database dialect to be used (in this case, MySQL)
    pool: {
        max: 5, // Maximum number of connection instances in the pool
        min: 0, // Minimum number of connection instances in the pool
        acquire: 30000, // The maximum time (in milliseconds) that pool will try to get a connection before throwing an error
        idle: 10000 // The maximum time (in milliseconds) that a connection can be idle before being released
    }
};

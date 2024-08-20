module.exports = (sequelize, DataTypes) => {
    // Define the Product model with various attributes
    const Review = sequelize.define("review", {
        raitng: {
            type: DataTypes.INTEGER, // Defines the 'rating' attribute as an INTEGER type
        },
        description: {
            type: DataTypes.TEXT, // Defines the 'description' attribute as a TEXT type
        }
    }, {
        timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
        tableName: 'reviews' // Explicitly specify the table name if different from the model name
    });

    // Returning the defined model
    return Review;
};

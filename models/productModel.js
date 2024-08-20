module.exports = (sequelize, DataTypes) => {
    // Define the Product model with various attributes
    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING, // Defines the 'title' attribute as a STRING type
            allowNull: false // This field is required; cannot be null
        },
        price: {
            type: DataTypes.STRING, // Defines the 'price' attribute as a STRING type
            // Consider using DataTypes.DECIMAL or DataTypes.FLOAT for more accurate price representation
        },
        description: {
            type: DataTypes.TEXT, // Defines the 'description' attribute as a TEXT type
            // TEXT is used here to allow longer content than STRING
        },
        published: {
            type: DataTypes.BOOLEAN, // Defines the 'published' attribute as a BOOLEAN type
            // Used to indicate if the product is published or not
        }
    }, {
        timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
        tableName: 'products' // Explicitly specify the table name if different from the model name
    });

    // Returning the defined model
    return Product;
};

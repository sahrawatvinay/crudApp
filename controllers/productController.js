const db = require("../models");
const Product = db.products;

//CRUD Operations
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published
    };
    const product = await Product.create(info);
    res.status(200).send(product);
}

const getAllProducts = async (req, res) => {
    const products = await Product.findAll({}); // we can also find specific properties
    res.status(200).send(products);
}

const getSingleProduct = async (req, res) => {
    let id = req.params.id;
    const product = Product.findOne({ where: { id: id } });
    res.status(200).send(product);
}

const updateProduct = async (req, res) => {
    let id = req.params.id;
    const product = Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
}

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send("Product deleted successfully");
}

const getPublishedProducts = async (req, res) => {
    const products = Product.findAll({ where: { published: true } });
    res.status(200).send(products);
}

module.exports = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getPublishedProducts
};
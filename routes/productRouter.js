const productController = require("../controllers/productController");
const router = require("express").Router();

router.get("/allproducts", productController.getAllProducts);
router.get("/published", productController.getPublishedProducts);
router.post("/addProduct", productController.addProduct);

router.get("/:id", productController.getSingleProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
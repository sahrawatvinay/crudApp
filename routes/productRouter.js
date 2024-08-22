const productController = require("../controllers/productController");
const reviewController = require("../controllers/reviewController");

const router = require("express").Router();

router.get("/allproducts", productController.getAllProducts);
router.get("/published", productController.getPublishedProducts);
router.post("/addProduct", productController.addProduct);

router.get("/getProductReviews", productController.getProductReviews);

router.get("/:id", productController.getSingleProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

router.post("/addReview", reviewController.addReview);
router.get("/allReviews", reviewController.getAllReviews);
module.exports = router;
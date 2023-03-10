const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// 상세 페이지 & 옵션
router.get("/:productId", productController.getProductDetail);
router.get("/", productController.productList);
//리뷰
router.get("/:productId/reviews", productController.getProductReview);

module.exports = {
  router,
};

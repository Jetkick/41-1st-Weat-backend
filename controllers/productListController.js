const productListService = require("../services/productListService");
const { asyncErrorHandler } = require("../middlewares/errorHandling");

// 메인화면 top6
// url/lists?best

// 선택 카테고리 없음(기본값 1), 첫 페이지(기본값, 1)
// url/lists

// 선택 카테고리 = 2, 기본 페이지(기본값, 1)
// url/lists?category=2

// 선택 카테고리 = 2, 페이지 번호  = 2
// url/lists?category=2&page=2

const productList = asyncErrorHandler(async (req, res) => {
  const { best, category, page } = req.query;

  const productListArray = await productListService.productList(
    best,
    category,
    page
  );
  return res.status(201).json({ data: productListArray });
});

module.exports = {
  productList,
};

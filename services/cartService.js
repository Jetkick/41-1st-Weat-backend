require("dotenv").config();

const cartDao = require("../models/cartDao");

// 1. 장바구니에 상품 추가
// await cartService.create(itemId, thick, count);
const create = async (itemId, thick, count) => {
  // 1-1. DB로부터 재고 무게를 가져옴
  const stock = await cartDao.getStock(itemId);
  // 1-2. 장바구니에 담을 고기 무게보다 재고가 부족하면 품절 에러 반환
  if (thick * count > stock) {
    const err = new Error("SOLD_OUT");
    // 에러 코드는 409 가 맞을지, 다른 코드가 더 적절할지?
    err.statusCode = 409;
    throw err;
  }
  // 1-3. thick * count 즉 장바구니에 담을 고기 무게보다 재고 수가 크거나 같으면
  // 1-4. 장바구니에 고기를 담는다.
  return await cartDao.create(itemId, thick, count);
};

// 2. 장바구니 조회
const read = async () => {
  return await cartDao.read();
};

// // 5. 유저 게시글 조회
// const showUserPost = async (userId) => {
//   return await postDao.showUserPost(userId);
// };

// // 6. 게시글 수정
// const modifyUserPost = async (content, userId, postId) => {
//   return await postDao.modifyUserPost(content, userId, postId);
// };

// // 7. 게시글 삭제
// const deletePost = async (postId) => {
//   await postDao.deletePost(postId);
// };

module.exports = {
  create,
  read,
  // update,
  // delete,
  getStock,
};

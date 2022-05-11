<<<<<<< HEAD
const {Review, User, Product } = require("../db")
=======
const { Review, User } = require("../db")
>>>>>>> 6c4f4b16dc57a6f5cfd26f12efdeb7c504cf410f

const getReviewByProduct = async () => {
  try {
    return await Product.findAll({
      include: Review
    })
  } catch (error) {
    console.log(error)
  }
}

<<<<<<< HEAD
const getReviewByUser = async () => {
  try {
    return await User.findAll({
      include: Review
    })
  } catch (error) {
    console.log(error)
  }
}

const setReview = async (user_id, product_id, product_review) => {
  try {
    const review = await Review.create({
      product_review,
      product_id,
      user_id
    })
    return review
  } catch (error) {
    console.log(error)
  }
}

const updateReview = async (id, product_review) =>{
  try {
    const review = await Review.findByPk(id);
    review.product_review = product_review;
    await review.save();
    return review
  } catch (error) {
    console.log(error)
  }
}

const deleteReview = async (id) => {
  try {
    const review = await Review.findByPk(id);
    review.destroy();
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getReviewByUser,  getReviewByProduct, setReview, updateReview, deleteReview}
=======
let test = "test"

module.exports = { getReview }
>>>>>>> 6c4f4b16dc57a6f5cfd26f12efdeb7c504cf410f
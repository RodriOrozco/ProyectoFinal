const { Router } = require("express")
const { getReviewByProduct, getReviewByUser, setReview, updateReview, deleteReview } = require("../controllers")

const router = Router()


//TRAER REVIEWS DE LA BASE DE DATOS POR PRODUCTO
router.get("/product", async (req, res, next) => {
  try {
    res.send( await getReviewByProduct())
  } catch (err) {
    next(err)
  }
})

//TRAER REVIEWS DE LA BASE DE DATOS POR USUARIO
router.get("/user", async (req, res, next) => {
  try {
    res.send( await getReviewByUser())
  } catch (err) {
    next(err)
  }
})


//GUARDAR REVIEWS
router.post('/', async (req, res, next) => {
  const {user_id, product_id, product_review} = req.body; 
  try {
    res.send(setReview(user_id, product_id, product_review))
  } catch (error) {
    console.log(error)
  }
})

//EDITAR REVIEW
router.put('/', async (req, res, next) => {
  const {id, product_review} = req.body; 
  try {
    res.send(updateReview(id, product_review))
  } catch (error) {
    console.log(error)
  }
})


//ELIMINAR REVIEW
router.delete('/', async (req, res, next) => {
  const {id} = req.body
  try {
    res.send(await deleteReview(id));
  } catch (error) {
    console.log(error)
  }
})

module.exports = router

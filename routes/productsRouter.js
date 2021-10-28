
const express = require("express");
const faker = require("faker");
const authHandler= require("../middlewares/authHandlers");
const product = require("../usesCases/products");

const router = express.Router();

//products
router.get("/", async (request, response, next) => {
  const { limit } = request.query;

  try {
  const products = await product.get(limit);
  response.json({
  ok: true,
  message: "Done!",
  payload: {products}, 
});
} catch (error){ 
  next (error);
}
});


router.get("/:id", async (request, response, next) => {
  const {id}= request.params;

  try {
    const productById= await product.getById(id);
    response.json({
      ok:true,
      message: "Done!",
      payload: {productById},
    });
  } catch (error) {
    next(error);
  }
});

// router.use (authHandler); 

router.post("/", async (request, response, next) => {
  try {
      const productData = request.body;
      const productCreated= await product.create(productData);
      
      response.status(201).json({
        ok:true, 
        message:"New product created",
        payload: {
          product: productCreated,
        },
      });
  }catch (error){
    next(error);
 }
});

router.patch("/:id", async (request, response, next) => {
  
  //const { name, price } = request.body;

  try {
    const { id } = request.params;
    const productData= request.body;
    const productUpdate = await product.update(id, productData);
    response.json({
      ok: true,
      message: "Product updated successfully",
      payload: { 
        product: productUpdate ,
       }
    });
  } catch (error) {
    next(error);
  }
});
 

router.delete("/:id",async (request, response,next) => {
  const { id } = request.params;
 try {
   
     const deletedProduct= await product.del(id)
      response.json({
        ok:true,
        message: "Product deleted successfully",
        payload: {
          product: deletedProduct,
        }
   });
   } catch (error){
    next (error);
  }
});
  
module.exports = router;
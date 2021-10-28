const express = require("express");
const categories= require("../usesCases/categories");

const router = express.Router();

// categories:
router. get ("/", async (request, response, next)=>{
    const categories1= [];
    const {limit}= request.query; 

    try { 
        const categories1= await categories.get (); 
        response.json ({
            ok:true, 
            message: "Done!", 
            payload: {categories1}
        });
    }catch (error){
        next (error);
    }
});
 

// getById 
router.get("/:id", async (request,response, next)=>{
    const {id}= request.params;

    try {
        const categoriesById= await categories.getById(id);
        response.json({
            ok:true,
            message: "Done!",
            payload: {categoriesById},
        });
    }catch(error){
        next(error);
    }
});


//creating post 

router.post ("/", async (request,response,next)=> {
    try {
        const categoriesData= request.body; 
        const categoriesCreated= await categories.create(categoriesData);

        response.status(201).json({
            ok:true,
            message: "New category created",
            payload: {
                categories: categoriesCreated,
            },
        });
    }catch(error){
        next(error);
    }
});


//patch de categories

router.patch("/:id", async (request,response, next)=>{
    try {
      const {id}= request.params; 
      const categoriesData= request.body; 
      const categoriesUpdate= await categories.update(id, categoriesData);
      response.json ({
        ok:true,
        message: "categories updated successfully",
        payload: {
          categories: categoriesUpdate,
        }
      });
    } catch (error){
      next(error);
    }
  });

 //delete  categories 
 router.delete("/:id", async (request,response, next)=> {
     const {id}= request.params; 
    try {
         const categoriesDeleted= await categories.del(id); 
         response.json({
             ok:true, 
             message: "category deleted successfylly",
             payload: {
                 categories: categoriesDeleted,
             }
         })
    }catch (error){
        next (error);
    }
 });


module.exports = router;
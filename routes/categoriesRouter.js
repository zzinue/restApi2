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
            message: "New categorie created",
            payload: {
                categories: categoriesCreated,
            },
        });
    }catch(error){
        next(error);
    }
});


//delete 
router.delete("/:id", (req,res)=> {
    const {id}=req.params; 
    //logica para eliminar
    res.status(202).json({
        ok:true, 
        message: `categorie ${id} deleted successfully`,
    });
});



module.exports = router;
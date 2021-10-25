const express = require ("express")
const router= express.Router ()
module.exports= router


router.get("/categories", (request, response)=>{
    const categories =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        categories.push({
            categories: faker.commerce.department(),
    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: categories,
        });
    }else {
        response.json({
            ok:false, 
            message : " numero de categories"
        }); 
    }
});
router.get("/categories/:categoriesId", (request, response, next) => {
    try {
      throw "Error generico";
      // const { id } = request.params;
      // response.json({
      //   id,
      //   name: "Product 1",
      //   price: 1000,
      // });
    } catch (error) {
      next(error);
    }
  });
//app.get ("/categories/:categoriesId", (request, response)=>{
       // const {categoriesId}= request.params; 
      //  response.json({
        //    categoriesId, 
            
 //       });
    
//});









router.post("/", (request, response) => {
    const body = request.body;
  
    // Logica del negocio
  
    response.json({
      ok: true,
      message: "Created successfully",
      payload: {
        body,
      },
    });
  });


  router.patch("/:categoriesId", (request, response) => {
    const { id } = request.params;
    const { categories } = request.body;
  
    if (id == 99) {
      response.status(404).json({
        ok: false,
        message: "Product not found",
      });
    } else {
      response.status(201).json({
        ok: true,
        message: `Product ${id} updated successfully`,
        payload: {
          categories,
        },
      });
    }
  });
  
  router.delete("/categories/:categoriesId", (req, res) => {
    const { id } = req.params;
    // Logica para eliminar
    res.status(202).json({
      ok: true,
      message: `category ${id} deleted successfully`,
    });
  });
  
  module.exports = router;
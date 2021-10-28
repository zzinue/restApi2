 const express = require("express");
const categories = require("../models/categories");
const user= require("../usesCases/users");

const router = express.Router();

//users
router.get("/", async (request, response,next) => {
  const users=[];
  const {limit}= request.query; 

  try{
    const users= await user.get();
    response.json({
      ok:true,
      message: "Done!",
      payload: {users},
    });
  }catch (error){
    next (error);
  }
});


// users por id 

router.get ("/:id", async(request, response, next)=>{
  const {id}=request.params;

  try { 
    const userId= await user.getById(id);
    response.json({
      ok:true, 
      message: "Done!",
      payload: {userId}, 
    });
  }catch (error){ 
    next (error); 
  }
});



router.post ("/", async (request, response, next)=> {
  try { 
    const userData= request.body; 
    const userCreated= await user.create(userData);

    response.status(201).json({ 
      ok:true,
      message: "New user created", 
      payload: {
        user: userCreated,
      },
    });
  }catch (error){
    next(error);
  }
}); 

//patch de users
router.patch("/:id", async (request, response, next)=> {
  try {
    const {id}= request.params;
    const userData= request.body;
    const userUpdate= await user.update(id, userData); 
    response.json({
      ok:true,
      message: "User updated successfully",
      payload:{
        user: userUpdate,
      }
    })
  }catch (error){
    next (error);
  }
});


// eliminar usuario 

router.delete("/:id", async (request,response,next)=>{

    const {id}= request.params;
  try{ 
    
  const usersDeleted= await user.del(id)
  response.json({
    ok:true, 
    message: "User deleted successfully",
    payload: {
      user: usersDeleted,
    }
  });
 } catch (error){
   next (error);
}
});


module.exports = router;
 
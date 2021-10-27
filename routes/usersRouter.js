 const express = require("express");
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


// post 

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


/* /* lo puso Alfred   res.json([
    {
      id: 1,
      username: "alfredoa",
      firstName: "Alfredo",
      lastName: "Altamirano",
    },
    {
      id: 2,
      username: "clauro",
      firstName: "Claudia",
      lastName: "Rodrigez",
    },
  ]);
 */

/* 
router.get("/:id", (req, res) => {
  const {id}=req.params;
  req.status(200).json({
    id,
    username: "alfredoa",
    firstName: "Alfredo",
    lastName: "Altamirano",
  });
  }); */
   

module.exports = router;
 